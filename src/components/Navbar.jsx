import React, { useEffect, useState } from "react";
import logo from "../assets/bean_Scene.png";
import menu from "../assets/menu_icon.svg";
import cross from "../assets/cross_icon.svg";

function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  return (
    <div    style={{ fontFamily: "Playpen Sans" }} className="absolute top-3 left-0 w-full z-5">
      <div className="absolute flex-shrink-0 top-3 items-start ml-20">
        <img src={logo} alt="Logo" className="w-30" />
      </div>
      <div className="container mx-auto flex justify-between items-center  px-6 md:px-5 lg:px-32 bg-transparent mb-20">
        {/* Logo on the left */}

        {/* Navigation Menu - Centered */}
        <ul className="hidden md:flex justify-center flex-grow gap-15 mt-5 text-white text-lg ">
          <a href="#Home" className="cursor-pointer hover:text-[#F9C06A] hover:underline">
            Home
          </a>
          <a href="#menu" className="cursor-pointer hover:text-[#F9C06A] hover:underline">
            Menu
          </a>
          <a href="#about" className="cursor-pointer hover:text-[#F9C06A] hover:underline">
            About
          </a>

          <a href="#contact" className="cursor-pointer hover:text-[#F9C06A] hover:underline">
            Contact Us
          </a>
        </ul>

        {/* Mobile Menu Icon */}
        <img
          onClick={() => setShowMobileMenu(true)}
          src={menu}
          alt="menu icon"
          className="md:hidden w-7 cursor-pointer"
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          showMobileMenu ? "fixed w-full" : "h-0 w-0"
        } right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}
      >
        <div className="flex justify-end p-6 cursor-pointer">
          <img
            onClick={() => setShowMobileMenu(false)}
            src={cross}
            alt="close icon"
            className="w-6"
          />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#home"
            className="px-4 py-2 rounded-full inline-block"
          >
            Home
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#about"
            className="px-4 py-2 rounded-full inline-block"
          >
            About
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#Menu"
            className="px-4 py-2 rounded-full inline-block"
          >
            Menu
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#contact"
            className="px-4 py-2 rounded-full inline-block"
          >
            Contact Us
          </a>
        </ul>
      </div>

      {/* Sign in and Sign up buttons - Justified to the right */}
      <div className="hidden md:flex absolute flex-shrink-0 top-3 gap-5 right-25">
        <button className="text-amber-50 underline cursor-pointer py-1 px-2 rounded-full">
          Sign in
        </button>
        <button
          style={{ backgroundColor: "#F9C06A" }}
          className="bg-white px-8 py-2 rounded-full cursor-pointer"
        >
          Sign up
        </button>
      </div>
    </div>
  );
}

export default Navbar;
