"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { Button } from "@/components/ui/button";


import "swiper/css";
import "swiper/css/effect-fade";

const HeroSection = () => {
  const images = [
    {image: "/slider-1.jpg", title: "we will help you find your wonderful home" },
    {image: "/slider-2.jpg", title: "Easy way to find your dream"}
  ];

  
  return (

    <section>
      <div className="w-full h-screen relative overflow-hidden">
        <Swiper
          modules={[EffectFade, Autoplay]}
          effect="fade"
          autoplay={{ delay: 3000 }}
          className="w-full h-full"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-110"
              style={{ backgroundImage: `url(${image.image})`}}
              >
                 <div className="absolute inset-0 bg-black/80 bg-opacity-50">
                </div>
                <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
                  <h1 className="max-w-3xl text-4xl font-bold md:text-6xl">{image.title}</h1>
                  <p >A great platform to buy, sell and rent your properties</p>
                  <Button variant="outline" className="bg-green-600 text-white font-bold px-10 py-5 rounded-2xl mt-5 border border-black">See More</Button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex flex-col ">
        <div className="bg-white p-5 flex justify-between items-center max-w-4xl mx-auto -mt-10 rounded-lg shadow-lg z-10 absolute left-1/2 transform -translate-x-1/2">
          <p className="bg-white hover:bg-green-500 text-black font-bold px-4 py-2 rounded-lg hover:text-white ">Buy</p>
          <p className="bg-white hover:bg-green-500 text-black font-bold px-4 py-2 rounded-lg hover:text-white ">Sell</p>
          <p className="bg-white hover:bg-green-500 text-black font-bold px-4 py-2 rounded-lg hover:text-white ">Rent</p>
        </div>
        <div className="flex bg-white p-8 justify-center items-center max-w-7xl mx-auto rounded-lg shadow-lg z-10 absolute left-1/2 transform -translate-x-1/2">
          <div>
            <label htmlFor="search">Search:</label>
            <input type="text" id="search" placeholder="Enter location..." />
          </div>
          <div>
            <label htmlFor="select-category">Select Categories:</label>
            <select id="select-category">
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
              <option value="land">Land</option>
            </select>
          </div>
          <div>
            <label htmlFor="price">Min Price:</label>
            <select name="select-price" id="price">
              <option value="0">Any</option>
              <option value="100000">₹1,000,000</option>
              <option value="500000">₹5,000,000</option>
              <option value="1000000">₹10,000,000</option>
            </select>
          </div>
          <div>
            <label htmlFor="price">Max Price:</label>
            <select name="select-price" id="price">
              <option value="0">Any</option>
              <option value="100000">₹1,000,000</option>
              <option value="500000">₹5,000,000</option>
              <option value="1000000">₹10,000,000</option>
            </select>
          </div>
        </div>
      </div>

    </section>
  )
}

export default HeroSection