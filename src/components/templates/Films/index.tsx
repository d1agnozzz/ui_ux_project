import { useFilmList } from "@/lib/hooks/useFilmList";
import { useState } from "react";
import Film from "./Film";
import * as Styled from "./index.styled";

const Films = () => {
  const [page, setPage] = useState(1);
  const pageSize = 10;
  const { filmList, isLoading } = useFilmList(String(page), String(pageSize));

  const filmsList = filmList?.data.movies.map((film) => {
    return <Film key={film.id} {...film}></Film>;
  });

  if (isLoading) {
    return;
  }
  return filmList ? (
    <Styled.Container>
      <Styled.Grid>{filmsList}</Styled.Grid>{" "}
    </Styled.Container>
  ) : null;
};

export default Films;
