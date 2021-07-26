import React from "react";
import styles from "./Modal.module.scss";
import Button from "../Button/Button";
import { FaTimes } from "react-icons/fa";

function Modal({ show, onClose, header, description, btnTitle, textSize }) {
  if (!show) {
    return null;
  }
  const TEXTSIZE = {
    large: styles.largeText,
    medium: styles.mediumText,
    small: styles.smallText,
  };

  const checkTextSize = TEXTSIZE.hasOwnProperty.call(TEXTSIZE, textSize)
    ? TEXTSIZE[textSize]
    : TEXTSIZE.medium;

  return (
    <div className={`${styles.modal} ${checkTextSize}`} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <FaTimes size="1.2em" onClick={onClose} />
        </div>
        <h3 className={styles.modalTitle}>{header}</h3>
        <div className={styles.modalBody}>{description}</div>
        <div className={styles.modalFooter}>
          <Button
            buttonSize="medium"
            buttonColor="red"
            onClick={onClose}
            title={btnTitle}
            ownStyle={styles.btnStyle}
          />
        </div>
      </div>
    </div>
  );
}

export default Modal;
