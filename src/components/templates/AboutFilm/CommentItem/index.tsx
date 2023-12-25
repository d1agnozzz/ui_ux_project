import * as Styled from "./index.styled";
import { MdClose, MdOutlineDelete } from "react-icons/md";

export type CommentProps = {
  id: number;
  userName: string;
  commentText: string;
  onDeleteClick: () => void;
};

const CommentItem: React.FC<CommentProps> = (props) => {
  return (
    <Styled.CommentContainer>
      <Styled.CommentHeader>
        <Styled.UserName> {props.userName} </Styled.UserName>
        <Styled.DeleteButton onClick={props.onDeleteClick}>
          <MdClose />
        </Styled.DeleteButton>
      </Styled.CommentHeader>
      <Styled.CommentText> {props.commentText} </Styled.CommentText>
    </Styled.CommentContainer>
  );
};

export default CommentItem;
