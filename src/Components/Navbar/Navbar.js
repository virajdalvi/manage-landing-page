import React from "react";
import logo from "../../images/logo.svg";
import "./Navbar.css";
import { Link } from "react-scroll";
const toggleClass = () => {
  const btn = document.getElementById("menu-btn");
  const nav = document.getElementById("menu");

  btn.classList.toggle("open");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
};

const Navbar = () => {
  return (
    <nav className="realtive container mx-auto p-6 font-Vietnam">
      <div className="flex items-center justify-between">
        <div className="pt-2">
          <img src={logo} alt="logo" />
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="" className="font-medium hover:text-darkGrayishBlue">
            <Link to="home" spy={true} smooth={true} duration={500}>
              Home
            </Link>
          </a>
          <a href="" className="font-medium hover:text-darkGrayishBlue">
            <Link to="features" spy={true} smooth={true} duration={500}>
              Features
            </Link>
          </a>
          <a href="" className="font-medium hover:text-darkGrayishBlue">
            <Link to="testimonials" spy={true} smooth={true} duration={500}>
              Testimonials
            </Link>
          </a>
          <a href="" className="font-medium hover:text-darkGrayishBlue">
            <Link to="cta" spy={true} smooth={true} duration={500}>
              Contact Us
            </Link>
          </a>
        </div>
        <a
          href="#"
          className="hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
        >
          Get Started
        </a>
        {/*Hamburger Icon*/}
        <button
          id="menu-btn"
          className="block hamburger md:hidden focus:outline-none"
          onClick={toggleClass}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
      {/*Mobile Menu*/}
      <div className="md:hidden">
        <menu
          id="menu"
          class="absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
        >
          <a href="" className="font-medium hover:text-darkGrayishBlue">
            <Link to="home" spy={true} smooth={true} duration={500}>
              Home
            </Link>
          </a>
          <a href="" className="font-medium hover:text-darkGrayishBlue">
            <Link to="features" spy={true} smooth={true} duration={500}>
              Features
            </Link>
          </a>
          <a href="" className="font-medium hover:text-darkGrayishBlue">
            <Link to="testimonials" spy={true} smooth={true} duration={500}>
              Testimonials
            </Link>
          </a>
          <a href="" className="font-medium hover:text-darkGrayishBlue">
            <Link to="cta" spy={true} smooth={true} duration={500}>
              Contact Us
            </Link>
          </a>
        </menu>
      </div>
    </nav>
  );
};

export default Navbar;
