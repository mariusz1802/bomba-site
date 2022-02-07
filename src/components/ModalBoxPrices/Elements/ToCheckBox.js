import React, { useState } from "react";
import { CheckWrapper, Text } from "./CheckedBox";
import styled from "styled-components";
import { device } from "../../../device";

const InputCheckBox = styled.input`
  font-size: 3rem;
  margin-right: 10px;
  height: 30px;
  width: 30px;
  :hover {
    cursor: pointer;
  }

  @media ${device.mobileM} {
    height: 25px;
    width: 25px;
  
    }
`;

function ToCheckBox({ text, checked, onChange }) {
  return (
    <CheckWrapper>
      <InputCheckBox
        type="checkbox"
        checked={checked}
        onClick={onChange}
        onChange={(e) => {}}
        checkStatus={checked}
      />
      <Text>{text}</Text>
    </CheckWrapper>
  );
}

export { InputCheckBox };

export default ToCheckBox;
