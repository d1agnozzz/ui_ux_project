import * as Styled from "./index.styled";

export type CommentProps = {
  id: number;
  userName: string;
  commentText: string;
};

const CommentItem: React.FC<CommentProps> = (props) => {
  return (
    <Styled.CommentContainer>
      <Styled.UserName> {props.userName} </Styled.UserName>
      <Styled.CommentText> {props.commentText} </Styled.CommentText>
    </Styled.CommentContainer>
  );
};

export default CommentItem;
