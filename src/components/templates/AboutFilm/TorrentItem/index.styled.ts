import styled from "styled-components";

export const Container = styled.a`
  display: flex;
  flex-direction: row;
  flex-shrink: 1;
  justify-content: space-between;
  align-items: center;
  font-size: clamp(0.7rem, 1.5rem, 4vw);

  /* gap: 15rem; */
  /* height: 50px; */
  padding-block: 10px;
  padding-inline: 1rem;
  border-radius: 40px;
  background-color: ${(props) => props.theme.accentColor1};
  transition: all 0.2s;
  &:hover {
    box-shadow: 0 0 1rem 0.1rem ${(props) => props.theme.accentColor1};
  }

  @media (max-width: 700px) {
    flex-direction: column;
    padding-inline: 2rem;
  }
`;

export const FileProperties = styled.div`
  // width: 100%;
  display: grid;
  align-content: center;
  grid-template-columns: 7rem 6rem 7rem;
  /* grid-template-columns: 1fr 1fr 1fr; */

  @media (max-width: 768px) {
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr;
    /* gap: 20px; */
  }
`;

export const TorrentProperties = styled.div`
  display: grid;
  grid-template-columns: 9rem 4rem 4rem;
  /* width: 100%; */

  @media (max-width: 768px) {
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const Attribute = styled.div<{ $textColor?: string }>`
  display: flex;
  flex-direction: row;
  /* justify-content: center; */
  color: ${(props) => props.$textColor || props.theme.textColorInverted};
`;

export const InfoIcon = styled.div<{ $iconColor?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.1rem;
  /* padding-left: 1rem; */
  color: ${(props) => props.$iconColor || props.theme.accentColor2};
`;
