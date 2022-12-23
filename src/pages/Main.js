import MainView from '../components/MainView';
import { BiUpArrowCircle } from 'react-icons/bi';

const Main = () => {
  return (
    <div className="relative">
      <div className="absolute bottom-[1690px] left-[100px] opacity-30 ">
        <BiUpArrowCircle />
        <span>Click !</span>
      </div>
      <MainView />
    </div>
  );
};

export default Main;
