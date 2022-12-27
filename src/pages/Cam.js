import Camera from '../components/Camera';
import { GoChevronLeft } from 'react-icons/go';

const Cam = ({ Link }) => {
  return (
    <main>
      <Camera />
      <Link to="/to">
        <GoChevronLeft className="text-6xl sm:text-8xl text-gray-400 animate-bounce " />
      </Link>
    </main>
  );
};

export default Cam;
