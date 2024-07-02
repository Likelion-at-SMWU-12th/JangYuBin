import React, { useEffect, useState } from "react";
import axios from "axios";

const CoffeeList = ({ availableAmount }) => {
  const [coffee, setCoffee] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/coffee")
      .then((response) => {
        setCoffee(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>커피 메뉴</h1>
      <ul>
        {coffee.map((menu) =>
          menu.price <= availableAmount ? (
            <li key={menu.id}>
              <h2>
                {menu.name} : {menu.price}원
              </h2>
            </li>
          ) : null
        )}
      </ul>
    </div>
  );
};

export default CoffeeList;
