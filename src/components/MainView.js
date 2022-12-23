import mainpic from '../asset/images/mainpic.jpeg';
import luv from '../asset/images/luv.jpg';

const MainView = () => {
  return (
    <>
      <main className="flex flex-col font-bold text-2xl text-gray-500  ">
        <img
          src={mainpic}
          alt="pic"
          className=" m-auto border-4 border-dashed w-10/12"
        />
        <img className=" m-auto mt-10 w-10/12" src={luv} alt="pic"></img>
      </main>
    </>
  );
};

export default MainView;
