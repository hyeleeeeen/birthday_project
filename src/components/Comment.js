import CommentInput from './CommentInput';
import CommentList from './CommentList';
import { useState } from 'react';
import { dbService } from '../fBase';
import { collection, getDocs } from 'firebase/firestore';

const Comment = () => {
  const [comments, setComments] = useState([]);

  const getComments = async () => {
    const dbComments = await getDocs(collection(dbService, 'comments'));
    dbComments.forEach((document) => {
      const commentObject = {
        ...document.data(),
        id: document.id,
      };
      setComments((prev) => [commentObject, ...prev]);
    });
  };

  return (
    <section className="flex flex-col ">
      <CommentInput
        dbService={dbService}
        getComments={getComments}
        setComments={setComments}
      />
      <CommentList commentData={comments} />
    </section>
  );
};

export default Comment;
