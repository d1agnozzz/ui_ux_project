import styled from "styled-components";

export const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: ${(props) => props.theme.backdropColor};
  border-radius: 25px;
  padding: 10px;
`;

export const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const UserName = styled.h2`
  margin: 0;
  width: fit-content;
  font-size: 1.5rem;
  padding-inline: 10px;
  padding-block: 5px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.accentColor2};
  color: ${(props) => props.theme.textColor};
`;

export const CommentText = styled.p`
  font-size: 1.5rem;
  margin: 0;
  margin-bottom: 1rem;
  padding-left: 0px;
`;

export const DeleteButton = styled.button`
  cursor: pointer;
  display: flex;
  font-size: 2rem;
  border: none;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  width: 1lh;
  /* height: 2rem; */
  background-color: ${(props) => props.theme.accentColor1};
  color: ${(props) => props.theme.textColorInverted};
`;
