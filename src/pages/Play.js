import ciao from '../asset/images/ciao.gif';
import PlayMusic from '../components/PlayMusic';
import { BiUpArrowCircle } from 'react-icons/bi';

const Play = () => {
  return (
    <div className="relative ">
      <div className="absolute left-[590px] bottom-[740px] opacity-30 ">
        <BiUpArrowCircle />
        <span>Click !</span>
      </div>
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
      </main>
    </div>
  );
};

export default Play;
