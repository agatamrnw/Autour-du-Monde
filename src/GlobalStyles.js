
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Chivo';
    src: url('/fonts/Chivo-VariableFont_wght.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Cinzel';
    src: 
         url('/fonts/Cinzel-VariableFont_wght.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Open Sans';
    src: 
         url('/fonts/OpenSans-VariableFont_wdth,wght.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  body {
    font-family: 'Open Sans', sans-serif;
  }
`;

export default GlobalStyle;
