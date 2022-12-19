import headerGif from '../asset/images/headerGif.gif';

const Header = () => {
  return (
    <>
      <div className=" w-full xl:bg-yellow-500 lg:bg-blue-400 md:bg-black max-md:bg-pink-500 ">
        <a href="/" className="flex justify-center">
          <img
            src={headerGif}
            alt="cake"
            className="xl:w-1/4 lg:w-1/3 md:w-1/3 max-md:w-1/2 "
          />
        </a>
      </div>
    </>
  );
};

export default Header;
