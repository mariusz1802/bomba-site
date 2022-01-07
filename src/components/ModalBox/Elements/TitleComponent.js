import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 10%;
  border-bottom: 1px solid
    ${({ theme }) => {
      theme.text;
    }};
`;
const H2 = styled.h2`
  font-size: 2.4rem;
  font-weight: 300;
  margin-bottom: 10px;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

function TitleComponent({ text }) {
  return (
    <Wrapper>
      <H2>{text}</H2>
    </Wrapper>
  );
}

export default TitleComponent;
