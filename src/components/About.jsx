import React from "react";
import a from "../assets/coffe1.png";
import b from "../assets/coffe2.png";
import c from "../assets/coffe3.png";
import d from "../assets/coffe4.png";
import e from "../assets/coffee_blast.png";

function About() {
  return (
    <div className="min-h-screen flex flex-col items-center p-8" id="about">
           <div className="absolute  right-0 mt-[-150px]  items-end w-full md:max-w-2/7 max-w-md  md:mb-0">
          <img src={e} alt="coffee image" />
        </div>
      {/* Title Section */}
      <div className="text-center mb-6 relative">
        <h1 className="text-4xl font-bold text-[#603809]">
          Why are we different?
        </h1>
        <h2 className="text-lg text-[#707070] mt-2">
          We don’t just make your coffee, we make your day!
        </h2>
      </div>

      {/* Coffee Menu */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl">
        {AboutItems.map((item, index) => (
          <div
            key={index}
            style={{ backgroundColor: "F9C06A" }}
            className="shadow-lg overflow-hidden text-center border border-[#fbac3d] bg-[#FFF9F1]"
          >
            <div className="flex justify-center mt-3">
              <img src={item.image} alt="images" className="mx-auto w-25 h-25" />
            </div>
            <h3
              style={{ fontFamily: "Playfair Display", fontSize: "28px" }}
              className="text-xl font-semibold mt-4 text-[#603809]"
            >
              {item.name}
            </h3>
            <p
              style={{ fontFamily: "Playfair Display", fontSize: "20px" }}
              className="text-center text-lg font-bold mt-2 text-[#707070]"
            >
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center mb-6">
        <h2
          style={{ fontFamily: "Playfair Display", fontSize: "20px" }}
          className="text-lg font-bold text-[#707070] mt-4"
        >
          Great ideas start with great coffee, Let's help you achieve that
        </h2>
        <h2 className="text-4xl font-bold text-[#603809] mt-1">
          Get started today.
        </h2>
        <button
          style={{ backgroundColor: "#F9C06A" }}
          className="mx-2 py-1.5 px-8 cursor-pointer bg-customYellow text-black rounded-3xl mt-4"
        >
          Join Us
        </button>
      </div>
    </div>
  );
}

const AboutItems = [
  {
    image: a,
    name: "Supreme Beans",
    description: "Beans that provide great taste",
  },
  {
    image: b,
    name: "High Quality",
    description: "We provide the highest quality",
  },
  {
    image: c,
    name: "Extraordinary",
    description: "Coffee like you have never tasted",
  },
  {
    image: d,
    name: "Affordable Price",
    description: "Our Coffee prices are easy to afford",
  },
];

export default About;
