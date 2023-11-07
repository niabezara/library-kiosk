import React from "react";
import { ThemeProvider } from "styled-components";
import { lightType, darkType } from "../interfaces/ThemeTypes";

const lightTheme: lightType = {
  backgroundColor: "#f5f5fd",
  secondBackground: "#f5f5fd",
  borderColor: "#e7e3fa",
  navBackground: "rgba(245, 241, 241, 0.3)",
  headerColor: "#192655",
  textColor: "#696969",
  mainColor: "#8871e6",
  secondColor: "#dbd2ff",
  gradientColor: "linear-gradient(45deg, #8871e6, #5a43b9)",
  boxShadow: "8px 8px 18px #d4d4d4, -8px -8px 18px #ffffff",
  keyword: "blue",
  className: "#78b3da",
};

const darkTheme: darkType = {
  backgroundColor: "#262A56",
  secondBackground: "#21254f",
  borderColor: "#0d1324",
  navBackground: "rgba(13, 25, 48, 0.3)",
  headerColor: "#FFFBF5",
  textColor: "#D0BFFF",
  mainColor: "#D0BFFF",
  secondColor: "#122B39",
  gradientColor: "linear-gradient(45deg, #5CE8D2, #48c2b0)",
  boxShadow: "8px 8px 18px #0F172A, -8px -8px 18px #0F172A",
  keyword: "#326cb8",
  className: "#389d89",
};
type ThemeProps = {
  children: React.ReactNode;
  theme: string;
};
function Theme({ children, theme }: ThemeProps) {
  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      {children}{" "}
    </ThemeProvider>
  );
}

export default Theme;
