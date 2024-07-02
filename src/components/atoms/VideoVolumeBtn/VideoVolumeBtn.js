import { useState } from "react";


const VideoVolumeBtn = ({ videoRef}) => {

  const [volume, setVolume] = useState(0.5);

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
    videoRef.current.volume = e.target.value;
  }
  return (
    <button className='volume-btn'>
      <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.9585 2.70834L3.25016 4.87501H1.0835V8.12501H3.25016L5.9585 10.2917V2.70834Z" stroke="white"
          strokeLinecap="round" strokeLinejoin="round" />
        <path
          d="M10.3296 2.67041C11.345 3.68619 11.9155 5.06369 11.9155 6.49999C11.9155 7.9363 11.345 9.3138 10.3296 10.3296M8.41748 4.58249C8.92521 5.09038 9.21044 5.77913 9.21044 6.49729C9.21044 7.21544 8.92521 7.90419 8.41748 8.41208"
          stroke="white" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <div className='volume-bar-wrapper'>
        <input type="range" min="0" max="1" step="0.01" value={volume} onChange={handleVolumeChange} />
      </div>
    </button>
  )
}


export default VideoVolumeBtn;