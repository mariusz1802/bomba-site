import React from "react";
import styles from "./FormErrors.module.scss";
import FadeIn from "react-fade-in";

export const FormErrors = ({ formErrors }) => (
  <div className={styles.formErrors}>
    <div className={styles.textErrors}>
      {formErrors && (
        <p className={styles.textErrors}>
          <FadeIn>{formErrors}</FadeIn>
        </p>
      )}
    </div>
  </div>
);
