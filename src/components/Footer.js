import React from "react";
import { getYear } from "../functions/functions";
import { StyledFooter } from "../elements/elements";

const Footer = () => {
  return (
    <StyledFooter className="bg-dark text-light text-center p-1">
      <span>Testy na prawo jazdy {getYear()}</span>
    </StyledFooter>
  );
};

export default Footer;
