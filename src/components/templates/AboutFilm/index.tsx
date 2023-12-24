import Loader from "@/components/common/Loader";
import { useFilmRetrieve } from "@/lib/hooks/useFilmRetrieve";
import { useRouter } from "next/router";
import GenreItem from "./GenreItem";
import TorrentItem from "./TorrentItem";
import * as Styled from "./index.styled";
import { useEffect, useState } from "react";
import CommentItem, { CommentProps } from "./CommentItem";

const AboutMovie = () => {
  const router = useRouter();
  const [showMore, setShowMore] = useState(false);

  const { filmRetrieve, isLoading } = useFilmRetrieve(
    (router.query.id as string) || "",
  );
  // console.log("router query", router.query);

  const [userName, setUserName] = useState("");
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState(() => {
    if (typeof window !== "undefined") {
      const localStorage: CommentProps[] = window.localStorage.getItem(
        filmRetrieve?.data.movie.id as string,
      );
      return localStorage ? JSON.parse(localStorage) : [];
    }
  });

  // console.log(comments[0]);

  useEffect(() => {
    window.localStorage.setItem(
      filmRetrieve?.data.movie.id as string,
      JSON.stringify(comments),
    );
  }, [comments]);

  if (isLoading) {
    return <Loader />;
  }

  const genresList = filmRetrieve?.data.movie.genres.map((value) => {
    return <GenreItem id={value} text={value} />;
  });

  const torrentList = filmRetrieve?.data.movie.torrents?.map((value, index) => {
    return (
      <TorrentItem
        key={index}
        url={value.url}
        quality={value.quality}
        type={value.type}
        video_codec={value.video_codec}
        seeds={value.seeds}
        peers={value.peers}
        size={value.size}
        date_uploaded={value.date_uploaded}
      />
    );
  });

  const ISO6391 = require("iso-639-1");
  const language = ISO6391.getName(filmRetrieve?.data.movie.language);

  return (
    <Styled.Container>
      <Styled.CoverImage src={filmRetrieve?.data.movie.large_cover_image} />
      <Styled.Info>
        <Styled.TopInfoContainer>
          <Styled.MainInfoContainer>
            <Styled.Title> {filmRetrieve?.data.movie.title} </Styled.Title>
            <Styled.Year>
              {filmRetrieve?.data.movie.year} {language}
            </Styled.Year>
          </Styled.MainInfoContainer>
          <Styled.RatingContainer>
            <Styled.Rating>{filmRetrieve?.data.movie.rating}</Styled.Rating>
            <Styled.RatingCaption>Rating</Styled.RatingCaption>
          </Styled.RatingContainer>
        </Styled.TopInfoContainer>
        <Styled.Genres>{genresList}</Styled.Genres>
        <Styled.DesctiptionCaption>Описание</Styled.DesctiptionCaption>
        <Styled.Description $showMore={showMore}>
          {filmRetrieve?.data.movie.description_full}
        </Styled.Description>
        <Styled.ShowMoreButton onClick={() => setShowMore(!showMore)}>
          {showMore ? "Show less..." : "Show more..."}
        </Styled.ShowMoreButton>
        <Styled.TorrentsCaption>Скачать</Styled.TorrentsCaption>
        <Styled.Torrents>{torrentList}</Styled.Torrents>
        <Styled.CommentForm
          onSubmit={(event) => {
            event.preventDefault();
            const newComment: CommentProps = {
              id: comments.length + 1,
              userName: userName,
              commentText: commentText,
            };
            setComments([...comments, newComment]);
            setUserName("");
            setCommentText("");
          }}
        >
          <Styled.CommentUserName
            placeholder="Имя пользователя"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
          />
          <Styled.CommentText
            placeholder="Ваш отзыв"
            value={commentText}
            onChange={(event) => setCommentText(event.target.value)}
          />
          <Styled.CommentSubmitButton type="submit">
            Отправить отзыв
          </Styled.CommentSubmitButton>
        </Styled.CommentForm>
        {comments.map((comment) => {
          return (
            <CommentItem
              key={comment.id}
              id={comment.id}
              userName={comment.userName}
              commentText={comment.commentText}
            />
          );
        })}
      </Styled.Info>
    </Styled.Container>
  );
};

export default AboutMovie;
