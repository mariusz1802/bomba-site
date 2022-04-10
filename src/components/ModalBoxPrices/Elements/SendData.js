import React, { useState, useEffect } from "react";
import Input from "../../Input/Input";
import { useTranslation } from "react-i18next";
import FancyButton from "../../FancyButton/FancyButton";
import BombaLogo from "../../BombaLogo/BombaLogo";
import styled from "styled-components";
import emailjs from "emailjs-com";
import { FormErrors } from "../../../view/Contact/FormErrors";
import { HiOutlineArrowLeft } from "react-icons/hi";
import CheckAnimation from "./CheckAnimation/CheckAnimation";
import useFade from "../../../hooks/useFade/useFade";
import { device } from "../../../device";

const Wrapper = styled.div`
   height: 90vh; 
  @media ${device.mobileL} {
    padding-top: 150px;
  }
`;

const Paragraph = styled.p`
margin : 10px 0;
`;

const InputWrapper = styled.div`
  width: 60%;
  margin: auto;
  margin-bottom: 30px;
  @media ${device.mobileL} {
    width: 80%;
  }
`;

export const ArrowWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 10px;
  font-size: 3.2rem;
  font-weight: 300;
  color: ${({ theme }) => theme.text};
  transition: all 0.2s ease-in-out;
  :hover {
    color: #0ec50e;
    cursor: pointer;
  }
  @media ${device.mobileL} {
      font-size : 2.5rem;
      top: 10px;
      left: 10px;
  }
`;

function SendData({ backButton, orderDetails, onClose }) {
  const { t } = useTranslation();
  const [state, setState] = useState({
    name: "",
    email: "",
    phonenumber: "",
  });

  const [valid, setValid] = useState({
    formErrors: { name: "", email: "", phonenumber: "" },
    nameValid: false,
    emailValid: false,
    phoneValid: false,
    formValid: false,
  });

  const [data, setData, fadeProps] = useFade(true);

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setState({ ...state, [name]: value }, validateField(name, value));
  };

  const sendData = () => {
    setData(!data);
  };

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
        () => {},
        () => {}
      );
  }

  const validateField = (fieldName, value) => {
    let fieldValidationErrors = valid.formErrors;
    let nameValid = valid.nameValid;
    let emailValid = valid.emailValid;
    let phoneValid = valid.phoneValid;

    const phonePatt = new RegExp(/((\+\d{2}|00\d{2}|0)\d{7,9})/g);
    const emailPatt = new RegExp(
      /^(([^<>()[\],;:\s@"]+([^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\],;:\s@"]+\.)+[^<>()[\],;:\s@"]{2,})$/i
    );

    switch (fieldName) {
      case "name":
        nameValid = value.length >= 4;
        fieldValidationErrors.name = nameValid ? "" : t("validation.name");
        break;
      case "email":
        emailValid = emailPatt.test(value);
        fieldValidationErrors.email = emailValid ? "" : t("validation.email");
        break;
      case "phonenumber":
        phoneValid = phonePatt.test(value);
        fieldValidationErrors.phonenumber = phoneValid
          ? ""
          : t("validation.phonenumber");
        break;
      default:
        break;
    }

    if (!value) {
      fieldValidationErrors[fieldName] = value.length === 0 && "";
    }
    //TODO: Disable button when Email or Phone is incorect(trigger validateForm function from setValid)
    setValid({
      ...valid,
      nameValid: nameValid,
      emailValid: emailValid,
      phoneValid: phoneValid,
      formValid: nameValid && (emailValid || phoneValid),
    });
  };

  return data ? (
    <Wrapper {...fadeProps}>
      <ArrowWrapper onClick={backButton}>
        <HiOutlineArrowLeft />
      </ArrowWrapper>

      <BombaLogo mobile fontSize="sm" subText="sm" lineHeight="low" />
      <form onSubmit={sendEmail} autoComplete="off">
        <InputWrapper>
          <Paragraph>{t("intresstedButton.data")}</Paragraph>
          <Input
            type="text"
            name="name"
            value={state.name}
            onChange={(event, value) => handleChange(event)}
            maxLength="30"
            placeholder={t("placeholder.name")}
          />
          <FormErrors formErrors={valid.formErrors.name} />

          <Input
            type="text"
            name="email"
            value={state.email}
            onChange={(event) => handleChange(event)}
            maxLength="40"
            placeholder={t("placeholder.email")}
          />
          <FormErrors formErrors={valid.formErrors.email} />

          <Input
            type="text"
            name="phonenumber"
            value={state.phonenumber}
            onChange={(event) => handleChange(event)}
            maxLength="40"
            placeholder={t("placeholder.phone")}
          />
          <FormErrors formErrors={valid.formErrors.phonenumber} />

          <textarea
            style={{ display: "none" }}
            name="message"
            value={orderDetails}
          ></textarea>
        </InputWrapper>
        <FancyButton
          disabled={!valid.formValid}
          text={t("sendDataButton.text")}
          onClick={sendData}
        />
      </form>
    </Wrapper>
  ) : (
    <>
      <ArrowWrapper onClick={backButton}>
        <HiOutlineArrowLeft />
      </ArrowWrapper>
      <CheckAnimation onClose={onClose} />
    </>
  );
}

export default SendData;
