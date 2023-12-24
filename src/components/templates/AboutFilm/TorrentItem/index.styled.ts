import styled from "styled-components";

export const Container = styled.a`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;

  gap: 100px;
  height: 50px;
  border-radius: 40px;
  background-color: ${(props) => props.theme.accentColor1};
  /* box-shadow: 0 0 0 3px ${(props) => props.theme.accentColor1}; */
`;

export const FileProperties = styled.div`
  margin-left: 1rem;
  display: grid;
  grid-template-columns: 7rem 6rem 7rem;
`;

export const TorrentProperties = styled.div`
  display: grid;
  grid-template-columns: 9rem 4rem 4rem;
  min-width: 1rem;
`;

export const Attribute = styled.div<{ $textColor?: string }>`
  display: flex;
  flex-direction: row;
  color: ${(props) => props.$textColor || props.theme.textColorInverted};
`;

export const InfoIcon = styled.div<{ $iconColor?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding-left: 1rem; */
  color: ${(props) => props.$iconColor || props.theme.accentColor2};
`;
