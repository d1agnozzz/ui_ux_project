import exp from "constants";
import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  width: 100%;
  min-height: 100px;
  align-items: center;
  justify-content: space-evenly;
  color: ${(props) => props.theme.textColor};
  /* box-shadow: 0px 0px 5px ${(props) => props.theme.accentColor1}; */
  background-color: ${(props) => props.theme.headerColor};
  top: 0;
  position: sticky;
  overflow: hidden;
  z-index: 50;
  @media (max-width: 768px) and (min-width: 576px) {
    min-height: 60px;
  }
  @media (max-width: 576px) {
    min-height: 60px;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
  margin: 10px;
  /* padding: 0px 20px; */
  background-color: ${(props) => props.theme.headerColor};
  box-sizing: border-box;

  @media (min-width: 1200px) {
    width: 1200px;
  }
  @media (max-width: 1200px) and (min-width: 992px) {
    width: 100%;
  }
  @media (max-width: 992px) and (min-width: 768px) {
    width: 100%;
  }
  @media (max-width: 768px) and (min-width: 576px) {
    width: 100%;
  }
  @media (max-width: 576px) {
    width: 100%;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoBG = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 100px;
  grid-column: 1;
  grid-row: 1;
  background-color: blue;
`;

export const Icon = styled.img`
  display: flex;
  /* max-width: 96px; */
  height: 96px;
  width: auto;
`;
export const LogoName = styled.span`
  display: flex;
  font-size: ${(props) => props.theme.textSizeTitle};
  font-weight: 500;
  font-family: "Russo One";
  margin: 5px 0px 0px 24px;
  @media (max-width: 768px) and (min-width: 576px) {
    font-size: ${(props) => props.theme.textSizeTextM500};
  }
  @media (max-width: 576px) {
    font-size: ${(props) => props.theme.textSizeTextM500};
  }
`;

export const SearchContainer = styled.div`
  margin: 0 50px;
`;

export const Buttons = styled.div`
  display: flex;
`;
