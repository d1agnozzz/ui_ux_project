import exp from "constants";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  /* margin: 2rem 20rem; */
  /* justify-content: center; */
  align-self: center;
  margin-block: 2rem;
  margin-inline: 10%;
  /* max-width: 70%; */
  gap: 20px;
  flex-direction: row;
  @media (max-width: 1200px) {
    flex-direction: column;
    margin-inline: 5%;
  }
`;

export const CoverImage = styled.img`
  aspect-ratio: 5/7.5;
  object-fit: contain;
  width: 100%;
  align-self: start;
  height: auto;
  max-width: 500px;
  max-height: 750px;
  @media (max-width: 1200px) {
    max-width: 100%;
  }
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
  /* margin-top: 1.5rem; */
  margin-bottom: 1.5rem;
`;

export const Torrents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Info = styled.div`
  // min-width: 50rem;
  display: flex;
  flex-shrink: 1;
  flex-direction: column;
  gap: 20px;
`;

export const Title = styled.h1`
  font-size: 4rem;
  font-size: clamp(2rem, 4rem, 5vw);
  margin: 0;
`;

export const YearAndLanguage = styled.h3`
  margin: 0;
  /* margin-bottom: 1rem; */
  color: ${(props) => props.theme.outlineColor};
`;

export const Duration = styled.h3`
  display: flex;
  align-items: center;
  margin: 0;
  /* margin-bottom: 1rem; */
  color: ${(props) => props.theme.outlineColor};
`;

export const RatingContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 1rem; */
`;

export const Rating = styled.h1`
  font-size: 5rem;
  font-size: 3rem;
  font-size: clamp(3rem, 5rem, 5vw);
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

export const DesctiptionCaption = styled.div`
  font-size: 2rem;
  color: ${(props) => props.theme.outlineColor};
`;
export const Description = styled.div<{ $showMore?: boolean }>`
  font-size: 1.2rem;
  line-height: 1.8rem;
  max-width: 60rem;
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

export const TorrentsCaption = styled.div`
  font-size: 2rem;
  color: ${(props) => props.theme.outlineColor};
`;

export const CommentFormCaption = styled.div`
  font-size: 2rem;
  color: ${(props) => props.theme.outlineColor};
`;

export const CommentsCaption = styled.div`
  font-size: 2rem;
  color: ${(props) => props.theme.outlineColor};
`;

export const CommentForm = styled.form`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  font-size: 1.5rem;
  border-radius: 1rem;
`;

export const CommentUserName = styled.input`
  font-size: inherit;
  border-radius: inherit;
  padding-left: 10px;
  padding-block: 10px;
  border: none;
  background-color: ${(props) => props.theme.backdropColor};
  color: ${(props) => props.theme.textColor};
  outline: 2px solid ${(props) => props.theme.outlineColor};
  &:focus {
    outline-color: ${(props) => props.theme.accentColor1};
  }
`;

export const CommentText = styled.textarea`
  font-size: inherit;
  border-radius: inherit;
  background-color: ${(props) => props.theme.backdropColor};
  color: ${(props) => props.theme.textColor};
  padding-left: 10px;
  padding-block: 15px;
  border: none;
  outline: 2px solid ${(props) => props.theme.outlineColor};
  &:focus {
    outline-color: ${(props) => props.theme.accentColor1};
  }
`;

export const CommentSubmitButton = styled.button`
  cursor: pointer;
  font-weight: bold;
  font-size: inherit;
  border: none;
  outline: none;
  border-radius: 50px;
  padding-block: 10px;
  background-color: ${(props) => props.theme.accentColor1};
  color: ${(props) => props.theme.textColorInverted};
  transition: all 0.2s;
  &:active {
    background-color: ${(props) => props.theme.accentColor2};
  }
  &:hover {
    box-shadow: 0 0 1rem 0.1rem ${(props) => props.theme.accentColor1};
    transition: all 0.2s;
  }
  &:focus {
    box-shadow: 0 0 1rem 0.1rem ${(props) => props.theme.accentColor1};
    transition: all 0.2s;
  }
`;

export const CommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const NoCommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NoCommentsIcon = styled.img`
  width: 10rem;
  opacity: 0.3;
  filter: invert(${(props) => (props.theme.themeName == "dark" ? 1 : 0)});
`;

export const NoComentsCaption = styled.h2``;
