import Comment from '../components/Comment';
import { BiUpArrowCircle } from 'react-icons/bi';

const Letter = () => {
  return (
    <div className="relative ">
      <div className="absolute bottom-[520px] right-[20px] opacity-30 ">
        <BiUpArrowCircle />
        <span>Click !</span>
      </div>
      <main>
        <Comment />
      </main>
    </div>
  );
};

export default Letter;
