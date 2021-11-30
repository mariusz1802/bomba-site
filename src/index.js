import React from "react";
import ReactDOM from "react-dom";
import "./index.module.scss";
import MessengerCustomerChat from "react-messenger-customer-chat";
import reportWebVitals from "./reportWebVitals";
import Head from "./view/Head/Head.js";
import Navbar from "./view/Navbar/Navbar.js";
import NavbarDesktop from "./view/NavbarDesktop/NavbarDesktop";
import Wrapper from "./components/Wrapper/Wrapper";
import AboutUs from "./view/AboutUs/AboutUs";
import Offer from "./view/Offer/Offer.js";
import Partners from "./view/Partners/Partners.js";
import Contact from "./view/Contact/Contact.js";
import Footer from "./view/Footer/Footer.js";
import LoadingScreen from "react-loading-screen";
import Logo from "./view/Head/logo_big.jpg";
import { UseEffectScroll } from "react-use-smooth-scroll";
import SmoothScroll from "./components/SmoothScroll/SmoothScroll";

import "./i18n";
import "./index.css";

ReactDOM.render(
  <React.Fragment>
    <Head />
    <SmoothScroll />
    <NavbarDesktop />
    <Wrapper>
      <Navbar />
      <AboutUs />
      <Offer />
      <Partners />
      <Contact />
    </Wrapper>
    <Footer />
  </React.Fragment>,
  document.getElementById("rowot")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
