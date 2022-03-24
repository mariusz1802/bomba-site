import React, { Suspense } from "react";
import loadable from "@loadable/component";
import LoadingScreen from "react-loading-screen";
import "./index.module.scss";
import Head from "./view/Head/Head.js";
import Navbar from "./view/Navbar/Navbar.js";
import NavbarDesktop from "./view/NavbarDesktop/NavbarDesktop";
import Wrapper from "./components/Wrapper/Wrapper";
import MessengerCustomerChat from "react-messenger-customer-chat";
import SliderMotion from "./components/SliderMotion/SliderMotion";
import LogoAvif from "./components/BombaLogo/bomba_small.avif";
import { lightTheme, darkTheme } from "./components/NightMode/theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global.js";
import { useDarkMode } from "./hooks/useDarkMode";
import ModalBoxPrices from "./components/ModalBoxPrices/ModalBoxPrices";
import CheckType from "./components/ModalBoxPrices/CheckType";

const OfferComponent = loadable(() => import("./view/Offer/Offer"));
const PartnersComponent = loadable(() => import("./view/Partners/Partners"));
const ContactComponent = loadable(() => import("./view/Contact/Contact"));
const AboutUsComponent = loadable(() => import("./view/AboutUs/AboutUs"));
const FooterComponent = loadable(() => import("./view/Footer/Footer"));

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
            bgColor="#555555"
            spinnerColor="#9ee5f8"
            textColor="#676767"
            logoSrc={LogoAvif}
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
          <AboutUsComponent />
          <OfferComponent />
          <PartnersComponent />
          <ContactComponent />
        </Wrapper>
        <SliderMotion />
        {/* <Footer theme={theme} /> */}
        <FooterComponent theme={theme} />
      </Suspense>
    </ThemeProvider>
  );
}
export default App;
