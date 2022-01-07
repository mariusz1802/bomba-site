import React from "react";
import styles from "./Input.module.scss";
import PropTypes from "prop-types";

function Input({
  type,
  name,
  onChange,
  placeholder,
  value,
  maxLength,
  ownClass,
  validations,
  required,
}) {
  return (
    <div className={styles.form}>
      <input
        autoComplete="off"
        type={type}
        name={name}
        className={`${styles.form} ${ownClass}`}
        id={name}
        value={value}
        validations={validations}
        maxLength={maxLength}
        onChange={onChange}
        required={required}
      ></input>
      <label htmlFor="name" className={styles.labelName}>
        <span className={styles.contentName}>
          {placeholder} {required && <i>*</i>}{" "}
        </span>
      </label>
    </div>
  );
}

Input.propTypes = {
  value: PropTypes.any.isRequired,
};

Input.defaultProps = {
  type: "text",
  name: "input",
  maxLength: 200,
  label: "labelName",
};

export default Input;
