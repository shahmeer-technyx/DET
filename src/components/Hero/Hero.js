"use client";

import useStyles from "./style";
import Image from "next/image";
import heroOverlay from "@/assets/hero.png";

const Hero = () => {
  const classes = useStyles();
  
  return (
    <div className={classes.Hero}>
      <Image src={heroOverlay} alt="logo" />
      <h1>Hero</h1>
      <div className="heading-subtitle"></div>
      <div className="hero-banner"></div>
      <div className="ai-assistant"></div>
    </div>
  )
}

export default Hero;