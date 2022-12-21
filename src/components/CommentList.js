const CommentList = ({ commentData }) => {
  return (
    <ul className="bg-[#FAF8ED] border-4 border-dashed border-[#d9d9d9] p-4 pb-9 rounded-[4rem]">
      {commentData.map((item) => {
        return (
          <li
            key={item.id}
            className="flex flex-col w-4/5 m-auto mt-4 border  border-[#D9D9D9] bg-white rounded-full"
          >
            <span className="text-left ml-4 mt-2"> {item.content}</span>
            <span className="text-right mr-4 mb-2 text-sm text-gray-400">
              from {item.nickName}
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default CommentList;
