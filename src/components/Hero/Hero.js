"use client";

import useStyles from "./style";
import Image from "next/image";
import heroOverlay from "@/assets/hero.png";
import dropdwonAlt from "@/assets/dropdown_alt.svg";

const Hero = () => {
  const classes = useStyles();

  return (
    <div className={classes.Hero}>
      <div className="heading-subtitle">
        <div className="heading-wrapper">

          <h1 className="heading">
            Your Journey to <span className="highlight">Entrepreneurship</span> Starts Here
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