import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import Qrcode from "./../assets/qrcode";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section>
      <div className="container mx-auto my-8 contact">
        <h2 className="text-[32px] font-bold mb-6">Bog'lanish</h2>
        <div className="py-8 ps-8 pe-3 bg-[#96b1c2] max-w-[287px] rounded-xl">
          <div className="w-[100px] p-2 bg-white rounded-xl">
            <Qrcode />
          </div>
          <h5 className="text-base text-white font-bold my-4">
            Telegramda sharh qoldiring yoki savol bering
          </h5>
          <Link
            to="https://t.me/maxwaymasterfood_bot"
            className="flex items-center text-white gap-x-1"
          >
            <FaTelegramPlane />
            <span className="hover:underline">@maxwaymasterfood_bot</span>
          </Link>
        </div>
        <h4 className="text-xl font-bold mt-5 mb-2">Yagona aloqa markazi</h4>
        <Link to="tel:998712005400" className="text-base hover:underline">+998712005400</Link>
      </div>
    </section>
  );
};

export default Contact;
