"use client"

import React from 'react'
import Image from 'next/image'

const EditProfile = () => {
  return (
    <div>
      <div></div>
      <div className='md:grid grid-cols-4'>
        <div className='col-span-1 bg-gray-100 p-4 rounded-full flex flex-col items-center gap-4 px-10 py-8'>
          <div className='w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg'>
          <Image 
          src="/user-cover-image.jpg" 
          alt="Profile" 
          width={128} 
          height={128} 
          className="object-cover h-full w-full" 
          />
          </div>
          <div className="text-center font-poppins">
            <h2 className="text-xl font-bold">John Doe</h2>
            <p className="text-gray-600">john.doe@example.com</p>
          </div>
        </div>
        <div className='col-span-3 p-4'>
        </div>
      </div>
    </div>
  )
}

export default EditProfile