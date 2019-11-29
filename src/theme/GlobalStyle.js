import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:300,500,600');
  
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    min-height: 100vh;
    background-color: ${({ theme }) => theme.light};
  }
 .video .video {
   display: none;
   list-style:none
 }
 .navbar-collapse.false .video .video {
  display: block;
 }
 .navbar-collapse.collapse .video:hover .video {
   display: block;
   position: absolute;
   background-color: #343a40!important;
   padding-left: 0;
   z-index:99999:
 }

/* make strong explanations from poznaj-testy.pl  */
 .mt-strong {
   font-weight: 700;
 }
`;

export default GlobalStyle;
