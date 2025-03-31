import React from "react";
import { ChevronUpIcon } from "@heroicons/react/outline";
import a from "../assets/coffee_image.png";
import b from "../assets/Coffee.png";
import c from "../assets/coffecup2.png";
import d from "../assets/blast.png";
import Navbar from "./Navbar";
function Home() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div
        className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden"
        style={{
          backgroundImage: `url(${a})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        id="home"
      >
        <Navbar />
        <div
          style={{ fontFamily: "Playpen Sans" }}
          className="flex flex-col items-start ml-32"
        >
          <h2 className="text-xl ml-7  text-amber-50 mb-7">
            We've got your morning covered with
          </h2>
          <img src={b} alt="" className="w-100 h-auto" />
          <h2 className="text-xl ml-7  text-amber-50 mb-7">
            It is best to start your day with a cup of coffee.
            <br />
            Discover the best flavours coffee you will ever have.
            <br />
            We provide the best for our customers.
          </h2>
          <div className="">
            <button
              style={{ backgroundColor: "#F9C06A" }}
              className="mx-7 py-1 px-2 black cursor-pointer bg-customYellow text-black rounded-3xl"
            >
              Order Now!
            </button>
          </div>
        </div>
      </div>
      <div className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden">
        <div className="flex flex-col w-full pl-30 gap-3">
          <h2
            style={{ color: "#603809", fontFamily: "Playpen Sans" }}
            className="text-5xl mb-4"
          >
            Discover the best coffee
          </h2>
          <h3 className="text-lg font-bold mb-6 mr-25">
            Bean Scene is a coffee shop that provides you with quality coffee
            that helps boost your productivity and helps build your mood. Having
            a cup of coffee is good, but having a cup of real coffee is greater.
            There is no doubt that you will enjoy this coffee more than others
            you have ever tasted.
          </h3>
          <div>
            <button
              style={{ backgroundColor: "#F9C06A", cursor: "pointer" }}
              className="bg-white w-40 px-8 py-2 rounded-full"
            >
              Learn More
            </button>
          </div>
        </div>

        <div className="w-full md:w-2/3 max-w-md mb-8 md:mb-0 mr-20">
          <img src={c} alt="Coffee" />
        </div>
        <div className="absolute flex-shrink-0 mt-100 items-start w-full md:w-2/6 max-w-md mb-8 md:mb-0 ">
          <img src={d} alt="blast" />
        </div>
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 py-2 px-6 bg-[#F9C06A] text-white rounded-full shadow-lg hover:bg-[#f9a32b] transition"
        >
        <ChevronUpIcon className="h-6 w-6" />
        </button>
      </div>
    </>
  );
}

export default Home;
