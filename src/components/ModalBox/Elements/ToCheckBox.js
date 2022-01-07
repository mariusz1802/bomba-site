import React, { useState } from "react";
import { CheckWrapper, Text } from "./CheckedBox";
import styled from "styled-components";

const InputCheckBox = styled.input`
  font-size: 3rem;
  margin-right: 10px;
  height: 30px;
  width: 30px;
  color: red;
  background-color: red;
  :hover {
    cursor: pointer;
  }
`;

function ToCheckBox({ text, checked, onChange }) {
  return (
    <CheckWrapper>
      <InputCheckBox
        type="checkbox"
        checked={checked}
        onChange={onChange}
        checkStatus={checked}
      />

      <Text>{text}</Text>
    </CheckWrapper>
  );
}

export { InputCheckBox };

export default ToCheckBox;
