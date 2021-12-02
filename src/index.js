import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.module.scss";
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
import ScrollArea from "react-scrollbar";
import { SmoothProvider } from "react-smooth-scrolling";
import Logo from "./view/Head/logo_big.jpg";
import ScrollingContainer from "./components/SmoothScroll/SmoothScroll";
import { Scrollbar } from "smooth-scrollbar-react";
import "./i18n";

ReactDOM.render(
  <React.Fragment>
    <Suspense
      fallback={
        <LoadingScreen
          loading={true}
          bgColor="#f1f1f1"
          spinnerColor="#9ee5f8"
          textColor="#676767"
          logoSrc={Logo}
          children="bombadesign.pl"
        />
      }
    >
      <Head />
      <Navbar />
      <NavbarDesktop />
      <ScrollingContainer>
        <Wrapper>
          <AboutUs />
          <Offer />
          <Partners />
          <Contact />
        </Wrapper>
        <Footer />
      </ScrollingContainer>
    </Suspense>
  </React.Fragment>,
  document.body
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
