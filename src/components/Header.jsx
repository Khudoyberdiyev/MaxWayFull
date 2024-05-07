import React, { useState } from "react";
import logo from "../assets/max-way_logo.webp";
import flaguzb from "../assets/flag-uzb-250.png";
import flagrus from "../assets/flag-rus250.png";
import flageng from "../assets/flag-eng-250.png";
import { Link, NavLink } from "react-router-dom";
import { FaLocationDot, FaUser } from "react-icons/fa6";
import { IoCart } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { Drawer, Modal } from "antd";
import { useTranslation } from "react-i18next";
import i18next from "./../i18n/i18n";

import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

const items = [
  {
    key: "uz",
    label: <button>O'zbekcha</button>,
    icon: <img src={flaguzb} className="w-[18px]" alt="Uzbesitan flag" />,
  },
  {
    key: "ru",
    label: <button>Русский</button>,
    icon: <img src={flagrus} className="w-[18px]" alt="Russian flag" />,
  },
  {
    key: "en",
    label: <button>English</button>,
    icon: <img src={flageng} className="w-[18px]" alt="UK flag" />,
  },
];

const Header = () => {
  const [modal2Open, setModal2Open] = useState(false);
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState("delivery");
  const { t, i18n } = useTranslation();

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <header className="py-[10px]">
      <div className="container mx-auto py-4 flex items-center justify-between">
        <div className="flex items-center gap-x-3 lg:gap-x-10">
          <Drawer
            title={t("header.modalTitle")}
            placement="left"
            onClose={onClose}
            open={open}
          >
            <div>
              <Dropdown
                overlay={
                  <ul className="bg-white p-3">
                    {items.map((item) => (
                      <div>
                        <li
                          key={item.key}
                          className="flex items-center gap-x-2 p-1"
                          onClick={() => {
                            changeLanguage(item.key), onClose();
                          }}
                        >
                          {item.icon}
                          {item.label}
                        </li>
                      </div>
                    ))}
                  </ul>
                }
              >
                <a
                  className="ant-dropdown-link flex justify-between gap-x-2 cursor-pointer"
                  onClick={(e) => e.preventDefault()}
                >
                  {i18n.language === "uz" ? (
                    <div className="flex items-center gap-x-2 px-4 py-2">
                      <img src={flaguzb} className="w-[18px]" alt="flag" />
                      <p className="text-base">O'zbekcha</p>
                    </div>
                  ) : i18n.language === "ru" ? (
                    <div className="flex items-center gap-x-2 px-4 py-2">
                      <img src={flagrus} className="w-[18px]" alt="flag" />
                      <p className="text-base">Русский</p>
                    </div>
                  ) : (
                    <div className="flex items-center gap-x-2 px-4 py-2">
                      <img src={flageng} className="w-[18px]" alt="flag" />
                      <p className="text-base">English</p>
                    </div>
                  )}
                  <DownOutlined />
                </a>
              </Dropdown>

              <button className="text-base font-bold text-[#51267D] h-[44px] w-full px-3 text-start my-4">
                {t("header.login")}
              </button>

              <ul className="flex flex-col items-start gap-x-8">
                <li className="py-2">
                  <NavLink to={"/"} className="text-base" onClick={onClose}>
                    {t("header.menu")}
                  </NavLink>
                </li>
                <li className="py-2">
                  <NavLink
                    to={"/branches"}
                    className="text-base"
                    onClick={onClose}
                  >
                    {t("header.branches")}
                  </NavLink>
                </li>
                <li className="py-2">
                  <NavLink
                    to={"/about"}
                    className="text-base"
                    onClick={onClose}
                  >
                    {t("header.about")}
                  </NavLink>
                </li>
                <li className="py-2">
                  <NavLink
                    to={"/contacts"}
                    className="text-base"
                    onClick={onClose}
                  >
                    {t("header.contact")}
                  </NavLink>
                </li>
              </ul>
            </div>
          </Drawer>
          <FiMenu
            className="block lg:hidden cursor-pointer"
            onClick={showDrawer}
            style={{ fontSize: 24 }}
          />
          <Link to={"/"}>
            <img src={logo} alt="Max way logo" />
          </Link>

          <nav className="hidden lg:flex">
            <ul className="flex items-center gap-x-8">
              <li>
                <NavLink to={"/"} className="text-base">
                  {t("header.menu")}
                </NavLink>
              </li>
              <li>
                <NavLink to={"/branches"} className="text-base">
                  {t("header.branches")}
                </NavLink>
              </li>
              <li>
                <NavLink to={"/about"} className="text-base">
                  {t("header.about")}
                </NavLink>
              </li>
              <li>
                <NavLink to={"/contacts"} className="text-base">
                  {t("header.contact")}
                </NavLink>
              </li>
            </ul>
          </nav>
          <Modal
            title=""
            centered
            width={1000}
            style={{ width: "fit-content" }}
            open={modal2Open}
            footer={false}
            onOk={() => setModal2Open(false)}
            onCancel={() => setModal2Open(false)}
          >
            <h3 className="text-2xl font-bold">Select the type of reception</h3>
            <p className="text-sm text-[#808080] mb-4">
              To see your current menu
            </p>
            <div className="mx-auto flex justify-between gap-x-3">
              {tab === "delivery" ? (
                <div className="grow">
                  <div className="flex items-center gap-x-5 mb-5">
                    <button className="w-[50%] rounded-3xl px-6 py-[14px] bg-[#f1eff4] text-base text-[#51267d]">
                      Delivery
                    </button>
                    <button
                      onClick={() => setTab("takeaway")}
                      className="w-[50%] rounded-3xl px-6 py-[14px] bg-[#f1eff4] text-base"
                    >
                      Takeaway
                    </button>
                  </div>
                  <input
                    type="text"
                    placeholder="Delivery address"
                    className="w-full rounded-xl py-[14px] px-4 border focus:outline-[#51267d]"
                  />
                </div>
              ) : (
                <div className="grow">
                  <div className="flex items-center gap-x-5 mb-5">
                    <button
                      onClick={() => setTab("delivery")}
                      className="w-[50%] rounded-3xl px-6 py-[14px] bg-[#f1eff4] text-base"
                    >
                      Delivery
                    </button>
                    <button className="w-[50%] rounded-3xl px-6 py-[14px] bg-[#f1eff4] text-base text-[#51267d]">
                      Takeaway
                    </button>
                  </div>
                  <input
                    type="text"
                    placeholder="Search by restaurant name"
                    className="w-full rounded-xl py-[14px] px-4 border focus:outline-[#51267d]"
                  />
                  <div className="h-[260px] overflow-y-scroll">
                    <div className="px-5 py-4 mb-6 max-w-[590px]">
                      <div className="flex justify-between pb-3 border-b">
                        <div>
                          <h3 className="text-xl font-bold mb-[6px]">
                            MAX WAY BERUNIY
                          </h3>
                          <p className="text-sm">улица Беруни, 47, Ташкент</p>
                        </div>
                        <p className="text-sm text-[#FF0000]">
                          10:00 gacha yopiq
                        </p>
                      </div>
                      <div className="flex justify-between py-3">
                        <div>
                          <p className="text-sm text-[#808080] mb-[6px]">
                            Ish vaqti:
                          </p>
                          <p className="text-sm font-medium">
                            Du-Yak: 10:00-22:00
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-[#808080] mb-[6px]">
                            Telefon:
                          </p>
                          <p className="text-sm font-medium">+998712005400</p>
                        </div>
                      </div>
                    </div>
                    <div className="px-5 py-4 mb-6 max-w-[590px]">
                      <div className="flex justify-between pb-3 border-b">
                        <div>
                          <h3 className="text-xl font-bold mb-[6px]">
                            MAX WAY BERUNIY
                          </h3>
                          <p className="text-sm">улица Беруни, 47, Ташкент</p>
                        </div>
                        <p className="text-sm text-[#FF0000]">
                          10:00 gacha yopiq
                        </p>
                      </div>
                      <div className="flex justify-between py-3">
                        <div>
                          <p className="text-sm text-[#808080] mb-[6px]">
                            Ish vaqti:
                          </p>
                          <p className="text-sm font-medium">
                            Du-Yak: 10:00-22:00
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-[#808080] mb-[6px]">
                            Telefon:
                          </p>
                          <p className="text-sm font-medium">+998712005400</p>
                        </div>
                      </div>
                    </div>
                    <div className="px-5 py-4 mb-6 max-w-[590px]">
                      <div className="flex justify-between pb-3 border-b">
                        <div>
                          <h3 className="text-xl font-bold mb-[6px]">
                            MAX WAY BERUNIY
                          </h3>
                          <p className="text-sm">улица Беруни, 47, Ташкент</p>
                        </div>
                        <p className="text-sm text-[#FF0000]">
                          10:00 gacha yopiq
                        </p>
                      </div>
                      <div className="flex justify-between py-3">
                        <div>
                          <p className="text-sm text-[#808080] mb-[6px]">
                            Ish vaqti:
                          </p>
                          <p className="text-sm font-medium">
                            Du-Yak: 10:00-22:00
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-[#808080] mb-[6px]">
                            Telefon:
                          </p>
                          <p className="text-sm font-medium">+998712005400</p>
                        </div>
                      </div>
                    </div>
                    <div className="px-5 py-4 mb-6 max-w-[590px]">
                      <div className="flex justify-between pb-3 border-b">
                        <div>
                          <h3 className="text-xl font-bold mb-[6px]">
                            MAX WAY BERUNIY
                          </h3>
                          <p className="text-sm">улица Беруни, 47, Ташкент</p>
                        </div>
                        <p className="text-sm text-[#FF0000]">
                          10:00 gacha yopiq
                        </p>
                      </div>
                      <div className="flex justify-between py-3">
                        <div>
                          <p className="text-sm text-[#808080] mb-[6px]">
                            Ish vaqti:
                          </p>
                          <p className="text-sm font-medium">
                            Du-Yak: 10:00-22:00
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-[#808080] mb-[6px]">
                            Telefon:
                          </p>
                          <p className="text-sm font-medium">+998712005400</p>
                        </div>
                      </div>
                    </div>
                    <div className="px-5 py-4 mb-6 max-w-[590px]">
                      <div className="flex justify-between pb-3 border-b">
                        <div>
                          <h3 className="text-xl font-bold mb-[6px]">
                            MAX WAY BERUNIY
                          </h3>
                          <p className="text-sm">улица Беруни, 47, Ташкент</p>
                        </div>
                        <p className="text-sm text-[#FF0000]">
                          10:00 gacha yopiq
                        </p>
                      </div>
                      <div className="flex justify-between py-3">
                        <div>
                          <p className="text-sm text-[#808080] mb-[6px]">
                            Ish vaqti:
                          </p>
                          <p className="text-sm font-medium">
                            Du-Yak: 10:00-22:00
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-[#808080] mb-[6px]">
                            Telefon:
                          </p>
                          <p className="text-sm font-medium">+998712005400</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="px-6 py-3 rounded-3xl w-full text-sm text-[#808080] bg-[#DDE2E4] mt-5 cursor-not-allowed">Select</button>
                </div>
              )}
              <div>
                <iframe
                  src="https://yandex.com/map-widget/v1/?ll=69.313103%2C41.291716&z=12.17"
                  width={"460px"}
                  height={"450px"}
                  frameBorder={1}
                  allowFullScreen={true}
                ></iframe>
              </div>
            </div>
          </Modal>
        </div>
        <div className="flex items-center gap-x-5">
          <div
            className="lg:flex items-center hidden gap-x-4 cursor-pointer"
            onClick={() => setModal2Open(true)}
          >
            <div className="w-8 h-8 rounded-full bg-[#f1eff4] grid place-content-center text-[#51267d]">
              <FaLocationDot />
            </div>
            <div>
              <p className="text-sm">{t("header.delivery")}</p>
              <p className="text-xs text-[#51267d]">улица Катартал, 60/5</p>
            </div>
          </div>
          <div className="hidden lg:flex">
            <Dropdown
              overlay={
                <ul className="bg-white p-3">
                  {items.map((item) => (
                    <div>
                      <li
                        key={item.key}
                        className="flex items-center gap-x-2 p-1"
                        onClick={() => changeLanguage(item.key)}
                      >
                        {item.icon}
                        {item.label}
                      </li>
                    </div>
                  ))}
                </ul>
              }
            >
              <a
                className="ant-dropdown-link flex gap-x-2 cursor-pointer"
                onClick={(e) => e.preventDefault()}
              >
                {i18n.language === "uz" ? (
                  <img src={flaguzb} className="w-[18px]" alt="flag" />
                ) : i18n.language === "ru" ? (
                  <img src={flagrus} className="w-[18px]" alt="flag" />
                ) : (
                  <img src={flageng} className="w-[18px]" alt="flag" />
                )}
                <DownOutlined />
              </a>
            </Dropdown>
          </div>
          <Link to={"/cart"}>
            <div className="flex items-center mx-5 cursor-pointer gap-x-2">
              <div className="w-8 h-8 rounded-full bg-[#f1eff4] grid place-content-center text-[#51267d]">
                <IoCart />
              </div>
              <p className="text-sm md:text-base">
                {localStorage
                  .getItem("cartPrice")
                  ?.replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
                000 {t("header.currency")}
              </p>
            </div>
          </Link>
          <div className="w-8 h-8 rounded-full bg-[#f1eff4] lg:grid place-content-center text-[#51267d] cursor-pointer hidden">
            <FaUser />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
