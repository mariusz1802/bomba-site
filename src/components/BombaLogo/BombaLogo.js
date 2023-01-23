import React from "react";
import bomba from "./bomba_logo_transparent.png";
import bombaSmall from "./bomba_small.png";
import bombaAvif from "./bomba_logo_transparent.avif";
import bombaSmallAvif from "./bomba_small.avif";
import styles from "./BombaLogo.module.scss";
import styled from "styled-components";
import { device } from "../../device";

const TextContainer = styled.div`
  margin: auto;
  font-family: "Pacifico";
  display: flex;
  line-height: 0.8;
  line-height: ${(props) => {
    switch (props.lineHeight) {
      case "height":
        return "1.2";
      case "low":
        return "0.4";
      default:
        return "0.8";
    }
  }};
  flex-direction: column;
`;

const BombaText = styled.h3`
  color: ${({ theme }) => theme.text};
  font-size: ${(props) => {
    switch (props.fontSize) {
      case "lg":
        return "9rem";
      case "sm":
        return "3rem";
      default:
        return "6rem";
    }
  }};
  font-size: 7rem;
  @media only screen and (max-width: 1000px) {
    font-size: 5rem;
    padding-top: 15px;
  }
  @media ${device.mobileL} {
    font-size: 3.5rem;
  }
`;
const BombaSubText = styled.h3`
  font-size: 3rem;
  font-family: "Noto Sans", sans-serif;
  font-size: ${(props) => {
    switch (props.subText) {
      case "lg":
        return "5rem";
      case "sm":
        return "1.3rem";
      default:
        return "3rem";
    }
  }};
  letter-spacing: 2px;

  @media only screen and (max-width: 1000px) {
    font-size: 2.5rem;
    line-height: 0;
    letter-spacing: 1px;
  }
  @media ${device.mobileL} {
    font-size: 1.8rem;
  }
`;

const SpanText = styled.span`
  color: #252424;
`;

function BombaLogo({ mobile, fontSize, subText, lineHeight }) {
  return (
    <div>
      {mobile ? (
        <picture>
          <source type="image/avif" srcSet={bombaSmallAvif} />
          <img
            src={bombaSmall}
            alt="Bomba Web Design"
            className={`${styles.bombaMobileMenu} ${styles.responsive} `}
          />
        </picture>
      ) : (
        <picture>
          <source type="image/avif" srcSet={bombaAvif} />
          <img
            src={bomba}
            alt="Bomba Web Design"
            className={styles.responsive}
          />
        </picture>
      )}
      <TextContainer lineHeight={lineHeight}>
        <BombaText fontSize={fontSize}>Bomba</BombaText>
        <BombaSubText subText={subText}>
          <SpanText>web</SpanText> design
        </BombaSubText>
      </TextContainer>
    </div>
  );
}
export { SpanText, BombaSubText };

export default BombaLogo;
