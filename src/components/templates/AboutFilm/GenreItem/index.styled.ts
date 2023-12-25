import styled from "styled-components";

export const Chip = styled.button`
  // box-shadow: 0 0 0 3px ${(props) => props.theme.accentColor1};
  outline: 3px solid ${(props) => props.theme.accentColor1};
  /* background-color: ${(props) => props.theme.accentColor2}; */
  max-width: 10rem;
  background-color: inherit;
  cursor: pointer;
  border: none;
  font-size: 1.2rem;
  font-weight: bold;
  color: ${(props) => props.theme.textColor};
  padding: 0.5rem 1.5rem;
  border-radius: 1000px;
  box-sizing: border-box;
  transition: all 0.2s;
  /* box-sizing: content-box; */
  &:hover {
    background-color: ${(props) => props.theme.accentColor1};
    color: ${(props) => props.theme.textColorInverted};
    transition: all 0.2s;
  }
`;
