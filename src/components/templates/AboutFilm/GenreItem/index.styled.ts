import styled from "styled-components";

export const Chip = styled.div`
  box-shadow: 0 0 0 3px ${(props) => props.theme.accentColor1};
  /* background-color: ${(props) => props.theme.accentColor2}; */
  max-width: 10rem;
  font-size: ${(props) => props.theme.textSizeTextM};
  font-weight: bold;
  color: ${(props) => props.theme.textColor};
  padding: 0.5rem 1.5rem;
  border-radius: 1000px;
  box-sizing: border-box;
`;
