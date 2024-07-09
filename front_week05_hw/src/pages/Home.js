import React from "react";
import styled from "styled-components";

const PStyle = styled.p`
  color: blue;
`;

const Home = () => {
  return (
    <div>
      <h2>Youbin's Home</h2>
      <PStyle>안녕하세요, 저는 수학과 21학번 장유빈입니다.</PStyle>
      <p>저의 책장을 소개합니다.</p>
    </div>
  );
};

export default Home;
