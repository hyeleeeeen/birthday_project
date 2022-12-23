const CommentList = ({ commentData }) => {
  return (
    <ul className="bg-[#FAF8ED] border-4 border-dashed border-[#d9d9d9] p-4 pb-9 rounded-[4rem] ">
      {commentData.map((item) => {
        return (
          <li
            key={item.id}
            className="flex flex-col w-4/5 m-auto mt-4 border  border-[#D9D9D9] bg-white rounded-full max-md:h-32"
          >
            <span className="text-left ml-4 mt-8 h-10 "> {item.content}</span>
            <span className="text-right  text-sm text-gray-400 max-md:mt-4 mr-10">
              from {item.nickName}
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default CommentList;
