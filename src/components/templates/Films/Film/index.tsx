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
        <Styled.Title>{movie_list.title}</Styled.Title>
      </Styled.CardContainer>
    </div>
  );
};

export default Film;
