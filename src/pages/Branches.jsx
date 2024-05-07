import React, { useState } from "react";

const Branches = () => {
  const [tab, setTab] = useState("list");

  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between my-6">
          <h2 className="text-[32px] font-bold mb-3 md:mb-0">Filiallar</h2>
          <div className="flex gap-x-3">
            <button
              onClick={() => setTab("list")}
              className={`w-fit md:w-[144px] px-6 py-[10px] text-base font-medium rounded-[24px] ${
                tab === "list"
                  ? "bg-[#51267d] text-white"
                  : "bg-[#F1EFF4] text-[#48535B]"
              }`}
            >
              Ro'yhat
            </button>
            <button
              onClick={() => setTab("map")}
              className={`w-fit md:w-[144px] px-6 py-[10px] text-base font-medium rounded-[24px] ${
                tab === "map"
                  ? "bg-[#51267d] text-white"
                  : "bg-[#F1EFF4] text-[#48535B]"
              }`}
            >
              Xarita
            </button>
          </div>
        </div>
        <div>
          {tab === "list" ? (
            <div>
              <div className="px-5 py-4 mb-6 max-w-[590px]">
                <div className="flex justify-between pb-3 border-b">
                  <div>
                    <h3 className="text-xl font-bold mb-[6px]">
                      MAX WAY BERUNIY
                    </h3>
                    <p className="text-sm">улица Беруни, 47, Ташкент</p>
                  </div>
                  <p className="text-sm text-[#FF0000]">10:00 gacha yopiq</p>
                </div>
                <div className="flex justify-between py-3">
                  <div>
                    <p className="text-sm text-[#808080] mb-[6px]">
                      Ish vaqti:
                    </p>
                    <p className="text-sm font-medium">Du-Yak: 10:00-22:00</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#808080] mb-[6px]">Telefon:</p>
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
                  <p className="text-sm text-[#FF0000]">10:00 gacha yopiq</p>
                </div>
                <div className="flex justify-between py-3">
                  <div>
                    <p className="text-sm text-[#808080] mb-[6px]">
                      Ish vaqti:
                    </p>
                    <p className="text-sm font-medium">Du-Yak: 10:00-22:00</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#808080] mb-[6px]">Telefon:</p>
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
                  <p className="text-sm text-[#FF0000]">10:00 gacha yopiq</p>
                </div>
                <div className="flex justify-between py-3">
                  <div>
                    <p className="text-sm text-[#808080] mb-[6px]">
                      Ish vaqti:
                    </p>
                    <p className="text-sm font-medium">Du-Yak: 10:00-22:00</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#808080] mb-[6px]">Telefon:</p>
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
                  <p className="text-sm text-[#FF0000]">10:00 gacha yopiq</p>
                </div>
                <div className="flex justify-between py-3">
                  <div>
                    <p className="text-sm text-[#808080] mb-[6px]">
                      Ish vaqti:
                    </p>
                    <p className="text-sm font-medium">Du-Yak: 10:00-22:00</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#808080] mb-[6px]">Telefon:</p>
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
                  <p className="text-sm text-[#FF0000]">10:00 gacha yopiq</p>
                </div>
                <div className="flex justify-between py-3">
                  <div>
                    <p className="text-sm text-[#808080] mb-[6px]">
                      Ish vaqti:
                    </p>
                    <p className="text-sm font-medium">Du-Yak: 10:00-22:00</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#808080] mb-[6px]">Telefon:</p>
                    <p className="text-sm font-medium">+998712005400</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <iframe
              src="https://yandex.com/map-widget/v1/?ll=69.313103%2C41.291716&z=12.17"
              width={"100%"}
              height={"680px"}
              frameBorder={1}
              allowFullScreen={true}
            ></iframe>
          )}
        </div>
      </div>
    </section>
  );
};

export default Branches;
