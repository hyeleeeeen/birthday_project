import mainpic from '../asset/images/mainpic.jpeg';
import luv from '../asset/images/luv.jpg';
import { GoChevronRight } from 'react-icons/go';

const MainView = ({ Link }) => {
  return (
    <main className="flex flex-col font-bold text-2xl text-gray-500  ">
      <img
        src={mainpic}
        alt="pic"
        className=" m-auto border-4 border-dashed w-10/12"
      />
      <img className=" m-auto mt-10 w-10/12" src={luv} alt="pic"></img>
      <Link to="/happy" className="flex flex-row-reverse">
        <GoChevronRight className="text-6xl sm:text-8xl text-gray-400 animate-bounce" />
      </Link>
    </main>
  );
};

export default MainView;
