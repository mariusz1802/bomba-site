


import React from "react";
import styles from "./Contact.module.scss";
// import Input from "../../components/Input/Input";
import { useTranslation } from "react-i18next";
import Button from "../../components/Button/Button";
import emailjs from "emailjs-com";
import validator from "validator";
import Input  from 'react-validation/build/input';
function Form() {
  const { t } = useTranslation();

  //Validation for the form fields

  const required = (value) => {
    if (!value.toString().trim().length) {
      window.alert("nie wpisales danych");
      return 'require';
    }
  };

  const email = (value) => {
    if (!validator.isEmail(value)) {
      return `${value} is not a valid email.`;
    }
  };

  const lt = (value, props) => {
    // get the maxLength from component's props
    if (!value.toString().trim().length > props.maxLength) {
      // Return jsx
      return (
        <span className="error">
          The value exceeded {props.maxLength} symbols.
        </span>
      );
    }
  };

  //API for email send EmailJS
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qgqt86q",
        "template_yd9zjxh",
        e.target,
        "user_1TdvSO4giHTFbWcnfWoJ4"
      )
      .then(
        (result) => {
          console.log(result.text);
          window.alert("Wysłano maila!");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div className={styles.column}>
      <h3 className={styles.askQuestion} id="ask">
        {" "}
        {t("contact.askQuestion")}:
      </h3>
      <form onSubmit={validator}>
        <Input
          type="text"
          placeholder={t("contact.subject")}
          autoComplete="none"
          name="subject"
          validations={[required]}
        />
        <Input
          type="text"
          placeholder={t("contact.name")}
          autoComplete="none"
          name="name"
          validations={[required]}
        />
        <Input type="text" name="email" placeholder="Email" />
        <Input
          type="text"
          name="phonenumber"
          value="email@email.com"
          placeholder={t("contact.mobile")}
          validations={[required, email]}
        />
        <textarea
          className={styles.textarea}
          placeholder={t("contact.askQuestion")}
          rows="8"
          name="message"
          cols="50"
          validations={[required]}
        ></textarea>
        <Button type="submit" title={t("contact.button")} />
      </form>
    </div>
  );
}

export default Form;
