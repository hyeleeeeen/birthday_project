const CommentList = ({ commentData }) => {
  return (
    <section className="bg-[#FAF8ED] p-10 rounded-[4rem]">
      {commentData.map((item) => {
        return (
          <div
            key={item.id}
            className="flex flex-col w-4/5 m-auto mt-4 border border-[#D9D9D9] bg-white rounded-full"
          >
            <span className="text-left ml-4 mt-2">{item.content}</span>
            <span className="text-right mr-4 mb-2">{item.nickName}</span>
          </div>
        );
      })}
    </section>
  );
};

export default CommentList;
