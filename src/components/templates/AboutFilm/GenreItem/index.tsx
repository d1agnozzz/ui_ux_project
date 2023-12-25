import { useRouter } from "next/router";
import * as Styled from "./index.styled";

type GenreItemProps = {
  id: any;
  genre_name: string;
};
const GenreItem: React.FC<GenreItemProps> = (props) => {
  const router = useRouter();
  return (
    <Styled.Chip
      onClick={() => {
        router.push("/catalog?genre=" + props.genre_name);
      }}
    >
      {props.genre_name}
    </Styled.Chip>
  );
};

export default GenreItem;
