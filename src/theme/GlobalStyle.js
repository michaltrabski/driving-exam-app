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
  
  h1,h2 {
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
}
h1 {
  font-size: 1.6rem;
  @media (${({ theme }) => theme.tablet}) {
    font-size: 2.5rem !important;
  }
}
h2 {
  font-size: 1.4rem;
  @media (${({ theme }) => theme.tablet}) {
    font-size: 2rem !important;
  }
}
p {
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1rem;
}


.poznajtesty-explanation .border {
  display: none;
}

.show-content.yes .d-none {
  display: block !important;
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
   z-index:99999
 }

/* make strong explanations from poznaj-testy.pl  */
 .mt-strong {
   font-weight: 700;
 }
`;

export default GlobalStyle;
