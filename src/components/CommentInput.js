import { useRef } from 'react';

const CommentInput = () => {
  const textarea = useRef();
  const handleResizeHeight = () => {
    textarea.current.style.height = 'auto'; // height 초기화
    textarea.current.style.height = textarea.current.scrollHeight + 'px';
  };
  return (
    <section className="flex bg-black  ">
      <div className="flex flex-col">
        <input type="text" placeholder="닉네임" className="" />
        <textarea
          placeholder="편지를 입력해주세요."
          className=""
          onChange={handleResizeHeight}
          rows={1} // 기본값 한줄 고정
        />
      </div>
      <button type="submit" className="h-8 bg-red-100">
        send!
      </button>
    </section>
  );
};

export default CommentInput;
