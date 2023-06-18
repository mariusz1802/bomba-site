import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CheckWrapper, Text } from './CheckedBox';
import styles from './CountInput.module.scss';
import { device } from '../../../globals/device';

const WrapCounter = styled(CheckWrapper)`
  margin-top: 20px;
  @media ${device.mobileL} {
    margin-top: 10px;
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-start;
    align-items: flex-start;
  }
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
  @media ${device.mobileL} {
    font-size: 2rem;
    margin-top: 10px;
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;

function CountInput({ text, value, name, plusButton, minusButton, onChange }) {
  return (
    <WrapCounter>
      <React.StrictMode>
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
            onChange={onChange}
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
      </React.StrictMode>
    </WrapCounter>
  );
}

CountInput.propTypes = {
  text: PropTypes.string,
  value: PropTypes.number,
  name: PropTypes.string,
  plusButton: PropTypes.func,
  minusButton: PropTypes.func,
  onChange: PropTypes.func,
};

export default CountInput;
