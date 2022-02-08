import React from "react";
import styled, { keyframes } from "styled-components";
import one from "./maxior.png";
import oneAvif from "./maxior.avif";

const moveLeft = keyframes`
   100% { 
    transform: translateX(-66.6666%);  
  }
`;
const ImageContainer = styled.div`
  height: 200px;
  width: 100%;
  margin: 100px auto;
  position: relative;
  overflow: hidden;
`;

const Image = styled.div`
  background: url(${(props) => props.src});
  height: 180px;
  width: 300%;
  filter: grayscale(100%);
  opacity .6;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  /* transform: translate3d(0, 0, 0); */
  animation: ${moveLeft} 95s linear infinite;
`;

function SliderMotion() {
  return (
    <ImageContainer>
        <Image src={one} />
    </ImageContainer>
  );
}

export default SliderMotion;
