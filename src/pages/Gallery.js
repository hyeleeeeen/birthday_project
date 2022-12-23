import collage from '../asset/images/collage2.png';
import { BiUpArrowCircle } from 'react-icons/bi';

const Gallery = () => {
  return (
    <div className="relative ">
      <div className="absolute bottom-[760px] left-[370px] opacity-30 ">
        <BiUpArrowCircle />
        <span>Click !</span>
      </div>
      <main className="flex flex-col justify-center border-4 border-dashed">
        <img className="w-full " src={collage} alt="we"></img>
      </main>
    </div>
  );
};

export default Gallery;
