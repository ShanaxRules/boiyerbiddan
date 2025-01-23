import { Button } from '@heroui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Hero() {
  return (
    <div className='px-10 md:px-28 lg:px-44 mt-10 h-screen'>
      <div className='grid grid-cols-1 md:grid-cols-2 '>
        <div>
          <h2 className='text-[70px] text-primary font-extrabold py-10'>মুহূর্তে জাদুর গল্প তৈরী করুন শিশুদের জন্য</h2>
          <p className='text-2xl text-primary font-light'>ছোটদের জন্য তৈরী করুন মজার গল্প যেটি শুধু ছোটদের জন্য তৈরী হবে আলাদা করে</p>
          <Link href={'/create-story'}> <Button size='lg' color='primary' className='mt-8 font-bold text-2xl p-8'>Create Story</Button></Link>
         


        </div>
        <div>
          <Image src={'/hero.png'} alt='hero' width={700} height={400}></Image>


        </div>

      </div>
    </div>
  )
}

export default Hero