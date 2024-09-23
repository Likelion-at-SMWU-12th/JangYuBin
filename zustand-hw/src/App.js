import "./App.css";
import ItemBox from "./components/ItemBox";
import useCartStore from "./store";

function App() {
  const amount = useCartStore((state) => state.amount);
  const clearAmount = useCartStore((state) => state.clearAmount);

  return (
    <div>
      <h4>현재 장바구니에 담긴 상품들의 가격은 {amount}원입니다.</h4>
      <ItemBox />
      <button onClick={clearAmount}>장바구니 초기화</button>
    </div>
  );
}

export default App;
