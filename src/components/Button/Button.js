import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';
function Button({
  buttonStyle,
  buttonColor,
  buttonSize,
  title,
  onClick,
  type,
  disabled,
}) {
  const STYLES = { btnMobile: styles.btnMobile, rounded: styles.rounded };
  const COLOR = {
    red: styles.red,
    green: styles.green,
    transparent: styles.transparent,
  };
  const SIZE = {
    wide: styles.wide,
    medium: styles.medium,
    small: styles.small,
    micro: styles.micro,
  };

  const checkButtonStyle = STYLES.hasOwnProperty.call(STYLES, buttonStyle)
    ? STYLES[buttonStyle]
    : STYLES.btnMobile;

  const checkButtonColor = COLOR.hasOwnProperty.call(COLOR, buttonColor)
    ? COLOR[buttonColor]
    : COLOR.green;

  const checkButtonSize = SIZE.hasOwnProperty.call(SIZE, buttonSize)
    ? SIZE[buttonSize]
    : SIZE.wide;

  return (
    <button
      className={` ${styles.btn} ${checkButtonStyle} ${checkButtonColor} ${checkButtonSize}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {title}
    </button>
  );
}

Button.propTypes = {
  buttonStyle: PropTypes.string,
  buttonColor: PropTypes.string,
  buttonSize: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
