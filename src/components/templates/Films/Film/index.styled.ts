import styled from "styled-components";

export const CardContainer = styled.div`
  display: grid;
  position: relative;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
`;

export const CoverImage = styled.img`
  grid-row: 1;
  grid-column: 1;
  aspect-ratio: 1/1/5;
  display: flex;
  flex: 0 0 auto;
  /* padding: 5px 5px; */
  width: 100%;
  object-fit: cover;
  box-sizing: border-box;
  /* border-radius: 15px; */
`;

export const TextBlock = styled.div`
  grid-row: 1;
  grid-column: 1;
  display: flex;
  align-self: flex-end;
  flex-direction: column;
  text-shadow: 1px 1px 3px #000000;
  color: white;
  z-index: 1;
  padding: 5px;
`;

export const Title = styled.h1`
  // position: absolute;
  /* margin: auto; */
  font-size: clamp(1rem, 2vw, 8vh);
  margin: 0;
  /* -webkit-text-stroke: 0.6rem black; */
  /* text-stroke: 0.6rem black; */
  /* paint-order: stroke fill; */
  /* bottom: 0; */
  /* left: 0; */
  right: 0;
  width: 100%;
`;

export const Year = styled.h2`
  font-size: clamp(0.3rem, 1vw, 4vh);
  margin: 0;
  align-self: flex-end;
`;

export const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0) 50%,
    rgba(0, 0, 0, 0) 100%
  );
  z-index: 0;
`;
