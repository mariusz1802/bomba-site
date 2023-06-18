import { createGlobalStyle } from 'styled-components';
import Pacifico from './fonts/Pacifico.woff';
import NotoSans from './fonts/NotoSans.woff';
const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: "Pacifico";
    src :local("Pacifico"), url(${Pacifico}) format("woff");
}



@font-face {
    font-family: "Noto Sans";
    src :local("Noto Sans"), url(${NotoSans}) format("woff");
}


.customFont {
  animation: fontLoaded 3s ease-in-out forwards;
}


@keyframes fontLoaded {
  0% {
    opacity: 0;
  }
  100%{
    opacity: 1;

  }
}

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    /* align-items: center; */
    margin: 0;
    background: ${({ theme }) => theme.backgroundGradient};
    color: ${({ theme }) => theme.text};
    padding: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.5s linear;


    /* Change Autocomplete styles in Chrome*/
input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  -webkit-text-fill-color: ${({ theme }) => theme.text};
  transition: background-color 5000s ease-in-out 0s;
}
  }`;

/* Change Autocomplete styles in Chrome*/

export default GlobalStyle;
