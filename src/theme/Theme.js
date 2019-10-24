import { lighten } from "polished";

const gray100 = "#f8f9fa";
// const gray200 = lighten(0.2, gray100);

const media = {
  phone: "min-width: 576px",
  tablet: "min-width: 768px"
};
const gray = {
  gray100: "#f8f9fa",
  gray200: "#e9ecef",
  gray300: "#dee2e6",
  gray400: "#ced4da",
  gray500: "#adb5bd",
  gray600: "#6c757d",
  gray700: "#495057",
  gray800: "#343a40",
  gray900: "#212529"
};

const colors = {
  primary: "#007bff",
  secondary: gray.gray600,
  light: gray.gray100,
  dark: gray.gray800,
  white: "white"
};

const weight = {
  weight_light: 300,
  weight_normal: 500,
  weight_bold: 600
};
const widths = {
  pageMaxWidth: "1100px"
};

export const theme = {
  ...media,
  ...gray,
  ...colors,
  ...widths,
  ...weight,
  borderRadius: "0.25rem",
  imageBackground: gray.gray900,
  videoBackground: gray.gray900,
  questionBackground: colors.white
};
