import headerGif from '../asset/images/headerGif.gif';

const Header = () => {
  return (
    <header className=" w-full">
      <a href="/birthday_project" className="flex justify-center">
        <img
          src={headerGif}
          alt="cake"
          className="xl:w-1/4 lg:w-1/3 md:w-1/3 max-md:w-1/2 "
        />
      </a>
    </header>
  );
};

export default Header;
