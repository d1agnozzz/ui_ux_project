import { MovieList } from "@/lib/api";
import * as Styled from "./index.styled";
import Link from "next/link";

const Film = (movie_list: MovieList) => {
  return (
    <div>
      <Link href={`/films/${movie_list.id}`}>
        <Styled.CardContainer>
          <Styled.CoverImage
            src={movie_list.medium_cover_image}
            alt={movie_list.title}
          ></Styled.CoverImage>
          <Styled.GradientOverlay />
          <Styled.SolidOverlay />
          <Styled.TextBlock>
            <Styled.HoverInfo>
              <Styled.Score>
                {movie_list.rating}
                <small>/10</small>
              </Styled.Score>
              {0 in movie_list.genres ? (
                <Styled.Genre>
                  {movie_list.genres[0].toUpperCase()}
                </Styled.Genre>
              ) : (
                ""
              )}
              {1 in movie_list.genres ? (
                <Styled.Genre>
                  {movie_list.genres[1].toUpperCase()}
                </Styled.Genre>
              ) : (
                ""
              )}
              {2 in movie_list.genres ? (
                <Styled.Genre>
                  {movie_list.genres[2].toUpperCase()}
                </Styled.Genre>
              ) : (
                ""
              )}
              <Styled.Year>{movie_list.year}</Styled.Year>
            </Styled.HoverInfo>
            <Styled.MainInfo>
              <Styled.Title>{movie_list.title}</Styled.Title>
            </Styled.MainInfo>
          </Styled.TextBlock>
        </Styled.CardContainer>
      </Link>
    </div>
  );
};

export default Film;
