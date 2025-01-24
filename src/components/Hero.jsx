import React from "react";
import Search from "./Search";
import HeroText from "./HeroText";

const Hero = () => {
  return (
    <section className="bg-sky-600 text-white py-40">
      <HeroText />
      <Search />
    </section>
  );
};

export default Hero;
