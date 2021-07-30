import React from "react";
import styles from "./GreyBox.module.scss";
import Hyphenated from "react-hyphen";
import Button from "../Button/Button";
import pl from 'hyphenated-pl';
import Fade from 'react-reveal/Fade';

function GreyBox({
  title,
  imgSrc,
  description,
  ownClass,
  dataAos,
  animationImage,
  withButton,
  onClick,
  buttonTitle
}) {
  return (
    <div className={`${styles.container} ${ownClass}`} data-aos={dataAos}>
      <h1 className={styles.title}> <Fade left cascade appear="true" when="true">

{title}</Fade> </h1>
      <img
        src={imgSrc}
        alt={title}
        className={styles.image}
        data-aos={animationImage}
      />
      <Hyphenated language={pl}>
        <p className={styles.description}> {description} </p>
      </Hyphenated>
      <div className={styles.buttonLocation}>
       {withButton && <Button
          buttonSize="micro"
          buttonColor="transparent"
          buttonStyle= "rounded"
          title={buttonTitle}
          onClick ={onClick}
        />}
      </div>
    </div>
  );
}

export default GreyBox;
