"use client";

import { useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export default function Home() {
    const [data, setdata] = useState([])

    useEffect(() => {
      fetch('https://randomuser.me/api/?results=10')
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          console.log(data);
          setdata(data)
        })
    }, [])
    
    if (data) {
    return (
      <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
      </Swiper>
    );
  }
}
