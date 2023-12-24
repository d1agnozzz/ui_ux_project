import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  /* flex: 0 0 auto; */
  flex-direction: column;
  flex-shrink: 0;
  /* align-content: stretch; */
  /* align-self: stretch; */

  max-width: 100%;
  padding: 50px 100px;
  @media (max-width: 768px) {
    padding: 10px 10px;
  }
  /* height: 100%; */
  /* justify-content: space-between; */
`;

export const Grid = styled.div`
  display: grid;
  flex: 1;
  flex-grow: 1;
  gap: 10px;
  max-width: 100%;
  /* height: 100%; */
  /* padding: 100px 20px; */
  box-sizing: border-box;
  /* grid-template-columns: 200px 200px 200px 200px; */
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  @media (min-width: 1600px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    /* padding: 100px; */
  }
  @media (max-width: 1600px) and (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    /* padding: 100px; */
  }
  @media (max-width: 992px) and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media (max-width: 768px) and (min-width: 576px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 576px) {
    grid-template-columns: 1fr 1fr;
  }
`;
