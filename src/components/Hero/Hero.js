"use client";

import useStyles from "./style";
import Image from "next/image";
import heroOverlay from "@/assets/hero.png";
import dropdwonAlt from "@/assets/dropdown_alt.svg";
import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";

const Hero = ({tl, duration, ease}) => {
  const classes = useStyles();
  const heroRef = useRef();
  const headingRef = useRef();
  const testRef = useRef();
  
  useGSAP(() => {
    tl
      .fromTo('.heading-subtitle-bg', { height: 0 }, { duration: duration, height: '100%', ease: ease }, "0")
      .fromTo('.text-animate-1', { yPercent: 200 }, { duration: duration, yPercent: 0, ease: ease }, "0")
      .fromTo('.text-animate-2', { opacity: 0, xPercent: -15 }, { duration: duration, opacity: 1, xPercent: 0, ease: ease }, "<")
      .fromTo('.img-animate img', { scale: 1.2 }, { duration: duration, scale: 1, ease: ease }, "<");
  }, { scope: heroRef })

  useEffect(() => {
  }, [])

  return (
    <div ref={heroRef} className={classes.Hero}>
      <div className="heading-subtitle">
        <div className="heading-subtitle-bg"></div>
        <div className="heading-wrapper">

          <div className="main-heading-wrapper">
            <div className="line-wrapper"><h1 className="text-animate-1 heading">Your Journey to </h1></div>
            <div className="line-wrapper"><h1 className="text-animate-1 heading highlight">Entrepreneurship</h1></div>
            <div className="line-wrapper"><h1 className="text-animate-1 heading"> Starts Here</h1></div>
            {/* <span>Your Journey to <span className="highlight">Entrepreneurship</span> Starts Here</span> */}
          </div>
          <h3 className="text-animate-2 subtitle">
            Welcome to the Dubai SME Hub. AI assisted education designed to help you reach your goals.
          </h3>
        </div>
      </div>
      <div className="img-animate hero-banner-part-1">
        <Image src={heroOverlay} alt="logo" />
      </div>
      <div className="img-animate hero-banner-part-2">
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