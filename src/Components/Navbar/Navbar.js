import React from "react";
import logo from "../../images/logo.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="realtive container mx-auto p-6 font-Vietnam">
      <div className="flex items-center justify-between">
        <div className="pt-2">
          <img src={logo} alt="logo" />
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="font-medium hover:text-darkGrayishBlue">
            Pricing
          </a>
          <a href="#" className="font-medium hover:text-darkGrayishBlue">
            Product
          </a>
          <a href="#" className="font-medium hover:text-darkGrayishBlue">
            About Us
          </a>
          <a href="#" className="font-medium hover:text-darkGrayishBlue">
            Careers
          </a>
          <a href="#" className="font-medium hover:text-darkGrayishBlue">
            Community
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
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
