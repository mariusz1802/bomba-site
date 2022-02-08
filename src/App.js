import React, { Suspense } from "react";
import "./index.module.scss";
import Head from "./view/Head/Head.js";
import Navbar from "./view/Navbar/Navbar.js";
import NavbarDesktop from "./view/NavbarDesktop/NavbarDesktop";
import Wrapper from "./components/Wrapper/Wrapper";
import AboutUs from "./view/AboutUs/AboutUs";
import MessengerCustomerChat from "react-messenger-customer-chat";
import Offer from "./view/Offer/Offer.js";
import Partners from "./view/Partners/Partners.js";
import Contact from "./view/Contact/Contact.js";
import SliderMotion from "./components/SliderMotion/SliderMotion";
import Footer from "./view/Footer/Footer.js";
import LoadingScreen from "react-loading-screen";
import Logo from "./components/BombaLogo/bomba_small.png";
import { lightTheme, darkTheme } from "./components/NightMode/theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global.js";
import { useDarkMode } from "./hooks/useDarkMode";
import ModalBoxPrices from "./components/ModalBoxPrices/ModalBoxPrices";
import CheckType from "./components/ModalBoxPrices/CheckType"

function App() {
  const [theme, setTheme] = useDarkMode();
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
           <Suspense
        fallback={
          <LoadingScreen
            loading={true}
            bgColor="#f1f1f1"
            spinnerColor="#9ee5f8"
            textColor="#676767"
            logoSrc={Logo}
            // children="bombadesign.pl"
          />
        }
      >
         <MessengerCustomerChat
          pageId="108034361531951"
           appId="3321358404655618"
           language="pl_PL"
         />
        <Navbar />
        <Head theme={theme} toggleTheme={toggleTheme} />
        <Navbar />
        <NavbarDesktop />
        <Wrapper>
          <AboutUs />
          <Offer />
          <Partners />
          <Contact />
        </Wrapper>
        <SliderMotion />
        <Footer theme={theme} />
      </Suspense>
    </ThemeProvider>
  );
}
export default App;
