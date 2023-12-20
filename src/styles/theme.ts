import { createGlobalStyle } from "styled-components";

export const darkTheme = {
  headerColor: "#262626",
  backgroundColor: "#151515",
  outlineColor: "#767676",
  textColor: "#F5F5F5",
  textColorInverted: "#151515",
  infoIconColor: "#2D2F34",
  iconColor: "#27292D",
  accentColor1: `#FFCE80`,
  accentColor2: "#EF4B42",
  shadowColor: "#5a0600",

  textSizeTitle: "32px",
  textSizeTitle900: "22px",
  textSizeTitle700: "22px",
  textSizeTitle500: "22px",

  textSizeTextL: "22px",
  textSizeTextL900: "20px",
  textSizeTextL700: "20px",
  textSizeTextL500: "20px",

  textSizeTextM: "16px",
  textSizeTextM900: "14px",
  textSizeTextM700: "14px",
  textSizeTextM500: "14px",

  textSizeTextS: "12px",
  textSizeTextS900: "10px",
  textSizeTextS700: "10px",
  textSizeTextS500: "10px",

  borderRadius: "15px",
};

export const lightTheme = {
  headerColor: "#E2E2E2",
  outlineColor: "#A9A9A9",
  backgroundColor: "#F5F5F5",
  textColor: "black",
  textColorInverted: "white",
  infoIconColor: "#FAFAFA",
  iconColor: "white",
  accentColor1: "#EF4B42",
  accentColor2: "#FFCE80",
  shadowColor: "#000000",

  textSizeTitle: "32px",
  textSizeTitle900: "22px",
  textSizeTitle700: "22px",
  textSizeTitle500: "22px",

  textSizeTextL: "22px",
  textSizeTextL900: "20px",
  textSizeTextL700: "20px",
  textSizeTextL500: "20px",

  textSizeTextM: "16px",
  textSizeTextM900: "14px",
  textSizeTextM700: "14px",
  textSizeTextM500: "14px",

  textSizeTextS: "12px",
  textSizeTextS900: "10px",
  textSizeTextS700: "10px",
  textSizeTextS500: "10px",

  borderRadius: "15px",
};

export const GlobalStyle = createGlobalStyle`
  a{
    font-family: 'Roboto';
    text-decoration: none;
    color: ${(props) => props.theme.textColor};
  }
  body{
    margin: 0;
    padding: 0;
    background-color: ${(props) => props.theme.backgroundColor};
    transition: 0.1s;
    color: ${(props) => props.theme.textColor};
  }
    small{
font-size: 0.6em;
}
`;
