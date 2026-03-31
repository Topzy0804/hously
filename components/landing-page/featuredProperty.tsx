import React from 'react'

const FeaturedProperty = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 py-16 flex flex-col items-center gap-10'>

      <div className='flex flex-col gap-5 justify-center items-center text-center'>
        <h1 className='font-montserrat text-2xl font-bold'>
          Featured Properties
        </h1>
        <p className='font-inter text-gray-500 text-center max-w-2xl'>
          Explore our handpicked selection of featured properties, showcasing the best in real estate. From stunning homes to prime commercial spaces, discover your dream property with us.
        </p>
      </div>

      <div>
        {/* Property cards will be rendered here */}
      </div>
    </div>
  )
}

export default FeaturedProperty