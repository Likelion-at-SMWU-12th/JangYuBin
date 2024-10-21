import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Redirection from "./Redirection";
import Greeting from "./Greeting";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* 로그인 창 */}
          <Route path="/" element={<Login />} />
          {/* Redirect URI */}
          <Route path="/oauth2" element={<Redirection />} />
          {/* 결과 창 */}
          <Route path="/greeting" element={<Greeting />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
