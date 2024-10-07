"use client";

import { useState, useEffect } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

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
    
    if (data.length === 0) {
      return <div>Loading...</div>;
    }

    return (
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data.map ((user) => (
          <SwiperSlide key={user.login.md5}>
            <Card
              name={`${user.name.first} ${user.name.last}`}
              phone={user.phone}
              email={user.email}
              picture={user.picture.medium} 
            />
          </SwiperSlide>
        ))}
      </Swiper>
    );
}
