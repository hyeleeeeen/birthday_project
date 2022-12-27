import collage from '../asset/images/collage2.png';

const Gallery = () => {
  return (
    <div>
      <main className="flex flex-col justify-center border-4 border-dashed">
        <img className="w-full " src={collage} alt="we"></img>
      </main>
    </div>
  );
};

export default Gallery;
