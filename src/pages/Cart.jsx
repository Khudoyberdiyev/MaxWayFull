import { Modal } from "antd";
import React, { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const Cart = () => {
  const [counters, setCounters] = useState({});
  const [cartItems, setCartItems] = useState([]);
  const [modal2Open, setModal2Open] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem("cart-storage"));
    if (savedCartItems) {
      setCartItems(savedCartItems.state.cartItems);
      const initialCounters = {};
      savedCartItems.state.cartItems.forEach((item) => {
        initialCounters[item.id] = 1;
      });
      setCounters(initialCounters);
    }
  }, []);

  useEffect(() => {
    const price = cartItems.reduce(
      (total, item) =>
        total + parseFloat(item.price) * (counters[item.id] || 1),
      0
    );
    setTotalPrice(price);
    localStorage.setItem("cartPrice", JSON.stringify(price));
  }, [cartItems, counters]);

  const removeFromCart = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
    delete counters[id];
    setCounters({ ...counters });
    localStorage.setItem(
      "cart-storage",
      JSON.stringify({ state: { cartItems: updatedCartItems }, version: 0 })
    );
  };

  const incrementCounter = (id) => {
    setCounters((prevCounters) => ({
      ...prevCounters,
      [id]: (prevCounters[id] || 0) + 1,
    }));
  };

  const decrementCounter = (id) => {
    if (counters[id] > 1) {
      setCounters((prevCounters) => ({
        ...prevCounters,
        [id]: prevCounters[id] - 1,
      }));
    } else {
      setModal2Open(true);
    }
  };

  return (
    <section className="min-h-[calc(100vh-80px-198px-92px)]">
      <div className="container mx-auto">
        <h2 className="text-[32px] font-bold">Savatcha</h2>
        <div className="flex justify-between pt-8 pb-20">
          <div className="flex flex-col grow">
            {cartItems.map((item, index) => (
              <div
                className="max-w-[800px] max-h-[130px] px-5 py-6 flex justify-between grow gap-x-3 shadow rounded-xl"
                key={index}
              >
                <img
                  src={item.image}
                  className="rounded-xl w-[78px] h-[78px]"
                  alt="image"
                />
                <div className="flex items-center justify-between grow">
                  <h5 className="text-[18px] font-medium">{item.name}</h5>
                  <div className="flex items-center gap-x-12">
                    <div className="flex items-center justify-between w-[110px] h-10 px-4 border border-purple-500 rounded-3xl">
                      <button
                        onClick={() => {
                          decrementCounter(item.id);
                        }}
                      >
                        <FaMinus className="cursor-pointer" />
                      </button>
                      <div className="font-medium">
                        {counters[item.id] ? counters[item.id] : 1}
                      </div>
                      <button
                        onClick={() => {
                          incrementCounter(item.id);
                        }}
                      >
                        <FaPlus className="cursor-pointer" />
                      </button>
                    </div>
                    <p className="text-lg text-[#252C32] font-bold w-[120px]">
                      {item.price.slice(0, -3)} 000{" "}
                      <span className="text-sm text-[#252C32] font-normal">
                        so'm
                      </span>
                    </p>
                  </div>
                </div>
                <Modal
                  title=""
                  centered
                  open={modal2Open}
                  footer={false}
                  onOk={() => setModal2Open(false)}
                  onCancel={() => setModal2Open(false)}
                >
                  <h3 className="text-2xl font-bold text-center">Diqqat</h3>
                  <p className="text-lg text-[#8c8c8c] mt-2 mb-8 text-center">
                    Haqiqatan ham ushbu mahsulotni oʻchirib tashlamoqchimisiz?
                  </p>
                  <div className="mx-auto flex justify-center gap-x-3">
                    <button
                      onClick={() => setModal2Open(false)}
                      className="w-[182px] px-6 py-3 rounded-3xl bg-[#EEF0F2]"
                    >
                      Yo'q
                    </button>
                    <button
                      onClick={() => {
                        removeFromCart(item.id), setModal2Open(false);
                      }}
                      className="w-[182px] px-6 py-3 rounded-3xl bg-[#51267D] text-white"
                    >
                      Ha
                    </button>
                  </div>
                </Modal>
              </div>
            ))}
          </div>
          <div className="px-[18px] py-6 max-w-[400px] shadow rounded-xl flex flex-col grow">
            <h4 className="text-xl font-bold">Umumiy</h4>
            <div className="my-4 flex items-center justify-between">
              <p className="">Mahsulotlar</p>
              <p className="font-semibold">
                {totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
                000 so'm
              </p>
            </div>
            <div className="py-4 flex items-center justify-between border-b">
              <p className="">Yetkazib berish</p>
              <p className="font-semibold">0 so'm</p>
            </div>
            <div className="my-4 flex items-center justify-between">
              <p className="">To'lash uchun</p>
              <p className="font-semibold">
                {totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
                000 so'm
              </p>
            </div>
            {totalPrice < 40 ? (
              <div className="flex flex-col">
                <button className="px-6 py-3 rounded-3xl bg-[#dde2e4] text-[#aeaeae]">
                  To'lov sahifasiga o'tish
                </button>
                <p className="text-xs text-center mt-1 font-medium text-red-600">
                  Eng kam buyurtma narxi 40 000 so'm bo'lishi kerak
                </p>
              </div>
            ) : (
              <button className="px-6 py-3 rounded-3xl bg-[#51267D] text-[#FFFFFF]">
                To'lov sahifasiga o'tish
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
