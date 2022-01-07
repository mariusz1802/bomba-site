import React from "react";
import styled from "styled-components";
import Button from "../../Button/Button";
import FancyButton from "../../FancyButton/FancyButton";
const Wrapper = styled.div`
  width: 100%;
  border-top: 1px solid
    ${({ theme }) => {
      theme.text;
    }};
  justify-content: center;
  display: flex;
`;

function SendButton() {
  return (
    <Wrapper>
      {/* <Button title="Jestem zainteresowany" buttonSize="small" />
       */}
      <FancyButton />
    </Wrapper>
  );
}

export default SendButton;
