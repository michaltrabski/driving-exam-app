import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:300,600');
  
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  html {
    font-size: 62.5%;
    scroll-behavior: smooth; 
  }
  
  body {
    margin: 0;
    font-size: 1.6rem;
    font-family: "Montserrat", sans-serif;
  }

  h5 {
      font-size: 2rem;
  }

  .btn.focus, .btn:focus {
    box-shadow: none !important;
}

`;

export default GlobalStyle;
