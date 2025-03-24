import React, { useState } from "react";
import map from "../assets/map.png";
import Navbar from "./Navbar";

function Extras() {
  const [isFullScreen, setIsFullScreen] = useState(false);

  // Function to toggle full screen mode
  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <>
 
    <div className="flex flex-col min-h-screen items-center justify-center p-8 relative">
      {/* Fullscreen Image */}
      <img
        src={map}
        alt="map"
        className={`transition-all duration-500 ease-in-out ${
          isFullScreen
            ? "w-screen h-screen object-contain fixed top-0 left-0 z-50"
            : "w-full max-w-xs mb-8 md:mb-0"
        }`}
        onClick={toggleFullScreen} // Click on the image to toggle fullscreen
      />

      {/* Close button in fullscreen */}
      {isFullScreen && (
        <button
          className="absolute top-4 right-4 text-4xl text-white bg-black rounded-full p-2 z-60"
          onClick={toggleFullScreen}
        >
          X
        </button>
      )}

      {/* Text */}
      <div className="text-center mt-4">
        <span
          onClick={toggleFullScreen}
          className="text-lg font-bold cursor-pointer px-10 text-cyan-50 transition-colors duration-300"
        >
          Click for a high-resolution image
        </span>
      </div>
    </div>
    </>
  );
}

export default Extras;
