"use client";

import React, { useRef, useState, useEffect, useCallback } from 'react';
import videoStyles from '../styles/VideoPlayer.module.css';

const VideoPlayer = ({ displayQuiz = false, playFrom = 0, videoLang = 'en', srcList = {}, title = "", handleNext, handleLangChange }) => {
  const videoRef = useRef(null);
  const [duration, setDuration] = useState(null);
  const [currentTime, setCurrentTime] = useState(playFrom);

  const progress = (Number(currentTime?.toFixed(2)) / Number(duration?.toFixed(2)) * 100).toFixed();

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      const handleLoadedMetadata = () => {
        setDuration(videoElement.duration);
      };

      videoElement.addEventListener('loadedmetadata', handleLoadedMetadata);
      videoElement.load();
      videoElement.play();
      videoElement.currentTime = playFrom;

      return () => {
        videoElement?.removeEventListener('loadedmetadata', handleLoadedMetadata);
      };
    }
  }, [videoLang, srcList, displayQuiz]);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      const handleTimeUpdate = () => {
        setCurrentTime(videoElement.currentTime);
      }

      videoElement.addEventListener('timeupdate', handleTimeUpdate);

      return () => {
        videoElement.removeEventListener('timeupdate', handleTimeUpdate);
      }
    }
  }, [])

  const handleSeek = (event) => {
    const seekTo = event.target.value / 100 * duration;
    setCurrentTime(seekTo);
    if (videoRef.current) {
      videoRef.current.currentTime = seekTo;
    }
  };

  const handleNextOnClick = (currentTime) => {
    videoRef.current.pause();
    // setTimeout(() => {
    //   handleNext(currentTime);
    // }, 1000);
    handleNext(currentTime);
  };

  return (
    <div className={videoStyles["video-container"]}>
      <h2>{title}</h2>
      <video
        ref={videoRef}
        className={videoStyles['video']}
        controls
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
        <div className={videoStyles['btn-container']}>
          <button onClick={() => { handleNextOnClick(currentTime) }}>Next</button>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;