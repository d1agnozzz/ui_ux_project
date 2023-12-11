import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  justify-content: center;
`;

export const Grid = styled.div`
  display: grid;
  gap: 1%;
  width: 100%;
  height: 100%;
  padding: 100px 100px;
  /* grid-template-columns: 200px 200px 200px 200px; */
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;
