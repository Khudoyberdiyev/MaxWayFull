import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import useCartStore from "../../store/useCartStora";

const Card = ({ data }) => {
  const [counters, setCounters] = useState({});
  const addToCart = useCartStore((state) => state.addToCart);
  const isItemInCart = useCartStore((state) =>
    state.cartItems.some((item) => item.id === data.id)
  );

  const removeFromCart = (id) => {
    useCartStore.getState().removeFromCart(id);
    setCounters((prevCounters) => {
      const updatedCounters = { ...prevCounters };
      delete updatedCounters[id];
      return updatedCounters;
    });
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
      removeFromCart(id);
    }
  };

  const handleAddToCart = () => {
    addToCart({
      id: data.id,
      image: data.foodImage,
      name: data.foodName,
      price: data.foodPrice,
    });
    setCounters((prevCounters) => ({
      ...prevCounters,
      [data.id]: (prevCounters[data.id] || 0) + 1,
    }));
  };

  return (
    <div className="rounded-2xl overflow-hidden">
      <div>
        <img src={data.foodImage} alt="Card image" />
      </div>
      <div className="px-4 py-3">
        <h5 className="text-lg text-[#252C32] font-semibold mb-2">
          {data.foodName}
        </h5>
        <p className="text-sm text-[#48535B]">
          {data.foodTitle && data.foodTitle.length > 60
            ? data.foodTitle.substring(0, 60) + "..."
            : data.foodTitle}
        </p>
        <div className="flex items-center justify-between mt-3">
          <p className="text-lg text-[#252C32] font-bold">
            {data.foodPrice && data.foodPrice.slice(0, -3) + " 000"}{" "}
            <span className="text-sm text-[#252C32] font-normal">so'm</span>
          </p>
          <div className="flex items-center">
            {isItemInCart ? (
              <div className="flex items-center justify-between w-[110px] h-10 px-4 border border-purple-500 rounded-3xl">
                <button
                  onClick={() => {
                    decrementCounter(data.id);
                  }}
                >
                  <FaMinus className="cursor-pointer" />
                </button>
                <div className="font-medium">
                  {counters[data.id] ? counters[data.id] : 1}
                </div>
                <button
                  onClick={() => {
                    incrementCounter(data.id);
                  }}
                >
                  <FaPlus className="cursor-pointer" />
                </button>
              </div>
            ) : (
              <button
                onClick={handleAddToCart}
                className="px-6 py-[10px] w-full text-sm font-medium rounded-[24px] bg-[#51267d] text-white"
              >
                Qo'shish
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
