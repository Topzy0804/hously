import React from 'react'

const Trusted = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 py-16 flex flex-col items-center gap-10'>
      <div className='flex flex-col gap-5 justify-center items-center text-center'>
        <h1 className='font-montserrat font-bold text-2xl'>Trusted by thousands of satisfied customers</h1>
        <p className='text-center font-inter text-gray-500'>Join our community of happy clients who have found their dream properties with us. Our commitment to excellence and customer satisfaction has earned us the trust of thousands of satisfied customers.</p>
      </div>

      <div className='flex items-center justify-between gap-20'>
        <div>
          {/* property sales */}
          <h2>Property Sales</h2>
        </div>

        <div>
          {/* customer testimonials */}
          <h2>Customer Testimonials</h2>
        </div>

        <div>
          {/* years of experience */}
          <h2>Years of Experience</h2>
        </div>
      </div>
    </div>
  )
}

export default Trusted