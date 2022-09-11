import React from "react";
import logo from "../../images/logo.svg";
import "./Navbar.css";

const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
});
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
      {/*Mobile Menu*/}
      <div className="md:hidden">
        <menu
          id="menu"
          class="absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
        >
          <a href="#">Pricing</a>
          <a href="#">Product</a>
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Community</a>
        </menu>
      </div>
    </div>
  );
};

export default Navbar;
