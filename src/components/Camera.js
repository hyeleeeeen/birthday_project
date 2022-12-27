import React from 'react';
import Webcam from 'react-webcam';

const Camera = () => {
  const webcamRef = React.useRef(null); // Dom에 접근
  const [imgSrc, setImgSrc] = React.useState(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

  const today = new Date();

  const date = today.toLocaleDateString('en-US');

  return (
    <article className="flex flex-col justify-center">
      <h1 className="default m-auto text-neutral-500">새로운 추억 담기 💟</h1>
      <Webcam
        audio={false}
        ref={webcamRef}
        mirrored={true}
        screenshotFormat="image/jpeg"
      />
      <button onClick={capture} className="text-9xl">
        📷
      </button>
      {imgSrc && (
        <section className="mt-16 p-6 pb-48  shadow-[#d9d9d9] shadow-lg">
          <img src={imgSrc} alt="newpic" className="mb-5" />
          <h1>{date}</h1>
        </section>
      )}
    </article>
  );
};

export default Camera;
