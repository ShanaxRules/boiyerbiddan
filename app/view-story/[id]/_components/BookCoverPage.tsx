import Image from 'next/image'
import React from 'react'

function BookCoverPage({imageUrl}:any) {
  return (
    <div>
        <Image src={'/imageurl.png'} alt='cover' width={500} height={500}></Image>


    </div>
  )
}

export default BookCoverPage