import * as Styled from "./index.styled";

type GenreItemProps = {
  id: any;
  text: string;
};
const GenreItem: React.FC<GenreItemProps> = (props) => {
  return <Styled.Chip>{props.text}</Styled.Chip>;
};

export default GenreItem;
