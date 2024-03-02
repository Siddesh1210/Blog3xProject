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

export default function Categories() {
  return (
    <>
      <h3 style={{ color: "black", fontSize: "30px", padding: "20px 10px" }}>
        Categories
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
      >
        <SwiperSlide>
          <div>
            <img src="https://i.pinimg.com/736x/ee/e1/92/eee192d6e15008cc15b2e8e4018a089d.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src="https://i.pinimg.com/564x/d6/2f/7b/d62f7bc0400f037ef41494d768b11281.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src="https://i.pinimg.com/736x/91/a6/94/91a694a142228031462271866aa85dd7.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src="https://i.pinimg.com/564x/52/58/b4/5258b42f506c2652312d8ffaeeb01208.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src="https://i.pinimg.com/564x/e4/0b/91/e40b9149e25e96bbb7dd01b2a2d6cc8f.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src="https://i.pinimg.com/564x/f3/cc/23/f3cc233922029a3e1a262065875849af.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src="https://i.pinimg.com/564x/b8/99/7e/b8997e1a4ef898dcddec9409f33ecd96.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src="https://i.pinimg.com/564x/db/70/8b/db708b1c760db830c71689846c6cbcff.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src="https://i.pinimg.com/564x/93/ce/ff/93ceff5e601687cf981515a6f6ccdb69.jpg" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
