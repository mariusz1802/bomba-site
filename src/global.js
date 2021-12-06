import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
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
  }`;
