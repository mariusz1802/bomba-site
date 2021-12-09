import React from "react";
import bomba from "./bomba_logo_transparent.png";
import bombaSmall from "./bomba_small.png";
import styles from "./BombaLogo.module.scss";
import styled from "styled-components";

const TextContainer = styled.div`
  margin: auto;
  font-family: "Pacifico";
  display: flex;
  line-height: 0.8;
  flex-direction: column;
  padding-bottom: 15px;
`;

const BombaText = styled.h3`
  color: ${({ theme }) => theme.text};
  font-size: 6rem;
  @media only screen and (max-width: 1000px) {
    font-size: 5rem;
    padding-top: 15px;
  }
`;
const BombaSubText = styled.h3`
  font-size: 3rem;
  letter-spacing: 2px;
  font-family: "Noto Sans";
  @media only screen and (max-width: 1000px) {
    font-size: 2.5rem;
    line-height: 0;
    letter-spacing: 1px;
  }
`;

const SpanText = styled.span`
  color: #252424;
`;

function BombaLogo({ mobile }) {
  return (
    <div>
      {mobile ? (
        <img
          src={bombaSmall}
          alt="Bomba Web Design"
          className={`${styles.bombaMobileMenu} ${styles.responsive} `}
        ></img>
      ) : (
        <img
          src={bomba}
          alt="Bomba Web Design"
          className={styles.responsive}
        ></img>
      )}
      <TextContainer>
        <BombaText>Bomba</BombaText>
        <BombaSubText>
          <SpanText>web</SpanText> design
        </BombaSubText>
      </TextContainer>
    </div>
  );
}

export default BombaLogo;
