import ReactAudioPlayer from 'react-audio-player';
import music from '../asset/music/song.mp3';

function PlayMusic() {
  return (
    <>
      <ReactAudioPlayer src={music} autoPlay controls loop={true} />
    </>
  );
}

export default PlayMusic;
