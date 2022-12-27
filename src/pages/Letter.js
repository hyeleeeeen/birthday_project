import Comment from '../components/Comment';
import { GoChevronRight } from 'react-icons/go';
import { GoChevronLeft } from 'react-icons/go';

const Letter = ({ Link }) => {
  return (
    <main>
      <Comment />
      <section className="flex justify-between">
        <Link to="/birthday">
          <GoChevronLeft className="text-6xl sm:text-8xl text-gray-400" />
        </Link>
        <Link to="/you">
          <GoChevronRight className="text-6xl sm:text-8xl text-gray-400" />
        </Link>
      </section>
    </main>
  );
};

export default Letter;
