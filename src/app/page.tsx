"use client";

import { useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import Card from './card';

export default function Home() {
    const [data, setdata] = useState([])

    useEffect(() => {
      fetch('https://randomuser.me/api/?results=10')
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          console.log(data.results);
          setdata(data.results)
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
        {data.map ((user) => {
          <SwiperSlide>
            <Card
              name={user.name} 
            />
          </SwiperSlide>
        })}
        
      </Swiper>
    );
  }
}
