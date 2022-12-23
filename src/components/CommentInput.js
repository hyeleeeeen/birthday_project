import { useState, useEffect } from 'react';
import {
  collection,
  addDoc,
  onSnapshot,
  orderBy,
  query,
} from 'firebase/firestore';

const CommentInput = ({ dbService, setComments }) => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(dbService, 'comments'), {
      nickName: name,
      content: comment,
      createdAt: new Date(),
    });
    setName('');
    setComment('');
  };

  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setComment(value);
  };

  const handleOnChange = (e) => {
    const {
      target: { value },
    } = e;
    setName(value);
  };

  console.log(comment);
  console.log(name);

  useEffect(() => {
    const q = query(
      collection(dbService, 'comments'),
      orderBy('createdAt', 'desc')
    );
    onSnapshot(q, (snapshot) => {
      const commentArr = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setComments(commentArr);
    });
  }, []);

  return (
    <form
      onSubmit={onSubmit}
      className="flex m-auto border-4 border-dashed rounded-[3rem] pt-8 pl-24 pr-10 mb-5 max-md:pl-14 max-md:pr-9 "
    >
      <div className="flex flex-col m-auto">
        <input
          type="text"
          placeholder="이름을 입력해주세요."
          maxLength={6}
          value={name}
          onChange={handleOnChange}
          className="w-50 mb-1 border focus:outline-none focus:ring focus:ring-gray-300"
        />
        <textarea
          placeholder="편지를 입력해주세요."
          maxLength={40}
          value={comment}
          onChange={onChange}
          className="mb-8 w-50 h-17 border focus:outline-none focus:ring focus:ring-gray-300"
        />
      </div>
      <div className="place-items-center flex ml-2">
        <button
          type="submit"
          className="h-8 w-16 bg-red-200 text-white rounded-full shadow-md shadow-gray-200 active:shadow-sm hover:opacity-80"
        >
          send!
        </button>
      </div>
    </form>
  );
};

export default CommentInput;
