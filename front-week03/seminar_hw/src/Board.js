import styled from "styled-components";
import ShowImage from "./ShowImage";

const WindowStyle = styled.div`
  width: 97vw;
  height: 97vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BoardStyle = styled.div`
  width: 600px;
  height: 300px;
  border-radius: 50px;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 30px;
  padding-bottom: 10px;
  background-color: beige;
`;

const TitleStyle = styled.h1`
  margin: 0px;
  color: orange;
  font-style: italic;
`;

function Board() {
  return (
    <WindowStyle>
      <BoardStyle>
        <TitleStyle>Youbin's Board</TitleStyle>
        <h4>Find REAL Teddy Bear!</h4>
        <ShowImage />
      </BoardStyle>
    </WindowStyle>
  );
}

export default Board;
