"use client";

import Hero from "@/components/Hero/Hero";
import Header from "@/components/organisms/Header/Header";
import gsap from 'gsap';
import CustomEase from 'gsap/CustomEase';

const duration = 1.5; // Duration
const ease =  CustomEase.create("custom", "M0,0 C0.17,0 0.286,0.085 0.32,0.115 0.394,0.18 0.47,0.3 0.5,0.5 0.53,0.703 0.641,0.851 0.678,0.887 0.703,0.912 0.794,1 1,1 "); // Ease

const Home = () => {

  const tl = gsap.timeline()

  return (
    <>
      <Header tl={tl} duration={duration} ease={ease} />
      <Hero tl={tl} duration={duration} ease={ease} />
    </>
  )
}

export default Home;