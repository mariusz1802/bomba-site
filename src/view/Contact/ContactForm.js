import React, { Component } from "react";
import styles from "./Contact.module.scss";
import Input from "../../components/Input/Input";
import { withTranslation } from "react-i18next";
import Button from "../../components/Button/Button";
import emailjs from "emailjs-com";
import { FormErrors } from "./FormErrors";
import Modal from "../../components/Modal/Modal";
import Fade from "react-reveal/Fade";

class Form extends Component {
  constructor(props) {
    super(props);
    this.setShow = this.setShow.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.sendEmail = this.sendEmail.bind(this);

    this.initialState = {
      subject: "",
      name: "",
      phonenumber: "",
      email: "",
      message: "",
      formErrors: {
        subject: "",
        name: "",
        phonenumber: "",
        email: "",
        message: "",
      },
      subjectValid: false,
      nameValid: false,
      phonenumberValid: false,
      emailValid: false,
      messageValid: false,
      show: false,
      formValid: false,
    };
    this.state = this.initialState;
  }

  resetForm() {
    this.setState(this.initialState);
  }

  setShow() {
    const currentState = this.state.show;
    this.setState({ show: !currentState });
  }

  sendEmail(e) {
    e.preventDefault();
    this.resetForm();
    this.setShow();
    emailjs
      .sendForm(
        "service_qgqt86q",
        "template_yd9zjxh",
        e.target,
        "user_1TdvSO4giHTFbWcnfWoJ4"
      )
      .then(
        () => {

         
        },
        () => {
        }
      );
  }

  //Validation for the form fields
  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let subjectValid = this.state.subjectValid;
    let nameValid = this.state.nameValid;
    let phonenumberValid = this.state.phonenumberValid;
    let emailValid = this.state.emailValid;
    let messageValid = this.state.messageValid;

    switch (fieldName) {
      case "subject":
        subjectValid = value.length >= 4;
        fieldValidationErrors.subject = subjectValid
          ? ""
          : this.props.t("validation.subject");
        break;
      case "name":
        nameValid = value.length >= 3;
        fieldValidationErrors.name = nameValid
          ? ""
          : this.props.t("validation.name");
        break;
      case "email":
        emailValid = value.match(
          /^(([^<>()[\],;:\s@"]+([^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\],;:\s@"]+\.)+[^<>()[\],;:\s@"]{2,})$/i
        );
        fieldValidationErrors.email = emailValid
          ? ""
          : this.props.t("validation.email");
        break;
      case "phonenumber":
        phonenumberValid = value.match(/((\+\d{2}|00\d{2}|0)\d{7,9})/g);
        fieldValidationErrors.phonenumber = phonenumberValid
          ? ""
          : this.props.t("validation.phonenumber");
        break;
      case "message":
        messageValid = value.length >= 10;
        fieldValidationErrors.message = messageValid
          ? ""
          : this.props.t("validation.message");
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        subjectValid: subjectValid,
        nameValid: nameValid,
        emailValid: emailValid,
        phonenumberValid: phonenumberValid,
        messageValid: messageValid,
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid:
        this.state.subjectValid &&
        this.state.nameValid &&
        this.state.emailValid &&
        this.state.phonenumberValid &&
        this.state.messageValid,
    });
  }

  render() {
    return (
      <div className={styles.column}>
        <Modal
          onClose={this.setShow}
          btnTitle="OK"
          show={this.state.show}
          header={this.props.t("sendInfo.header")}
          description={this.props.t("sendInfo.description")}
        />

        <h3 className={styles.askQuestion} id="ask">
          {" "}
  <Fade left cascade appear="true" when="true">
          {this.props.t("contact.askQuestion")}
  </Fade>
        </h3>
        <form onSubmit={this.sendEmail}>
          <Input
            type="text"
            placeholder={this.props.t("placeholder.subject")}
            autoComplete="none"
            maxLength="70"
            name="subject"
            value={this.state.subject}
            onChange={(event) => this.handleUserInput(event)}
            ownClass={styles.error}
            required
          />
          <FormErrors formErrors={this.state.formErrors.subject} />

          <Input
            type="text"
            placeholder={this.props.t("placeholder.name")}
            autoComplete="none"
            maxLength="30"
            name="name"
            value={this.state.name}
            onChange={(event) => this.handleUserInput(event)}
            required
          />
          <FormErrors formErrors={this.state.formErrors.name} />
          <Input
            type="text"
            name="email"
            placeholder={this.props.t("placeholder.email")}
            maxLength="35"
            value={this.state.email}
            onChange={(event) => this.handleUserInput(event)}
            required
          />
          <FormErrors formErrors={this.state.formErrors.email} />
          <Input
            type="text"
            name="phonenumber"
            maxLength="17"
            placeholder={this.props.t("placeholder.phone")}
            value={this.state.phonenumber}
            onChange={(event) => this.handleUserInput(event)}
            required
          />
          <FormErrors formErrors={this.state.formErrors.phonenumber} />
          <textarea
            className={styles.textarea}
            placeholder={this.props.t("placeholder.message")}
            rows="8"
            name="message"
            value={this.state.message}
            maxLength="300"
            onChange={(event) => this.handleUserInput(event)}
            cols="50"
          ></textarea>
          <FormErrors formErrors={this.state.formErrors.message} />

          <Button
            title={this.props.t("contact.button")}
            buttonColor="green"
            disabled={!this.state.formValid}
          />
        </form>
      </div>
    );
  }
}

export default withTranslation()(Form);
