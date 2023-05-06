import React from 'react';
import PropTypes from 'prop-types';
import styles from './GutsButton.module.scss';
function GutsButton({ text, onClick, disabled }) {
  return (
    <button disabled={disabled} className={styles.button} onClick={onClick}>
      <span> {text}</span>
      <div className={styles.button__horizontal}></div>
      <div className={styles.button__vertical}></div>
    </button>
  );
}

GutsButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default GutsButton;
