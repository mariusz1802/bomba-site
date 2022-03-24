import React from "react";
import styles from "./GreyBox.module.scss";
import Hyphenated from "react-hyphen";
import Button from "../Button/Button";
import pl from "hyphenated-pl";
import styled from "styled-components";
import FancyButton from "../FancyButton/FancyButton";
import { device } from "../../device";


const Picture = styled.picture`
    padding: 10px

`
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
  withLine
}) {
  return (

    <BlackBox>
      <div className={`${styles.container} ${ownClass}`} data-aos={dataAos}>
        <h1 className={styles.title}>{title} </h1>
        <Picture>
          <source type="image/avif" srcSet={srcSet} />
          <img src={imgSrc} alt={title} className={styles.image} />
        </Picture>
        <Hyphenated language={pl}>
          <p className={styles.description}> {description} </p>
        </Hyphenated>
     
        <div className={styles.buttonLocation}>
          {withButton && 
          <>
            <BottomStyle>
              <FancyButton text={text} onClick={onClick} withLine />
              </BottomStyle>          
          </>
        }
        </div>
      </div>
    </BlackBox> 

             
  );
}

export default GreyBox;
