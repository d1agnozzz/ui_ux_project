import exp from "constants";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 2rem 30rem;
  gap: 20px;
  flex-direction: row;
`;

export const CoverImage = styled.img`
  aspect-ratio: 5/7.5;
  min-width: 500px;
  max-height: 750px;
`;

export const TopInfoContainer = styled.div`
  display: flex;
  /* gap: 1rem; */
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
`;

export const MainInfoContainer = styled.div`
  display: flex;
  /* gap: 20px; */
  flex-direction: column;
`;

export const Genres = styled.div`
  display: flex;
  max-width: 25rem;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 1.5rem;
  margin-bottom: 3rem;
`;

export const Torrents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 4rem;
  margin: 0;
`;

export const Year = styled.h3`
  margin: 0;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.outlineColor};
`;

export const RatingContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 1rem; */
`;

export const Rating = styled.h1`
  font-size: 5rem;
  text-align: center;
  color: ${(props) => props.theme.accentColor1};
  margin: 0;
`;

export const RatingCaption = styled.p`
  text-align: center;
  color: ${(props) => props.theme.outlineColor};
  font-weight: bold;
  font-size: 1.5rem;
  margin: 0;
  /* margin-top: 0.6rem; */
`;

export const DesctiptionCaption = styled.text`
  font-size: 2rem;
  color: ${(props) => props.theme.outlineColor};
`;
export const Description = styled.text<{ $showMore?: boolean }>`
  font-size: 1.2rem;
  line-height: 1.8rem;
  max-height: ${(props) => (props.$showMore ? "100%" : "9rem")};
  overflow: ${(props) => (props.$showMore ? "visible" : "hidden")};
  /* margin-bottom: 5rem; */
`;

export const ShowMoreButton = styled.button<{ $showMore?: boolean }>`
  align-self: flex-end;
  cursor: pointer;
  background-color: inherit;
  color: ${(props) => props.theme.accentColor1};
  border: none;
  font-size: 1rem;
`;

export const TorrentsCaption = styled.text`
  font-size: 2rem;
  color: ${(props) => props.theme.outlineColor};
`;

export const CommentForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const CommentUserName = styled.input``;

export const CommentText = styled.textarea``;

export const CommentSubmitButton = styled.button``;
