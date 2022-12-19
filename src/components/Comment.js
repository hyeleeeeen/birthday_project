import CommentInput from './CommentInput';
import CommentList from './CommentList';

const Comment = () => {
  return (
    <div className="flex flex-col">
      <CommentInput />
      <CommentList />
    </div>
  );
};

export default Comment;
