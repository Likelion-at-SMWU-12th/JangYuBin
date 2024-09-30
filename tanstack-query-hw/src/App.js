import "./App.css";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import MyPage from "./Pages/MyPage";
import SignUp from "./Pages/SignUp";
import UpdateProfile from "./Pages/UpdateProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/myPage" />} />
        <Route path="/myPage" element={<MyPage />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/updateProfile" element={<UpdateProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
