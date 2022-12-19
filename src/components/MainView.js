import mainpic from '../asset/images/mainpic.jpeg';

const MainView = () => {
  return (
    <>
      <div className="flex flex-col font-bold text-2xl text-gray-500 mt-32 mb-32 ">
        <img
          src={mainpic}
          alt="pic"
          className="xl:w-1/3 lg:w-1/2 md:w-1/2 max-md:w-3/4 m-auto"
        />
      </div>
    </>
  );
};

export default MainView;
