import { useFilmList } from "@/lib/hooks/useFilmList";
import { useState } from "react";
import Film from "./Film";
import * as Styled from "./index.styled";
import Pagination from "@/components/common/Pagination";

const Films = () => {
  const [page, setPage] = useState(1);
  const pageSize = 24;
  const { filmList, isLoading } = useFilmList(String(page), String(pageSize));

  const film = filmList?.data.movies.map((film) => {
    return <Film key={film.id} {...film}></Film>;
  });

  if (isLoading) {
    return;
  }
  return filmList ? (
    <Styled.Container>
      <Styled.Grid>{film}</Styled.Grid>{" "}
      <Pagination
        pageSize={pageSize}
        currentPage={filmList?.data.page_number}
        totalMovieCount={filmList?.data.movie_count}
        onPageChange={(page) => setPage(page)}
      />
    </Styled.Container>
  ) : null;
};

export default Films;
