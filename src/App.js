import React, { Suspense, useState } from "react";
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
import Logo from "./components/BombaLogo/logo_small.jpg";
import { lightTheme, darkTheme } from "./components/NightMode/theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global.js";
import ToggleButton from "./components/ToggleButton/ToggleButton";

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <ToggleButton theme={theme} toggleTheme={toggleTheme} />
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
        <Navbar />
        <Head />
        <Navbar />
        <NavbarDesktop />
        <Wrapper>
          <AboutUs />
          <Offer />
          <Partners />
          <Contact />
        </Wrapper>
        <Footer theme={theme} />
      </Suspense>
    </ThemeProvider>
  );
}
export default App;
