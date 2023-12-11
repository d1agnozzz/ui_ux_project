import { MovieList } from "@/lib/api";
import * as Styled from "./index.styled";

const Film = (movie_list: MovieList) => {
  return (
    <div>
      <Styled.CardContainer>
        <Styled.CoverImage
          src={movie_list.medium_cover_image}
          alt={movie_list.title}
        ></Styled.CoverImage>
        <Styled.GradientOverlay />
        <Styled.TextBlock>
          <Styled.Title>{movie_list.title}</Styled.Title>
          <Styled.Year>{movie_list.year}</Styled.Year>
        </Styled.TextBlock>
      </Styled.CardContainer>
    </div>
  );
};

export default Film;
