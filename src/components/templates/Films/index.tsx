import { useFilmList } from "@/lib/hooks/useFilmList";
import { useEffect, useState } from "react";
import Film from "./Film";
import { useRouter } from "next/router";
import * as Styled from "./index.styled";
import Pagination from "@/components/common/Pagination";
import { usePathname } from "next/navigation";

const Films = () => {
  const [page, setPage] = useState("1");
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      console.log(router.query);
      setPage(router.query.current_page || "");
    }
  }, [router.isReady]);

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
        onPageChange={(page) => {
          setPage(page);
          router.push(`/catalog/${page}`);
        }}
      />
    </Styled.Container>
  ) : null;
};

export default Films;
