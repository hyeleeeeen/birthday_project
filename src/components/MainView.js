import mainpic from '../asset/images/mainpic.jpeg';
import luv from '../asset/images/luv.jpg';

const MainView = () => {
  return (
    <>
      <main className="flex flex-col font-bold text-2xl text-gray-500  ">
        <img
          src={mainpic}
          alt="pic"
          className="w-1/2  m-auto border-4 border-dashed border-4 border-dashed"
        />
        <img className="w-1/2  m-auto mt-10" src={luv} alt="pic"></img>
      </main>
    </>
  );
};

export default MainView;
