import CommentInput from './CommentInput';
import CommentList from './CommentList';

const Comment = () => {
  const commentData = [
    { id: 1, nickName: '둘리', content: '생일축하해!' },
    {
      id: 2,
      nickName: '냥아치',
      content:
        '올 생일이냠ㅋ 진짜루 생일축하해 ㅋㅋㅋ 담에 함 보자! 오늘 하루 즐겁게 잘보내구',
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
