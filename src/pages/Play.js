import ciao from '../asset/images/ciao.gif';
import PlayMusic from '../components/PlayMusic';
import { GoChevronRight, GoChevronLeft } from 'react-icons/go';

const Play = ({ Link }) => {
  return (
    <main className="flex flex-col">
      <section>
        <img
          src={ciao}
          alt="congratulation"
          className="m-auto xl:w-1/3 lg:w-1/2 md:w-1/2 max-md:w-3/4"
        />
      </section>
      <section className=" m-auto">
        <PlayMusic />
      </section>
      <section className="flex justify-between animate-bounce">
        <Link to="/happy">
          <GoChevronLeft className="text-6xl sm:text-8xl text-gray-400" />
        </Link>
        <Link to="/to">
          <GoChevronRight className="text-6xl sm:text-8xl text-gray-400" />
        </Link>
      </section>
    </main>
  );
};

export default Play;
