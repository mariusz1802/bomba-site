import React from "react";
import styles from "./FormErrors.module.scss";

export const FormErrors = ({ formErrors }) => (
  <div className={styles.formErrors}>
    <div className={styles.textErrors}>
      {formErrors && <p className={styles.textErrors}>{formErrors}</p>}
    </div>
  </div>
);
