import AudioPlayer from 'react-h5-audio-player';
import music from '../asset/music/song.mp3';

function PlayMusic() {
  return (
    <AudioPlayer
      autoPlay
      src={music}
      onPlay={(e) => console.log('onPlay')}
      loop={true}
      showJumpControls={false}
    />
  );
}

export default PlayMusic;
