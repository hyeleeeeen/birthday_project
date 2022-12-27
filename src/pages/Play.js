import ciao from '../asset/images/ciao.gif';
import PlayMusic from '../components/PlayMusic';

const Play = () => {
  return (
    <div>
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
