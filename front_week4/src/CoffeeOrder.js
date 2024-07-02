import React, { useState } from "react";
import CoffeeList from "./CoffeeList";

const CoffeeOrder = () => {
  const nameInput = document.getElementById("nameInput");
  const showName = document.getElementById("showName");
  const amountInput = document.getElementById("amountInput");
  const showAmount = document.getElementById("showAmount");

  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);

  const hideNameInput = (e) => {
    if (e.keyCode === 13) {
      nameInput.classList.add("notDisplay");
      showName.classList.remove("notDisplay");
    }
  };

  const hideAmountInput = (e) => {
    if (e.keyCode === 13) {
      amountInput.classList.add("notDisplay");
      showAmount.classList.remove("notDisplay");
    }
  };

  return (
    <>
      <h6>Enter키를 누르면 입력이 완료됩니다.</h6>
      <h6>금액을 입력하면 구매 가능한 커피 종류를 보여줍니다.</h6>
      <div>
        <div id="nameInput" className="">
          <h4>고객님의 성함</h4>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={hideNameInput}
          />
        </div>
        <div id="showName" className="notDisplay">
          <h4>안녕하세요, {name}님!</h4>
        </div>
      </div>
      <div>
        <div id="amountInput" className="">
          <h4>소지한 금액</h4>
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            onKeyDown={hideAmountInput}
          />
        </div>
        <div id="showAmount" className="notDisplay">
          <h4>소지한 금액 : {amount}원</h4>
        </div>
      </div>
      <br />
      <CoffeeList availableAmount={amount} />
    </>
  );
};

export default CoffeeOrder;
