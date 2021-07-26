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


import "./i18n";

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={(<div>Loading ~~~</div>)} >
    <Navbar />
    <Head />
    <NavbarDesktop/>
    <Wrapper>
      <AboutUs />
      <Offer />
      <Partners />
      <Contact />
    </Wrapper>
    <Footer />
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
