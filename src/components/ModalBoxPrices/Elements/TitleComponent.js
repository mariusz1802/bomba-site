import React from "react";
import styled from "styled-components";
import {device} from "../../../device";

const Wrapper = styled.div`
  width: 100%;
  height: 10%;
  border-bottom: 1px solid
    ${({ theme }) => {
      theme.text;
    }};
`;
const H2 = styled.h2`
  margin: auto;
  font-size: 2.4rem;
  font-weight: 300;
  margin-bottom: 10px;
  letter-spacing: 1px;
  text-transform: uppercase;
  border-bottom: 1px solid #eee;
  height: 60px;
    @media ${device.mobileL} {
        font-size : 1.5rem;
  height: 50px;
  letter-spacing: 0;
  padding-top: 10px;


    }
`;

function TitleComponent({ text }) {
  return <H2>{text}</H2>;
}

export default TitleComponent;
