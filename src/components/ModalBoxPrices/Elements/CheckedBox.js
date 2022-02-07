import React from "react";
import { InputCheckBox } from "./ToCheckBox";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { device } from "../../../device";

const CheckWrapper = styled.div`
  display: flex;
  margin: 12px;
  align-items: center;
  @media ${device.mobileL} {
    margin: 8px;
    text-align: left;
  }
`;

const Text = styled.p`
  font-size: 1.4em;
  margin-right: 20px;
  margin-bottom: 2px;
  @media ${device.mobileL} {
    margin-right: 0px;
    margin-bottom: 0px;
    font-size: 1rem;
  }
`;

const CheckNotClick = styled(InputCheckBox)`
  pointer-events: none;
`;

function CheckedBox({ text }) {
  const { t } = useTranslation();

  return (
    <CheckWrapper>
      <CheckNotClick type="checkbox" checked="true" />
      <Text>{text}</Text>
    </CheckWrapper>
  );
}

export { CheckWrapper, Text };

export default CheckedBox;
