import styled from "styled-components";

export const Pagination = styled.div`
  display: flex;
  width: 100%;
  min-height: 40px;
  flex: 0 0 auto;
  justify-content: center;
  background-color: ${(props) => props.theme.bachgroundColor};
  transition: 0.1s;
  margin: 20px 0px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-evenly;
  box-sizing: border-box;
`;

export const Item = styled.div`
  cursor: pointer;
  display: flex;
  flex-grow: 1;
  /* flex: 0 0 auto; */
  justify-content: space-evenly;
  aspect-ration: 1/1;
  align-items: center;
  background-color: ${(props) => props.theme.iconColor};
  font-weight: 500;
  font-size: ${(props) => props.theme.textSizeTextL};
  height: 50px;
  max-width: 50px;
  border-radius: 50px;
  padding: auto;
  box-shadow: 0px 0px 0px 2px ${(props) => props.theme.outlineColor};
  box-sizing: border-box;
  transition: 0.1s;
  &:hover {
    transition: 0.1s;
    /* color: white; */
    box-shadow: 0px 0px 0px 2px ${(props) => props.theme.accentColor1};
  }
  margin: 0px 10px 0px 0px;
  &:last-child {
    margin: 0px 0px 0px 0px;
  }
`;

export const ActiveItem = styled(Item)`
  color: ${(props) => props.theme.textColorInverted};
  box-shadow: 0px 0px 0px 2px ${(props) => props.theme.accentColor1};
  background-color: ${(props) => props.theme.accentColor1};
`;
