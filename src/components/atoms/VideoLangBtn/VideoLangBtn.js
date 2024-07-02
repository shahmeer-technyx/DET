"use client";

import { useState } from "react";
import useStyles from "./style";

const VideoLangBtn = ({ videoLang, srcList, handleLangChange }) => {
  const [showPopup, setShowPopup] = useState(false);
  const classes = useStyles();

  return (
    <button onClick={() => setShowPopup(p => !p)} className={classes.VideoLangBtn}>
      {/* <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1.74114 12.3381H0.625L3.85322 3.125H4.95219L8.18042 12.3381H7.06428L4.43705 4.58253H4.36837L1.74114 12.3381ZM2.15325 8.7392H6.65216V9.72889H2.15325V8.7392Z"
          fill="white" />
        <path
          d="M11.3528 12.5C10.935 12.5 10.5558 12.4175 10.2152 12.2526C9.87466 12.0846 9.60421 11.8432 9.40388 11.5283C9.20355 11.2104 9.10338 10.8265 9.10338 10.3767C9.10338 9.98081 9.17779 9.65991 9.32661 9.41399C9.47543 9.16507 9.67433 8.97013 9.92331 8.82917C10.1723 8.68822 10.447 8.58325 10.7475 8.51428C11.0509 8.4423 11.3557 8.38532 11.6619 8.34333C12.0626 8.28935 12.3874 8.24886 12.6364 8.22187C12.8882 8.19188 13.0714 8.14239 13.1859 8.07342C13.3032 8.00444 13.3619 7.88448 13.3619 7.71353V7.67754C13.3619 7.23369 13.246 6.8888 13.0142 6.64287C12.7852 6.39695 12.4375 6.27399 11.971 6.27399C11.4873 6.27399 11.1081 6.38496 10.8334 6.60689C10.5587 6.82881 10.3655 7.06574 10.2539 7.31766L9.29226 6.95777C9.46398 6.53791 9.69293 6.21101 9.97912 5.97709C10.2682 5.74016 10.583 5.57522 10.9235 5.48225C11.267 5.38628 11.6047 5.33829 11.9367 5.33829C12.1484 5.33829 12.3917 5.36528 12.6664 5.41927C12.9441 5.47025 13.2116 5.57671 13.4692 5.73866C13.7296 5.90061 13.9457 6.14503 14.1174 6.47193C14.2891 6.79882 14.375 7.23668 14.375 7.78551V12.3381H13.3619V11.4024H13.3104C13.2417 11.5523 13.1272 11.7128 12.9669 11.8837C12.8067 12.0546 12.5935 12.2001 12.3273 12.3201C12.0612 12.44 11.7363 12.5 11.3528 12.5ZM11.5074 11.5463C11.908 11.5463 12.2457 11.4638 12.5205 11.2989C12.7981 11.1339 13.007 10.921 13.1472 10.6601C13.2903 10.3992 13.3619 10.1248 13.3619 9.83685V8.86516C13.319 8.91915 13.2245 8.96863 13.0786 9.01362C12.9355 9.0556 12.7695 9.09309 12.5806 9.12608C12.3946 9.15607 12.2128 9.18306 12.0354 9.20705C11.8608 9.22805 11.7192 9.24604 11.6104 9.26104C11.3471 9.29702 11.101 9.35551 10.872 9.43648C10.6459 9.51445 10.4628 9.63292 10.3225 9.79187C10.1852 9.94782 10.1165 10.1607 10.1165 10.4307C10.1165 10.7995 10.2467 11.0785 10.5071 11.2674C10.7704 11.4533 11.1038 11.5463 11.5074 11.5463Z"
          fill="white" />
      </svg> */}<span className="lang-name">{videoLang}</span>
      {showPopup && (
        <div className="popup">
          {Object.keys(srcList)?.map((lang, i) => (
            <a className={`lang-option ${lang === videoLang ? 'active' : ''}`} key={i} onClick={() => handleLangChange(lang)} target="_blank" rel="noopener noreferrer">{lang}</a>
          ))}
        </div>
      )}
    </button>
  )
}
export default VideoLangBtn;