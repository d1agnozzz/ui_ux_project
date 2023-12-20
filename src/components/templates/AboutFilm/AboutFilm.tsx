import Loader from "@/components/common/Loader";
import { useFilmRetrieve } from "@/lib/hooks/useFilmRetrieve";
import { useRouter } from "next/router";
import GenreItem from "./GenreItem";
import TorrentItem from "./TorrentItem";

const AboutMovie = () => {
  const router = useRouter();
  const { filmRetrieve, isLoading } = useFilmRetrieve(
    (router.query.id as string) || "",
  );

  if (isLoading) {
    return <Loader />;
  }
  const genresList = filmRetrieve?.data.movie.genres.map((value) => {
    return <GenreItem id={value} text={value} />;
  });

  const torrentList = filmRetrieve?.data.movie.torrents.map((value, index) => {
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

  return <img src={filmRetrieve?.data.movie.large_cover_image} />;
};

export default AboutMovie;
