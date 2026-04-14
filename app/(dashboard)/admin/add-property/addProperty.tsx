"use client"

import React from 'react'
import { ChevronRight } from 'lucide-react'

const AddProperty = () => {
  return (
    <div className="p-4 lg:p-8 w-full flex flex-col gap-6 bg-slate-100">
      <div className="flex justify-between items-center gap-2">
        <h1 className="text-2xl font-bold font-montserrat text-slate-800 mb-4">Add New Property</h1>
        <div className='flex gap-2 justify-center items-center'>
          <h2 className='text-2xl font-bold font-montserrat'>PrimePath</h2>
          <ChevronRight size={20} className="inline mx-1" />
          <p></p>
        </div>
      </div>

      <div className="bg-slate-100 p-6 shadow-sm grid grid-cols-2 gap-10 ">
        <div className="rounded-xl border border-slate-200 p-6 flex flex-col gap-4">
          <h3 className='text-xl font-montserrat font-bold capitalize'>upload your property images</h3>
          <input 
          type="file" 
          name="property-images" 
          id="property-images"
          multiple
          className="border border-gray-300 font-poppins text-lg rounded-md p-4 w-full"
          />
          <button className="bg-blue-500 font-poppins text-lg text-white py-4 px-4 rounded-md hover:bg-blue-600">
            Upload Images
          </button>
        </div>

        <div className="flex flex-col gap-10 rounded-xl border border-slate-200 p-6">
          <h3 className='text-xl font-montserrat font-bold capitalize'>Property Details</h3>
          <form action="" className="flex font-poppins text-lg flex-col gap-6">
            <div>
              <label htmlFor="property-name">Title</label>
              <input 
                type="text" 
                name="title" 
                id="property-name" 
                className="border border-gray-300 rounded-md p-4 w-full"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label htmlFor="square-ft">Square ft</label>
                <input 
                type="text" 
                name="square-ft" 
                id="square-ft" 
                className="border border-gray-300 rounded-md p-4 w-full" 
                />
              </div>
              <div>
                <label htmlFor="beds">Beds</label>
                <input 
                type="text" 
                name="beds" 
                id="beds" 
                className="border border-gray-300 rounded-md p-4 w-full" 
                />
              </div>
              <div>
                <label htmlFor="baths">Baths</label>
                <input 
                type="text" 
                name="baths" 
                id="baths" 
                className="border border-gray-300 rounded-md p-4 w-full" 
                />
              </div>
            </div>
            <div>
              <label htmlFor="price">Price</label>
              <input 
                type="text" 
                name="price" 
                id="price" 
                className="border border-gray-300 rounded-md p-4 w-full" 
              />
            </div>
            <button type="submit" className="bg-blue-500 text-white py-4 px-4 rounded-md hover:bg-blue-600">
              Add Property
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddProperty