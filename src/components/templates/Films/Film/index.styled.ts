import styled from "styled-components";

export const CardContainer = styled.div`
  position: relative;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
`;

export const CoverImage = styled.img`
  aspect-ratio: 1/1/5;
  display: flex;
  flex: 0 0 auto;
  /* padding: 5px 5px; */
  width: 100%;
  object-fit: cover;
  box-sizing: border-box;
  /* border-radius: 15px; */
`;

export const Title = styled.h1`
  position: absolute;
  font-size: clamp(1rem, 2vw, 8vh);
  /* -webkit-text-stroke: 0.6rem black; */
  /* text-stroke: 0.6rem black; */
  /* paint-order: stroke fill; */
  text-shadow: 1px 1px 10px #000;
  color: white;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  padding: 5px;
  box-sizing: border-box;
  margin: auto;
`;

export const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(255, 255, 255, 0) 35%,
    rgba(255, 255, 255, 0) 100%
  );
  z-index: 0;
`;
