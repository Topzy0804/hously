import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"

const About = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-30'>
      <div>
        <Image 
        src="/house-about.jpg" 
        alt="About Us" 
        width={1200} height={700} 
        className="w-full h-auto object-contain rounded-lg shadow-lg"/>
      </div>

      <div className='flex flex-col gap-5'>
        <h1 className='font-montserrat text-2xl font-bold'>Efficiency, Reliability, and Excellence</h1>
        <p className='font-inter text-gray-500`'>PrimePath developed a platform for the Real Estate marketplace that allows buyers and sellers to easily execute a transaction on their own. The platform drives efficiency, cost transparency and control into the hands of the consumers. PrimePath is Real Estate Redefined.</p>
        <Button variant="outline" className="bg-blue-700 dark:bg-blue-700 dark:hover:border-blue-700 text-white font-bold px-10 py-5 rounded-2xl mt-5 border  border-black font-inter">Learn More</Button>
      </div>
    </div>
  )
}

export default About
