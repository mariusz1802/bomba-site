import React from "react";
import styles from "./GreyBox.module.scss";
import Hyphenated from "react-hyphen";
import Button from "../Button/Button";
import pl from "hyphenated-pl";
import styled from "styled-components";

export const BlackBox = styled.div`
  width: 100%;
  text-align: center;
  padding: 10px;
  background-image: ${({ theme }) => theme.gradient};
  color: ${({ theme }) => theme.text};
  margin-bottom: 30px;
`;

function GreyBox({
  title,
  imgSrc,
  description,
  ownClass,
  dataAos,
  withButton,
  onClick,
  buttonTitle,
}) {
  return (
    <BlackBox>
      <div className={`${styles.container} ${ownClass}`} data-aos={dataAos}>
        <h1 className={styles.title}>{title} </h1>
        <img src={imgSrc} alt={title} className={styles.image} />
        <Hyphenated language={pl}>
          <p className={styles.description}> {description} </p>
        </Hyphenated>
        <div className={styles.buttonLocation}>
          {withButton && (
            <Button
              buttonSize="micro"
              buttonColor="transparent"
              buttonStyle="rounded"
              title={buttonTitle}
              onClick={onClick}
            />
          )}
        </div>
      </div>
    </BlackBox>
  );
}

export default GreyBox;
