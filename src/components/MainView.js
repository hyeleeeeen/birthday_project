import mainpic from '../asset/images/mainpic.jpeg';

const MainView = () => {
  return (
    <>
      <main className="flex flex-col font-bold text-2xl text-gray-500  ">
        <img src={mainpic} alt="pic" className="w-1/2  m-auto" />
      </main>
    </>
  );
};

export default MainView;
