import React from 'react';
import styled from 'styled-components';
import GutsButton from './GutsButton.js';
import { device } from '../../globals/device.js';
import PropTypes from 'prop-types';

function FancyButton({ text, onClick, disabled, withLine }) {
  return (
    <>
      {withLine && <LineTop />}
      <Wrapper>
        <GutsButton disabled={disabled} text={text} onClick={onClick} />
      </Wrapper>
    </>
  );
}

FancyButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  withLine: PropTypes.bool,
};

const Wrapper = styled.div`
  width: 90%;
  align-items: center;
  margin: auto;
  padding-top: 10px;
  justify-content: center;
  display: flex;
  @media ${device.mobileL} {
    font-size: 1.2rem;
  }
`;

const LineTop = styled.div`
  width: 95%;
  margin: auto;
  border-bottom: 1px solid
    ${({ theme }) => {
      theme.text;
    }};
`;

export default FancyButton;
