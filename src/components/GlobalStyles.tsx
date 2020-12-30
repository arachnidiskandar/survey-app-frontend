import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle(
  ({ theme: { colors } }) => css`
    * {
      box-sizing: border-box;
    }

    html,
    body,
    #root {
      margin: 0;
      font-family: 'Roboto', sans-serif;
      color: ${colors.primary.main};
      background-color: ${colors.background};
      display: flex;
      flex: auto;
      flex-direction: column;
      min-height: 0;
      max-height: 100%;
      overflow: hidden;
    }
    body {
      padding: 0 20vw;
    }
  `
);

export default GlobalStyles;
