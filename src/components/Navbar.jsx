import React, { useEffect, useState } from "react";
import { FaBars, FaInstagram, FaFacebook } from "react-icons/fa";
import { Link } from "react-scroll"; // Using react-scroll for smooth scrolling

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Handling body overflow when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        {/* Name "Nichola Zhang" aligned to the left */}
        <div className="text-white text-xl font-semibold">Nichola Zhang</div>

        {/* Desktop Navigation - Centered */}
        <ul className="hidden md:flex gap-7 text-white mx-auto">
          <Link
            to="home"
            smooth={true}
            className="cursor-pointer hover:text-gray-400"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            className="cursor-pointer hover:text-gray-400"
          >
            About
          </Link>
          <Link
            to="books"
            smooth={true}
            className="cursor-pointer hover:text-gray-400"
          >
            Books
          </Link>
          <Link
            to="extras"
            smooth={true}
            className="cursor-pointer hover:text-gray-400"
          >
            Extras
          </Link>
        </ul>

        {/* Social Media Icons (Desktop only) */}
        <div className="hidden md:flex gap-4 ml-6">
          <button className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
            <FaInstagram size={20} className="text-white" />
          </button>
          <button className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
            <FaFacebook size={20} className="text-white" />
          </button>
        </div>

        {/* Mobile menu icon */}
        <FaBars
          onClick={() => setShowMobileMenu(true)}
          className="md:hidden text-white cursor-pointer"
          size={24}
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          showMobileMenu ? "fixed w-full" : "h-0 w-0"
        } right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}
      >
        {/* Mobile Links */}
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
          <Link
            onClick={() => setShowMobileMenu(false)}
            to="home"
            smooth={true}
            className=" cursor-pointer px-4 py-2 rounded-full inline-block"
          >
            Home
          </Link>
          <Link
            onClick={() => setShowMobileMenu(false)}
            to="about"
            smooth={true}
            className=" cursor-pointer px-4 py-2 rounded-full inline-block"
          >
            About
          </Link>
          <Link
            onClick={() => setShowMobileMenu(false)}
            to="books"
            smooth={true}
            className=" cursor-pointer px-4 py-2 rounded-full inline-block"
          >
            Books
          </Link>
          <Link
            onClick={() => setShowMobileMenu(false)}
            to="extras"
            smooth={true}
            className=" cursor-pointer px-4 py-2 rounded-full inline-block"
          >
            Extras
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
