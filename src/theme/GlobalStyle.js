import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:300,500,600');
  
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  html {
    /* font-size: 62.5%; */
    scroll-behavior: smooth; 
  }
  
  body {
    color: ${({ theme }) => theme.gray900};
    margin: 0;
    /* font-size: 1.6rem; */
    font-family: "Montserrat", sans-serif;
  }

  nav {
    font-weight: 300;
  }

  h1, h2, h3, h4, h5, h6 {
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
}

h1 {  font-size: 4rem;}
h2 {  font-size: 3.2rem;}
h3 {  font-size: 2.8rem;}
h4 {  font-size: 2.4rem;}
h5 {  font-size: 1.2rem;}
h6, p {  font-size: 1rem;}



`;

export default GlobalStyle;
