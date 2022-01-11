import React from "react";
import styled from "styled-components";
import GutsButton from "./GutsButton.js";
const Wrapper = styled.div`
  width: 100%;
  border-top: 1px solid
    ${({ theme }) => {
      theme.text;
    }};
    padding-top: 10px;
  justify-content: center;
  display: flex;
`;

function FancyButton({ text, onClick }) {
  return (
    <Wrapper>
      <GutsButton text={text} onClick={onClick} />
    </Wrapper>
  );
}

export default FancyButton;
