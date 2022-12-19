import ciao from '../asset/images/ciao.gif';

const Play = () => {
  return (
    <main>
      <img
        src={ciao}
        alt="congratulation"
        className="m-auto xl:w-1/3 lg:w-1/2 md:w-1/2 max-md:w-3/4"
      />
    </main>
  );
};

export default Play;
