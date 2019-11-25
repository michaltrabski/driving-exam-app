import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollTopOnRouteChange = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log("ScrollTopOnRouteChange", pathname);

    window.scrollTo(0, 0);
  }, [pathname]);
  return "asd";
};

export default ScrollTopOnRouteChange;
