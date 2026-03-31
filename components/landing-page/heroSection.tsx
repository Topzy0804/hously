"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { Button } from "@/components/ui/button";


import "swiper/css";
import "swiper/css/effect-fade";

const HeroSection = () => {
  const images = [
    {image: "/house-1.jpg", title: "We will help you find your wonderful home" },
    {image: "/house-2.jpg", title: "Easy way to find your dream"}
  ];

  
  return (

    <section className="-mt-24">
      <div className="w-full h-screen relative overflow-hidden">
        <Swiper
          modules={[EffectFade, Autoplay]}
          effect="fade"
          autoplay={{ delay: 3000 }}
          className="w-full h-full font-montserrat"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-110"
              style={{ backgroundImage: `url(${image.image})`}}
              >
                 <div className="absolute inset-0 bg-black/80 bg-opacity-50">
                </div>
                <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
                  <h1 className="max-w-3xl text-4xl font-bold font-inter md:text-6xl">{image.title}</h1>
                  <p className="font-inter">A great platform to buy, sell and rent your properties</p>
                  <Button variant="outline" className="bg-blue-700 text-white font-bold px-10 py-5 rounded-2xl mt-5 border border-black font-inter dark:hover:bg-blue-700">See More</Button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex flex-col dark:bg-black">
        {/* <div className="bg-white p-5 flex justify-between items-center max-w-4xl mx-auto -mt-10 rounded-lg shadow-lg z-10 absolute left-1/2 transform -translate-x-1/2">
          <p className="bg-white hover:bg-blue-500 text-black font-bold px-4 py-2 rounded-lg hover:text-white ">Buy</p>
          <p className="bg-white hover:bg-blue-500 text-black font-bold px-4 py-2 rounded-lg hover:text-white ">Sell</p>
          <p className="bg-white hover:bg-blue-500 text-black font-bold px-4 py-2 rounded-lg hover:text-white ">Rent</p>
        </div> */}


     <div className="absolute left-1/2 bg-white dark:bg-slate-900 dark:text-white font-inter bottom-0 w-full max-w-6xl -translate-x-1/2 translate-y-1/2 z-9 px-4">
  {/* 1. Tabs Section */}
  <div className="flex w-fit mx-auto   rounded-t-xl overflow-hidden shadow-sm">
    {['Buy', 'Sell', 'Rent'].map((tab) => (
      <button 
        key={tab}
        className="px-8 py-3 font-bold text-sm transition-colors hover:bg-blue-700 hover:text-white focus:bg-blue-700 focus:text-white"
      >
        {tab}
      </button>
    ))}
  </div>

  {/* 2. Main Form Box */}
  <div className=" p-8 rounded-b-xl rounded-tr-xl shadow-2xl">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
      
      {/* Search Input */}
      <div className="flex flex-col space-y-2">
        <label className="font-bold text-sm">Search : <span className="text-red-500">*</span></label>
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search your Keywords" 
            className="w-full border-none  dark:text-black bg-gray-50 p-3 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
          />
        </div>
      </div>

      {/* Category Select */}
      <div className="flex flex-col space-y-2">
        <label className="font-bold text-sm">Select Categories:</label>
        <select className="w-full border-none  dark:text-black bg-gray-50 p-3 rounded-lg outline-none">
          <option>Residential</option>
          <option>Commercial</option>
        </select>
      </div>

      {/* Min Price */}
      <div className="flex flex-col space-y-2">
        <label className="font-bold text-sm">Min Price :</label>
        <select className="w-full border-none  dark:text-black bg-gray-50 p-3 rounded-lg outline-none">
          <option>Select...</option>
        </select>
      </div>

      {/* Max Price */}
      <div className="flex flex-col space-y-2">
        <label className="font-bold text-sm">Max Price :</label>
        <select className="w-full border-none  dark:text-black bg-gray-50 p-3 rounded-lg outline-none">
          <option>Select...</option>
        </select>
      </div>

      {/* Search Button - Now below or part of the grid */}
      <div className="md:col-span-1">
        <Button className="w-full bg-blue-700 hover:bg-blue-400 dark:hover:bg-slate-900 dark:hover:border-blue-700 text-white font-bold py-6 rounded-lg">
          Search
        </Button>
      </div>
    </div>
  </div>
</div>
      </div>

    </section>
  )
}

export default HeroSection