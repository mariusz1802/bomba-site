import React from 'react';
import loadable from '@loadable/component';
import { ThemeProvider } from 'styled-components';
import Preloader from './components/Preloader/Preloader';
import Head from './view/Head/Head.js';
import Navbars from './view/Navbars/Navbars';
import SliderMotion from './components/SliderMotion/SliderMotion';
import { lightTheme, darkTheme } from './components/NightMode/theme';
import { GlobalStyles } from './globals/global.js';
import './index.module.scss';
import { useDarkMode } from './hooks/useDarkMode';
import MessengerChat from './components/MessengerChat/MessengerChat';

const OfferSection = loadable(() => import('./view/Offer/Offer'));
const PartnersSection = loadable(() => import('./view/Partners/Partners'));
const ContactSection = loadable(() => import('./view/Contact/Contact'));
const AboutUsSection = loadable(() => import('./view/AboutUs/AboutUs'));
const FooterSection = loadable(() => import('./view/Footer/Footer'));

function App() {
  const [theme, setTheme] = useDarkMode();
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Preloader>
        <MessengerChat />
        <Head theme={theme} toggleTheme={toggleTheme} />
        <Navbars />
        <AboutUsSection />
        <OfferSection />
        <PartnersSection />
        <ContactSection />
        <SliderMotion />
        <FooterSection theme={theme} />
      </Preloader>
    </ThemeProvider>
  );
}
export default App;
