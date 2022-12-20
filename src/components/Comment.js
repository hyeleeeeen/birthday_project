import CommentInput from './CommentInput';
import CommentList from './CommentList';

const Comment = () => {
  const commentData = [
    { id: 1, nickName: '멍멍', content: '생일축하해!' },
    {
      id: 2,
      nickName: '냥아치',
      content: '올 생일이냠ㅋ오늘 즐겁게 보내랑',
    },
    {
      id: 3,
      nickName: '할룽',
      content: '할룽할룽',
    },
  ];
  return (
    <div className="flex flex-col ">
      <CommentInput />
      <CommentList commentData={commentData} />
    </div>
  );
};

export default Comment;
