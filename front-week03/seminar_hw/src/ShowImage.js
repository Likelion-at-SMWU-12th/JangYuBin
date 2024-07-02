import styled from "styled-components";
import image1 from "./bearPic/bear1.jpg";
import image2 from "./bearPic/bear2.jpg";
import image3 from "./bearPic/bear3.jpg";
import image4 from "./bearPic/bear4.jpg";

const picArr = [
  [image1, true],
  [image2, true],
  [image3, false],
  [image4, true],
];

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  padding: 0px;
`;

const ImageStyle = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 20px;
  background-image: url(${(props) => props.src});
  background-size: cover;
`;

const TextStyle = styled.h5`
  text-align: center;
  color: brown;
  display: ${(props) => (props.teddyBear ? "block" : "none")};
`;

function ShowImage() {
  return (
    <ImageContainer>
      {picArr.map(function (arr) {
        return (
          <div>
            <ImageStyle src={arr[0]} />
            <TextStyle teddyBear={arr[1]}>Teddy Bear!</TextStyle>
          </div>
        );
      })}
    </ImageContainer>
  );
}

export default ShowImage;
