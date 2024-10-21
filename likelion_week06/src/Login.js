import React from "react";
import kakao_btn_img from "./kakao_login_large_narrow.png";
import google_btn_img from "./web_light_sq_SI@2x.png";

const Login = () => {
  const authServerLink = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}`;

  // 1. client가 resource server에 인가 코드 받기 요청
  // https://developers.kakao.com/docs/latest/ko/kakaologin/rest-api#request-code
  const handleKakao = () => {
    window.location.href = authServerLink;
    // 2. 인가 코드 받기 요청이 성공하면 Redirect URI로 연결되며 쿼리 코드로 인가 코드가 넘어옴.
  };

  return (
    <div>
      <h2>로그인</h2>
      <div className="btns-container">
        <button onClick={handleKakao}>
          <img src={kakao_btn_img} alt="kakao_button" />
        </button>
        <button>
          <img src={google_btn_img} alt="google_button" />
        </button>
      </div>
    </div>
  );
};

export default Login;
