import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper/modules";
import introBanner from "../../assets/intro_image.webp";

export default function IntroSlider() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <img
              src={introBanner}
              className="w-full rounded-2xl"
              alt="Intro image"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src={introBanner}
              className="w-full rounded-2xl"
              alt="Intro image"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
