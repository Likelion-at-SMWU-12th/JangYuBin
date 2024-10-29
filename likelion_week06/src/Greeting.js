import React, { useEffect, useState } from "react";

const Greeting = () => {
  const [name, setName] = useState();
  const [profileImg, setProfileImg] = useState();

  useEffect(() => {
    // 5. access token으로 사용자 정보 가져오기
    // https://developers.kakao.com/docs/latest/ko/kakaologin/rest-api#req-user-info
    const accessToken = localStorage.getItem("accessToken");
    fetch(`https://kapi.kakao.com/v2/user/me`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-type": "application/x-www-form-urlencoded",
      },
    }).then((res) => {
      const userData = res.json();
      console.log(res);
      console.log("userData", userData.properties);
      userData.then((user) => {
        setName(user.properties.nickname);
        setProfileImg(user.properties.profile_image);
      });
    });
  });

  return (
    <div>
      <div
        className="profile-image-div"
        style={{ backgroundImage: `url(${profileImg})` }}
      ></div>
      <h2>{name}</h2>
    </div>
  );
};

export default Greeting;
