import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { CheckWrapper, Text } from './CheckedBox';
import { device } from '../../../globals/device';

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
        onChange={() => {}}
        checkStatus={checked}
      />
      <Text>{text}</Text>
    </CheckWrapper>
  );
}

export { InputCheckBox };

ToCheckBox.propTypes = {
  text: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ToCheckBox;
