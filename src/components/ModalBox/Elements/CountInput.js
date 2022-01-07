import React from "react";
import NumericInput from "react-numeric-input";
import { CheckWrapper, Text } from "./CheckedBox";
import styles from "./CountInput.module.scss";
import styled from "styled-components";

const WrapCounter = styled(CheckWrapper)`

    margin-top: 20px;
`;

const ButtonPlusMinus = styled.button`
  color: white;
  font-size: 3rem;
  background-image: linear-gradient(to right, #f83600 0%, #f9b523 100%);
  background-size: 300% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 40px;
  margin: 0 10px;
  border-radius: 5px;
  :hover {
    cursor: pointer;
    background-position: 100% 0;
    transition: all 0.1s ease-in-out;
  }
  :first-child {
    margin-left: 0;
  }
  :active {
      transform: scale(0.95);
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;

function CountInput({ text, value, name, plusButton, minusButton }) {
  return (
    <WrapCounter>
      <ButtonWrapper>
        <ButtonPlusMinus
          id="plus"
          onClick={plusButton}
          className={styles.button}
        >
          +
        </ButtonPlusMinus>
        <input
          type="number"
          name={name}
          className={styles.count}
          value={value}
        />
        <ButtonPlusMinus
          id="minus"
          onClick={minusButton}
          className={styles.button}
        >
          −
        </ButtonPlusMinus>
      </ButtonWrapper>
      <Text>{text}</Text>
    </WrapCounter>
  );
}

export default CountInput;
