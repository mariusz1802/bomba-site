import React from 'react';
import loadable from '@loadable/component';
import { ThemeProvider } from 'styled-components';
import './index.module.scss';
import Preloader from './components/Preloader/Preloader';
import Head from './view/Head/Head.js';
import Navbars from './view/Navbars/Navbars';
import Wrapper from './components/Wrapper/Wrapper';
import SliderMotion from './components/SliderMotion/SliderMotion';
import { lightTheme, darkTheme } from './components/NightMode/theme';
import { GlobalStyles } from './globals/global.js';
import { useDarkMode } from './hooks/useDarkMode';
import MessengerChat from './components/MessengerChat/MessengerChat';

import 'simplebar/dist/simplebar.min.css';

const OfferComponent = loadable(() => import('./view/Offer/Offer'));
const PartnersComponent = loadable(() => import('./view/Partners/Partners'));
const ContactComponent = loadable(() => import('./view/Contact/Contact'));
const AboutUsComponent = loadable(() => import('./view/AboutUs/AboutUs'));
const FooterComponent = loadable(() => import('./view/Footer/Footer'));

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
        <Wrapper>
          <AboutUsComponent />
          <OfferComponent />
          <PartnersComponent />
          <ContactComponent />
        </Wrapper>
        <SliderMotion />
        <FooterComponent theme={theme} />
      </Preloader>
    </ThemeProvider>
  );
}
export default App;
