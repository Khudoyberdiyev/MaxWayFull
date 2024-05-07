import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { FreeMode, Navigation } from "swiper/modules";
import { useTranslation } from "react-i18next";

export default function Slider() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Swiper
        slidesPerView={8}
        spaceBetween={5}
        freeMode={true}
        navigation={true}
        breakpoints={{
          375: {
            slidesPerView: 4,
          },
          640: {
            slidesPerView: 6,
          },
          768: {
            slidesPerView: 6,
          },

          1240: {
            slidesPerView: 8,
          },
        }}
        modules={[FreeMode, Navigation]}
        className="mySwiper"
        style={{
          position: scrollPosition > 650 ? "fixed" : "",
          top: "0",
          backgroundColor: "white",
          maxWidth: "1280px",
          padding: scrollPosition > 650 ? "10px 50px" : "0 50px",
        }}
      >
        <SwiperSlide>
          <div className="py-3 px-4 w-fit hover:bg-[#f1eff4] rounded-xl">
            <a href={"#🍟🍔🥤Maxi BOX"}>
              <button>{t("main.sectionTitle1")}</button>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-3 px-4 w-fit hover:bg-[#f1eff4] rounded-xl">
            <a href={"#🥪Klab-Sendvich"}>
              <button>{t("main.sectionTitle2")}</button>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-3 px-4 w-fit hover:bg-[#f1eff4] rounded-xl">
            <a href={"#🌯Lavash"}>
              <button>{t("main.sectionTitle3")}</button>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-3 px-4 w-fit hover:bg-[#f1eff4] rounded-xl">
            <a href={"#🌮Shaurma"}>
              <button>{t("main.sectionTitle4")}</button>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-3 px-4 w-fit hover:bg-[#f1eff4] rounded-xl">
            <a href={"#🫔Panini"}>
              <button>{t("main.sectionTitle5")}</button>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-3 px-4 w-fit hover:bg-[#f1eff4] rounded-xl">
            <a href={"#🍔Burger"}>
              <button>{t("main.sectionTitle6")}</button>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-3 px-4 w-fit hover:bg-[#f1eff4] rounded-xl">
            <a href={"#🍱Donar Kebab"}>
              <button>{t("main.sectionTitle7")}</button>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-3 px-4 w-fit hover:bg-[#f1eff4] rounded-xl">
            <a href={"#🌭Hot-Dog"}>
              <button>{t("main.sectionTitle8")}</button>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-3 px-4 w-fit hover:bg-[#f1eff4] rounded-xl">
            <a href={"#🍟Gazaklar"}>
              <button>{t("main.sectionTitle9")}</button>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-3 px-4 w-fit hover:bg-[#f1eff4] rounded-xl">
            <a href={"#🍚Tamaddilar"}>
              <button>{t("main.sectionTitle10")}</button>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-3 px-4 w-fit hover:bg-[#f1eff4] rounded-xl">
            <a href={"#🍰Desertlar"}>
              <button>{t("main.sectionTitle11")}</button>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-3 px-4 w-fit hover:bg-[#f1eff4] rounded-xl">
            <a href={"#🥤Ichimliklar"}>
              <button>{t("main.sectionTitle12")}</button>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-3 px-4 w-fit hover:bg-[#f1eff4] rounded-xl">
            <a href={"#🥫Souslar"}>
              <button>{t("main.sectionTitle13")}</button>
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
