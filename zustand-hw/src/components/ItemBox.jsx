import React from "react";
import useCartStore from "../store.js";

const itemList = [
  { name: "감자", price: 5000 },
  { name: "고구마", price: 6000 },
  { name: "당근", price: 4000 },
];

const ItemBox = () => {
  const setAmount = useCartStore((state) => state.setAmount);

  return (
    <div>
      {itemList.map((item, key) => (
        <div key={key}>
          {item.name} : {item.price}원
          <button onClick={() => setAmount(item.price)}>+</button>
          <button onClick={() => setAmount(-item.price)}>-</button>
        </div>
      ))}
    </div>
  );
};

export default ItemBox;
