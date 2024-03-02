import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "../components/CSS/Categories.css";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

export default function RecentBlog() {
  return (
    <>
      <h3 style={{ color: "black", fontSize: "30px", padding: "20px 10px" }}>
        Recent Blog
      </h3>
      <Swiper
        slidesPerView={5}
        spaceBetween={5}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
       style={{marginBottom:"50px"}}>
        <SwiperSlide>
          <div>
            <img src="https://i.pinimg.com/564x/cd/c1/ef/cdc1ef397a46564bb46d3d60926a6aec.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src="https://i.pinimg.com/564x/27/2e/55/272e5598017044e81f07bc9e199076b0.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src="https://i.pinimg.com/564x/af/56/51/af565194b65bd8f76b7453b666b00407.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src="https://i.pinimg.com/564x/18/34/18/183418bcbe326e2f97592136974dd1ce.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src="https://i.pinimg.com/736x/6a/f0/03/6af003e3cd9a77caa6da60165a4a4442.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src="https://i.pinimg.com/564x/5c/52/18/5c52185f76234011f79acde2f01329ae.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src="https://i.pinimg.com/736x/f0/ae/37/f0ae3798de3f4dc2786ddddbfcf99897.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src="https://i.pinimg.com/564x/3d/b5/f6/3db5f663f8d5790e36c5a2e35bddc0da.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src="https://i.pinimg.com/564x/24/e2/7c/24e27c03783189d04482edcc244e6707.jpg" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
