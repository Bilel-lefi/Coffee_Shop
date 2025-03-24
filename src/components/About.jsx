import React from "react";
import hero from "../assets/about.png";
import Navbar from "./Navbar";

function About() {
  return (
    <>
     
      <div className="flex flex-col md:flex-row min-h-screen items-center justify-center p-8">
        <img
          src={hero}
          alt="hero images"
          className="w-full md:w-2/5 max-w-xs mb-8 md:mb-0" // L'image occupe toute la largeur sur petit écran et 40% sur grand écran
        />
        <div className="text-center md:text-left text-2xl text-amber-50 leading-10 md:ml-35">
          Nicola Zhang spends most of her time dreaming up fantasy worlds, which
          is much more fun than running, hiking, or doing anything that requires
          breaking a sweat. She lives in Melbourne with her husband, a cat who
          believes he rules the household, and a dog who is blissfully unaware
          that he does not. When she isn’t writing, Nicola can be found watching
          films, baking cakes, or indulging in too much takeout.
        </div>
      </div>
    </>
  );
}

export default About;
