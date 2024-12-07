"use client";

import { useState, useEffect } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Card from './card';

interface User {
  name: {
    first: string;
    last: string;
  };
  phone: string;
  email: string;
  picture: {
    large: string;
  };
  dob: {
    age: number;
  };
  gender: string;
  login: {
    uuid: number;
  };
  location: {
    city: string;
    country: string;
  };
}


export default function Home() {

    const [data, setData] = useState<User[]>([]);

    useEffect(() => {
      fetch('https://randomuser.me/api/?results=10')
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          console.log(data.results);
          setData(data.results)
        })
    }, [])
    
    if (data.length === 0) {
      return <div>Loading...</div>;
    }

    return (
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data.map ((user) => (
          <SwiperSlide key={user.login.uuid}>
            <Card
              name={`${user.name.first} ${user.name.last}`}
              phone={user.phone}
              email={user.email}
              picture={user.picture.large} 
              age={user.dob.age}
              gender={user.gender}
              city={user.location.city}
              country={user.location.country}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    );
}
