import Image from 'next/image'
import React from 'react'

function DashboardHeader() {
  return (
    <div className='p-7 bg-primary text-white flex justify-between items-center'>
        <h2 className='font-bold text-3xl'>My Stories</h2>
        <div className='flex gap-3 items-center'>
            <Image className='rounded-full' src={'/coin.jpg'} alt='coin' width={50} height={50}></Image>
            <span className='text-2xl'>আপনার সকল গল্প এখানে </span>


        </div>




    </div>
  )
}

export default DashboardHeader