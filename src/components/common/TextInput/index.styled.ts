import styled from "styled-components";

export const TextField = styled.input`
  padding: 10px 10px 10px 25px;
  background-color: ${(props) => props.theme.backgroundColor};
  font-size: 1.5em;
  color: ${(props) => props.theme.textColor};
  border: none;
  box-shadow: 0 0 0 2px ${(props) => props.theme.outlineColor}; // fake border, so that it doesn't affect layout
  outline: none;
  border-radius: 500px;
  transition: 0.1s;
  -webkit-transition: 0.1s;
  &:hover {
    box-shadow: 0 0 0 2px ${(props) => props.theme.accentColor1};
  }
  &:focus {
    box-shadow: 0 0 0 3px ${(props) => props.theme.accentColor1};
  }
`;
