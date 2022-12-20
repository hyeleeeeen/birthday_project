const CommentInput = () => {
  const handleOnClick = () => {
    alert('준비중입니다!');
    alert('카톡으로 보내는건');
  };
  return (
    <section className="flex m-auto">
      <div className="flex flex-col">
        <input
          type="text"
          placeholder="닉네임"
          className="w-20 mb-1 border focus:outline-none focus:ring focus:ring-gray-300"
        />
        <textarea
          placeholder="편지를 입력해주세요."
          className="mb-8 w-50 h-17 border focus:outline-none focus:ring focus:ring-gray-300"
        />
      </div>
      <div className="place-items-center flex ml-2">
        <button
          type="submit"
          onClick={handleOnClick}
          className="h-8 w-16 bg-red-200 text-white rounded-full shadow-md shadow-gray-200 active:shadow-sm hover:opacity-80"
        >
          send!
        </button>
      </div>
    </section>
  );
};

export default CommentInput;
