"use client";

import useStyles from "./style";
import Image from "next/image";
import heroOverlay from "@/assets/hero.png";
import dropdwonAlt from "@/assets/dropdown_alt.svg";
import { useEffect, useRef } from "react";

const Hero = () => {
  const classes = useStyles();
  const headingRef = useRef();

  useEffect(() => {
    applyTextAnim(headingRef.current);
    let lines = getNumberOfLines(headingRef.current);
    // console.log('lines', lines)
  }, [])

  function getNumberOfLines(element) {
    let height = element.getBoundingClientRect().height;
    let styles = window.getComputedStyle(element);
    let lineHeight = parseFloat(styles.lineHeight)

    if (!lineHeight) {
      lineHeight = Number(styles.fontSize.slice(0, styles.fontSize.length - 2));
    }
    return Math.floor(height / lineHeight);
  }

  function getContentWithoutTag(innerHTMl) {
    let content = "";
    let isTag = false;
    // console.log(innerHTMl.length)
    for (let i = 0; i < innerHTMl.length; i++) {
      if (innerHTMl[i] === "<") { isTag = true; }
      if (!isTag) { content += innerHTMl[i] }
      if (isTag && innerHTMl[i] === ">") { isTag = false}
    }
    return content;
  }

  function applyTextAnim(element) {
    // console.log(element.getBoundingClientRect().width);
    let content = getContentWithoutTag(element.innerHTML);
    console.log(content);

  }

  return (
    <div className={classes.Hero}>
      <div className="heading-subtitle">
        <div className="heading-wrapper">

          <h1 ref={headingRef} className="heading js-heading">
            Your Journey to <span className="highlight">Entrepreneurship</span> Starts Here
            {/* <span>Your Journey to <span className="highlight">Entrepreneurship</span> Starts Here</span> */}
          </h1>
          <h3 className="subtitle">
            Welcome to the Dubai SME Hub. AI assisted education designed to help you reach your goals.
          </h3>
        </div>
      </div>
      <div className="hero-banner-part-1">
        <Image src={heroOverlay} alt="logo" />
      </div>
      <div className="hero-banner-part-2">
        <Image src={heroOverlay} alt="logo" />
      </div>
      <div className="ai-assistant">
        <div className="ai-assistant-wrapper">
          <div className="text text-1">
            <span>I am a </span>
            <div className="input dropdown">
              <span>solopreneur</span>
              <Image className="dropdown-icon" src={dropdwonAlt} alt="dropdown icon" />
            </div>
            <span> looking</span>
          </div>
          <div className="text text-2">
            <span>to </span>
            <div className="input dropdown">expand across the region...</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;