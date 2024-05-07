import React, { useEffect, useState } from "react";
import Slider from "../components/Ui/Slider";
import Card from "../components/Ui/Card";
import useApi from "../service/UseApi/useApi";
import IntroSlider from "../components/Ui/IntroSlider";
import { useTranslation } from "react-i18next";

const Home = () => {
  const [data, setData] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    useApi
      .getFoods()
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <section id="intro">
        <div className="container mx-auto">
          <IntroSlider />
        </div>
      </section>
      <section id="main">
        <div className="container mx-auto">
          <div className="mt-8">
            <Slider />
          </div>
          <div id="🍟🍔🥤Maxi BOX" className="pt-[40px]">
            <h2 className=" text-[28px] font-bold mb-5">
              {t("main.sectionTitle1")}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {data.slice(0, 6).map((item, index) => (
                <Card data={item} key={index} />
              ))}
            </div>
          </div>
          <div id="🥪Klab-Sendvich" className="pt-[40px]">
            <h2 className=" text-[28px] font-bold mb-5">
              {t("main.sectionTitle2")}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {data.slice(6, 8).map((item, index) => (
                <Card data={item} key={index} />
              ))}
            </div>
          </div>
          <div id="🌯Lavash" className="pt-[40px]">
            <h2 className=" text-[28px] font-bold mb-5">
              {t("main.sectionTitle3")}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {data.slice(8, 10).map((item, index) => (
                <Card data={item} key={index} />
              ))}{" "}
            </div>
          </div>
          <div id="🌮Shaurma" className="pt-[40px]">
            <h2 className=" text-[28px] font-bold mb-5">
              {t("main.sectionTitle4")}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {data.slice(10, 12).map((item, index) => (
                <Card data={item} key={index} />
              ))}{" "}
            </div>
          </div>
          <div id="🫔Panini" className="pt-[40px]">
            <h2 className=" text-[28px] font-bold mb-5">
              {t("main.sectionTitle5")}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {data.slice(12, 13).map((item, index) => (
                <Card data={item} key={index} />
              ))}
            </div>
          </div>
          <div id="🍔Burger" className="pt-[40px]">
            <h2 className=" text-[28px] font-bold mb-5">
              {t("main.sectionTitle6")}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {data.slice(13, 16).map((item, index) => (
                <Card data={item} key={index} />
              ))}
            </div>
          </div>
          <div id="🍱Donar Kebab" className="pt-[40px]">
            <h2 className=" text-[28px] font-bold mb-5">
              {t("main.sectionTitle7")}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {data.slice(16, 19).map((item, index) => (
                <Card data={item} key={index} />
              ))}
            </div>
          </div>
          <div id="🌭Hot-Dog" className="pt-[40px]">
            <h2 className=" text-[28px] font-bold mb-5">
              {t("main.sectionTitle8")}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {data.slice(19, 23).map((item, index) => (
                <Card data={item} key={index} />
              ))}
            </div>
          </div>
          <div id="🍟Gazaklar" className="pt-[40px]">
            <h2 className=" text-[28px] font-bold mb-5">
              {t("main.sectionTitle9")}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {data.slice(23, 29).map((item, index) => (
                <Card data={item} key={index} />
              ))}
            </div>
          </div>
          <div id="🍚Tamaddilar" className="pt-[40px]">
            <h2 className=" text-[28px] font-bold mb-5">
              {t("main.sectionTitle10")}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {data.slice(29, 31).map((item, index) => (
                <Card data={item} key={index} />
              ))}
            </div>
          </div>
          <div id="🍰Desertlar" className="pt-[40px]">
            <h2 className=" text-[28px] font-bold mb-5">
              {t("main.sectionTitle11")}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {data.slice(31, 37).map((item, index) => (
                <Card data={item} key={index} />
              ))}
            </div>
          </div>
          <div id="🥤Ichimliklar" className="pt-[40px]">
            <h2 className=" text-[28px] font-bold mb-5">
              {t("main.sectionTitle12")}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {data.slice(37, 50).map((item, index) => (
                <Card data={item} key={index} />
              ))}
            </div>
          </div>
          <div id="🥫Souslar" className="pt-[40px]">
            <h2 className=" text-[28px] font-bold mb-5">
              {t("main.sectionTitle13")}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:gric4 gap-3 lg:grid-cols-4">
              {data.slice(50, 55).map((item, index) => (
                <Card data={item} key={index} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
