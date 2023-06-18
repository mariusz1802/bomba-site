import React from 'react';
import PropTypes from 'prop-types';
import Hyphenated from 'react-hyphen';
import pl from 'hyphenated-pl';
import styled from 'styled-components';
import styles from './GreyBox.module.scss';
import FancyButton from '../FancyButton/FancyButton';
import { device } from '../../globals/device';

function GreyBox({
  title,
  imgSrc,
  description,
  ownClass,
  dataAos,
  withButton,
  onClick,
  text,
  srcSet,
}) {
  return (
    <BlackBox>
      <div className={`${styles.container} ${ownClass}`} data-aos={dataAos}>
        <h1 className={styles.title}>{title} </h1>
        <Picture>
          <source type="image/avif" srcSet={srcSet} />
          <img src={imgSrc} alt={title} className={styles.image} />
        </Picture>
        {description && (
          <Hyphenated language={pl}>
            <p className={styles.description}> {description} </p>
          </Hyphenated>
        )}
        <div className={styles.buttonLocation}>
          {withButton && (
            <>
              <BottomStyle>
                <FancyButton text={text} onClick={onClick} withLine />
              </BottomStyle>
            </>
          )}
        </div>
      </div>
    </BlackBox>
  );
}

GreyBox.propTypes = {
  title: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  description: PropTypes.string,
  ownClass: PropTypes.string,
  dataAos: PropTypes.string,
  withButton: PropTypes.bool,
  onClick: PropTypes.func,
  text: PropTypes.string,
  srcSet: PropTypes.string,
};

export default GreyBox;

const Picture = styled.picture`
  padding: 10px;
`;
const BottomStyle = styled.div`
  position: absolute;
  bottom: 0;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
`;

export const BlackBox = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  background-image: ${({ theme }) => theme.gradient};
  color: ${({ theme }) => theme.text};
  margin-bottom: 30px;
  @media ${device.laptop} {
    padding: 5px;
  }
`;
