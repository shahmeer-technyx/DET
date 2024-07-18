"use client"

import Hero from "@/components/Hero/Hero";
import Header from "@/components/organisms/Header/Header";
import gsap from 'gsap';

const Home = () => {

  var tl = gsap.timeline({ duration: 1, ease: "circ.out" })

  return (
    <>
      <Header tl={tl} />
      <Hero tl={tl} />
    </>
  )
}

export default Home;