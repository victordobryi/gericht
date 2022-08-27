import React, { useRef, useState } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { meal } from '../../constants';

import './Intro.scss';

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>();

  const handleVideo = () => {
    setPlayVideo((prevVideo) => !prevVideo);

    if (playVideo) {
      videoRef.current && videoRef.current.pause();
    } else {
      videoRef.current && videoRef.current.play();
    }
  };

  return (
    <div className="app__video">
      <video loop controls={false} muted src={meal} ref={videoRef} />
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={handleVideo}
          role="button"
          tabIndex={0}
          onKeyDown={() => ''}
        >
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
