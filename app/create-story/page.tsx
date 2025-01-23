"use client"
import React, { useState } from 'react'
import StorySubjectInput from './_components/StorySubjectInput'
import StoryType from './_components/StoryType'
import AgeGroup from './_components/AgeGroup'
import ImageStyle from './_components/ImageStyle'
import { Button} from '@heroui/react'
import { chatSession } from '@/config/GeminiAi'
import { db } from '@/config/db'
import { StoryData } from '@/config/schema'
import uuid4 from "uuid4";
import { ColumnAliasProxyHandler } from 'drizzle-orm'
import CustomLoader from './_components/CustomLoader'
import axios from 'axios'
import { useUser } from '@clerk/nextjs'
import { toast } from 'react-toastify'
import { fal } from "@fal-ai/client";



const CREATE_STORY_PROMPT=process.env.NEXT_PUBLIC_CREATE_STORY_PROMPT

export interface fieldData{
  fieldName:string,
  fieldValue:string

}

export interface formDataType{
  storySubject: string,
  storyType: string,
  imageStyle:string,
  ageGroup:string
}
function CreateStory() {

  const [formData , setFormData] = useState<formDataType>();
  const [loading , setLoading] = useState(false)
  const {user} = useUser();
  const notify = (msg:string) => toast(msg);
  const notifyError = (msg:string) =>toast.error(msg);


  //Used to add data to form

  const onHandleUserSelection = (data:fieldData) =>{
    
      setFormData((prev:any)=>({
        ...prev,
        [data.fieldName]:data.fieldValue
      }

      ))
      console.log(formData)

  }

  const GenerateStory=async()=>{
    setLoading(true)
    const FINAL_PROMPT=CREATE_STORY_PROMPT
    ?.replace('{ageGroup}', formData?.ageGroup??'')
    .replace('{storyType}', formData?.storyType??'')
    .replace('{storySubject}', formData?.storySubject??'')
    .replace('{imageStyle}', formData?.imageStyle??'')
    //Generate Ai story
    try{
      
      const result = await chatSession.sendMessage(FINAL_PROMPT)
      const story=JSON.parse(result?.response.text());
     // this is not working properly
      const imageResp = await axios.post('/api/generate-image' ,{
          prompt: 'Add  text with title of cartoon boy:'+story?.bookTitle + 'in bold text for book cover , '+story?.cover?.imagePrompt
      })

      console.log(imageResp?.data)

     


      


      const resp = await SaveInDB(result?.response.text())
      notify("Story generated successfully")
      console.log(resp);
      setLoading(false)


    }catch(e){
      console.log(e)
      notifyError('Server error , try again')
      setLoading(false)
    }


    //Save in database



    //generate image

  }

  const SaveInDB = async (output: string) => {
    if (!formData) {
      throw new Error('Form data is missing');
    }
  
    const recordId = uuid4(); 
    setLoading(true)
    try{
    const result = await db.insert(StoryData).values({
      storyId: recordId,
      ageGroup: formData.ageGroup ?? '',
      imageStyle: formData.imageStyle ?? '',
      storySubject: formData.storySubject ?? '',
      storyType: formData.storyType ?? '',
      coverImage:"none",
      userEmail:user?.primaryEmailAddress?.emailAddress,
      userImage:user?.imageUrl,
      userName:user?.fullName,
      output: JSON.parse(output)
      
    }).returning({storyId:StoryData?.storyId})
    setLoading(false)
    return result
  
  }catch(e){
    setLoading(false)
    console.log(e)
  }
  };




  return (
    <div className='p-10 md:px-20 lg:px-40'>
      <h2 className='font-extrabold text-[70px] text-primary text-center'>আপনার গল্প কে টেক্সট হিসেবে লিখুন </h2>
      <p className='text-2xl text-primary text-center'>আপনার দক্ষতা ও বুদ্ধিমত্তা কে আরো বৃদ্ধি করুন AI এর মাধ্যমে , হাজারো গল্প বানান সুন্দর করে যা কখনো দেখেনি কেউ </p>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-14'>
        {/* Story Subject */}
        <StorySubjectInput userSelection={onHandleUserSelection}></StorySubjectInput>



        {/* story type */}
        <StoryType userSelection={onHandleUserSelection}></StoryType>


        {/* age group */}
        <AgeGroup userSelection={onHandleUserSelection}></AgeGroup>



        {/* image style */}
        <ImageStyle userSelection={onHandleUserSelection}></ImageStyle>

      </div>

      <div className='flex justify-end my-10'>
        <Button color='primary' disabled={loading} className='p-10 text-2xl' onClick={GenerateStory}>Generate Story</Button>
      </div>
      <CustomLoader isLoading={loading}></CustomLoader>
    </div>
  )
}

export default CreateStory