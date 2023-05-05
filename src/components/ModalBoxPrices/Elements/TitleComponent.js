import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { device } from '../../../globals/device';

function TitleComponent({ text }) {
  return <H2>{text}</H2>;
}

TitleComponent.propTypes = {
  text: PropTypes.string.isRequired,
};

const H2 = styled.h2`
  margin: auto;
  font-size: 2.4rem;
  font-weight: 300;
  margin-bottom: 10px;
  letter-spacing: 1px;
  text-transform: uppercase;
  border-bottom: 1px solid #eee;
  height: 60px;
  @media ${device.mobileL} {
    font-size: 1.5rem;
    height: 50px;
    letter-spacing: 0;
    padding-top: 10px;
  }
`;

export default TitleComponent;
