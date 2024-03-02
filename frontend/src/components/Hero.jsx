import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../components/CSS/Hero.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function Hero() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={5}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://img.freepik.com/premium-vector/discount-sale-promotion-event-horizontal-banner-template-design_554907-369.jpg?w=996"/></SwiperSlide>
        <SwiperSlide><img src="https://img.freepik.com/free-vector/gradient-social-media-cover-template-oktoberfest-festival_23-2149542998.jpg"/></SwiperSlide>
        <SwiperSlide><img src="https://img.freepik.com/free-vector/gradient-social-media-post-template-oktoberfest-festival_23-2149543001.jpg"/></SwiperSlide>
        <SwiperSlide><img src="https://img.freepik.com/free-vector/hand-drawn-mental-health-facebook-cover_23-2149059464.jpg"/></SwiperSlide>
        <SwiperSlide><img src="https://img.freepik.com/free-vector/hand-drawn-flat-world-animal-day-social-media-cover-template_23-2149059478.jpg"/></SwiperSlide>
        <SwiperSlide><img src="https://img.freepik.com/free-vector/flat-autumn-social-media-cover-template_23-2149096158.jpg"/></SwiperSlide>
      </Swiper>
    </>
  );
}
