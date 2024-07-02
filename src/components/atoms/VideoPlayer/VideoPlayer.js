"use client";

import React, { useRef, useState, useEffect, useCallback } from 'react';
import useStyles from './style';
import VideoLangBtn from '../VideoLangBtn/VideoLangBtn';
import VideoVolumeBtn from '../VideoVolumeBtn/VideoVolumeBtn';

const VideoPlayer = ({ displayQuiz = false, playFrom = 0, srcList = {}, handleNext }) => {
  const videoRef = useRef(null);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(playFrom);
  const [videoLang, setVideoLang] = useState('en');

  const classes = useStyles();

  const progress = currentTime > 0
    ? Number((Number(currentTime?.toFixed(2)) / Number(duration?.toFixed(2)) * 100).toFixed(2))
    : 0;

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleLoadedMetadata = () => {
        console.log('handleLoadedMetadata', video.duration);
        setDuration(video.duration);
      };

      video.addEventListener('loadedmetadata', handleLoadedMetadata);
      video.load();
      console.log('playFrom', currentTime);
      video.currentTime = currentTime;

      return () => {
        video?.removeEventListener('loadedmetadata', handleLoadedMetadata);
      };
    }
  }, [videoLang, srcList, displayQuiz]);

  const handleSeek = (e) => {
    let video = videoRef.current;
    let outerBar = document.querySelector(".progress-outer-js");
    if (e.type === 'mousemove') {
      if (e.buttons > 0) {
        video.currentTime = (e.nativeEvent.offsetX / outerBar.offsetWidth) * duration;
      }
    } else {
      video.currentTime = (e.nativeEvent.offsetX / outerBar.offsetWidth) * duration;
    }
  };

  const handleNextBtnClick = (currentTime) => {
    videoRef.current.pause();
    // setTimeout(() => {
    //   handleNext(currentTime);
    // }, 1000);
    handleNext(currentTime);
  };

  const formatTime = (duration) => {
    // console.log(duration);
    let min = Math.floor(duration / 60);
    let sec = Math.floor(duration % 60);
    sec = sec < 10 ? '0' + sec : sec;
    if (min < 1) {
      min = '00';
      return min + ":" + sec;
    } else if (min < 100) {
      min = min < 10 ? '0' + min : min;
      return min + ":" + sec;
    } else {
      let hr = Math.floor(min / 60);
      hr = hr < 10 ? '' + hr : hr;
      min = min % 60;
      min = min < 10 ? '0' + min : min;
      return hr + ":" + min + ":" + sec;
    }
  }

  const handlePlay = () => {

    let video = videoRef.current;
    let pauseSVG = document.querySelector(".pause-svg-js");
    let playSVG = document.querySelector(".play-svg-js");
    if (video.paused) {
      pauseSVG.style.display = "block";
      playSVG.style.display = "none";
      video.play()
    } else {
      playSVG.style.display = "block";
      pauseSVG.style.display = "none";
      video.pause()
    }
  }

  const handleTimeUpdate = () => {
    console.log('handleTimeUpdate');
    let video = videoRef.current;
    let progressBar = document.querySelector(".progress-inner-js");
    if (video) {
      progressBar.style.width = progress + '%';
      setCurrentTime(video.currentTime);
    }
  }

  const handleEnlarge = () => {
    let video = videoRef.current;
    console.log('enlarge');
    if (!document.fullscreenElement) {
      video.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }

  const handleLangChange = useCallback((lang) => {
    setVideoLang(lang)
  }, []);

  // console.log('videoRef.current', videoRef.current.volume);

  return (
    <div className={classes.VideoPlayer}>
      {/* <div className={classes.VideoPlayer}>
        <h2>{title}</h2>
        <video
          ref={videoRef}
          // controls
          className='video'
        // onTimeUpdate={() => setCurrentTime(videoRef.current.currentTime)}
        >
          <source src={srcList[videoLang]} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div>
          {Object.keys(srcList)?.map((lang, i) => (
            <p key={i}>
              <button onClick={() => handleLangChange(lang, currentTime)} target="_blank" rel="noopener noreferrer">{lang}</button>
            </p>
          ))}
        </div>
        {duration && (
          <div>
            <input
              type="range"
              min="0"
              max={100}
              value={progress}
              onChange={handleSeek}
            />
            <p>Progress: {progress}% / 100%</p>
          </div>
        )}
        {!displayQuiz && progress > 89 && (
          <div className='btn-container'>
            <button onClick={() => { handleNext(currentTime) }}>Next</button>
          </div>
        )}
      </div> */}
      <div className="container">
        <video
          ref={videoRef}
          className="video video-js"
          onTimeUpdate={handleTimeUpdate}
          onClick={handlePlay}
          onDoubleClick={handleEnlarge}
          id="video"
        >
          <source src={srcList[videoLang]} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="controls-wrapper">
          <div className="control-set set-1">
            <button className="skip-back-js" onClick={() => { console.log("skip back"); }}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.5 10L4.5 6L9.5 2V10Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2.5 9.5V2.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button className="play-svg play-pause-js" onClick={handlePlay}>
              <svg className="play-svg-js" width="24" height="24" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M5 3L19 12L5 21V3Z" stroke="white" strokeWidth="2" strokeLinecap="round"
                  strokeLinejoin="round" />
              </svg>
              <svg className="pause-svg pause-svg-js" width="24" height="24" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <rect x="6" y="4" width="3" height="16" fill="white" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="14" y="4" width="3" height="16" fill="white" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button className="skip-forward-js" onClick={() => { console.log("skip back"); }}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.5 10L7.5 6L2.5 2V10Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9.5 9.5V2.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
          <div className="progress-wrapper">
            <div className="video-time video-time-js">{formatTime(currentTime)}</div>
            <div className="progress-outer progress-outer-js" onClick={handleSeek} onMouseMove={handleSeek}>
              <div className="progress-inner progress-inner-js">
                <div className="progress-knob progress-knob-js"></div>
              </div>
            </div>
            <div className="video-duration video-duration-js">{formatTime(duration)}</div>
          </div>
          <div className="control-set set-2">
            <VideoLangBtn videoLang={videoLang} srcList={srcList} handleLangChange={handleLangChange} />
            <VideoVolumeBtn videoRef={videoRef} />
            {/* <button className='volume-btn'>
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.9585 2.70834L3.25016 4.87501H1.0835V8.12501H3.25016L5.9585 10.2917V2.70834Z" stroke="white"
                  strokeLinecap="round" strokeLinejoin="round" />
                <path
                  d="M10.3296 2.67041C11.345 3.68619 11.9155 5.06369 11.9155 6.49999C11.9155 7.9363 11.345 9.3138 10.3296 10.3296M8.41748 4.58249C8.92521 5.09038 9.21044 5.77913 9.21044 6.49729C9.21044 7.21544 8.92521 7.90419 8.41748 8.41208"
                  stroke="white" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className='volume-bar-wrapper'>
                <input type="range" min="0" max="1" step="0.01" value={videoRef.current?.volume} onChange={(e) => { videoRef.current.volume = e.target.value; }} />
              </div>
            </button> */}
            <button className="enlarge-btn-js" onClick={handleEnlarge}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5.33333 2H3.33333C2.97971 2 2.64057 2.14048 2.39052 2.39052C2.14048 2.64057 2 2.97971 2 3.33333V5.33333M14 5.33333V3.33333C14 2.97971 13.8595 2.64057 13.6095 2.39052C13.3594 2.14048 13.0203 2 12.6667 2H10.6667M10.6667 14H12.6667C13.0203 14 13.3594 13.8595 13.6095 13.6095C13.8595 13.3594 14 13.0203 14 12.6667V10.6667M2 10.6667V12.6667C2 13.0203 2.14048 13.3594 2.39052 13.6095C2.64057 13.8595 2.97971 14 3.33333 14H5.33333"
                  stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div>
        {/* {Object.keys(srcList)?.map((lang, i) => (
          <p key={i}>
            <button onClick={() => handleLangChange(lang, currentTime)} target="_blank" rel="noopener noreferrer">{lang}</button>
          </p>
        ))} */}
      </div>
      {!displayQuiz && progress > 89 && (
        <div className='btn-container'>
          <button onClick={() => { handleNextBtnClick(currentTime) }}>Next</button>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;