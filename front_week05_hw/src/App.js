import { Route, Routes } from "react-router-dom";
import Menubar from "./pages/Menubar";
import Home from "./pages/Home";
import Bookshelf from "./pages/Bookshelf";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Menubar />}>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/bookshelf" element={<Bookshelf />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
