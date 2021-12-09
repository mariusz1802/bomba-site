import React from "react";
import bomba from "./bomba_logo_transparent.png";
import styles from "./BombaLogo.module.scss";
import styled from "styled-components";

const TextContainer = styled.div`
  margin: auto;
  font-family: "Pacifico";
  display: flex;
  line-height: 0.8;
  flex-direction: column;
`;

const BombaText = styled.h3`
  color: ${({ theme }) => theme.text};
  font-size: 6rem;
`;
const BombaSubText = styled.h3`
  font-size: 3rem;
  letter-spacing: 2px;
  font-family: "Noto Sans";
`;

const SpanText = styled("");

function BombaLogo() {
  return (
    <div>
      <img src={bomba} alt="logo" className={styles.responsive}></img>
      <TextContainer>
        <BombaText>Bomba</BombaText>
        <BombaSubText>
          <span>web</span> design
        </BombaSubText>
      </TextContainer>
    </div>
  );
}

export default BombaLogo;
