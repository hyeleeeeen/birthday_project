import collage from '../asset/images/collage2.png';
import { GoChevronRight } from 'react-icons/go';
import { GoChevronLeft } from 'react-icons/go';

const Gallery = ({ Link }) => {
  return (
    <main className="flex flex-col">
      <img className="w-full " src={collage} alt="we"></img>
      <section className="flex justify-between">
        <Link to="/birthday_project">
          <GoChevronLeft className="text-6xl sm:text-8xl text-gray-400" />
        </Link>
        <Link to="/birthday">
          <GoChevronRight className="text-6xl sm:text-8xl text-gray-400" />
        </Link>
      </section>
    </main>
  );
};

export default Gallery;
