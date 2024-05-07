import React from "react";
import logo from "../assets/max-way_logo.webp";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";
import { t } from "i18next";

const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto py-8 border-t">
        <div className="flex flex-col md:flex-row items-center justify-between border-b pb-10 pt-3">
          <img src={logo} alt="Max way logo" />

          <ul className="flex flex-col md:flex-row mt-2 md:mt-0 items-center gap-x-5">
            <li className="text-lg hover:text-[#808080] duration-100">
              <Link to={"/branches"}>{t("header.branches")}</Link>
            </li>
            <li className="text-lg hover:text-[#808080] duration-100">
              <Link to={"/about"}>{t("header.about")}</Link>
            </li>
            <li className="text-lg hover:text-[#808080] duration-100">
              <Link to={"/contacts"}>{t("header.contact")}</Link>
            </li>
          </ul>

          <div></div>
        </div>
        <div className="flex items-center justify-between my-5">
          <p className="text-sm md:text-base text-[#808080]">
            {t("footer.copy")}
          </p>
          <div className="flex items-center gap-x-4">
            <Link to={"https://www.instagram.com/maxwayuz/"} target="_blank">
              <FaInstagram
                style={{
                  fontSize: 24,
                  color: "#808080",
                  transition: "all 0.3s ease",
                }}
                className="social"
              />
            </Link>
            <Link to={"https://www.facebook.com/maxway.uzb/"} target="_blank">
              <FaFacebook
                style={{
                  fontSize: 24,
                  color: "#808080",
                  transition: "all 0.3s ease",
                }}
                className="social"
              />
            </Link>
            <Link to={"https://www.youtube.com/@maxway2010"} target="_blank">
              <FaYoutube
                style={{
                  fontSize: 24,
                  color: "#808080",
                  transition: "all 0.3s ease",
                }}
                className="social"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
