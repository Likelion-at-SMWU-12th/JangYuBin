import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Redirection = () => {
  const [params, setParams] = useSearchParams();
  const authCode = params.get("code"); // Redirect URI의 쿼리 파라미터로 인가 코드 획득
  const grant_type = "authorization_code";
  const navigate = useNavigate();

  useEffect(() => {
    // 3. client가 인가 코드로 resource server에 토큰 발급 요청
    // https://developers.kakao.com/docs/latest/ko/kakaologin/rest-api#request-token
    fetch(
      `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&code=${authCode}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    ).then((res) => {
      const data = res.json();
      console.log(data);
      data.then((data) => {
        // 4. 토큰 발급에 성공하면 access Token을 local storage에 저장
        localStorage.setItem("accessToken", data.access_token);
        navigate("/greeting");
      });
    });
  }, []);

  return <div>Redirection Page: 카카오 로그인 중...</div>;
};

export default Redirection;
