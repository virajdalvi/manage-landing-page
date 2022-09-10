import React from "react";
import logo from "../../images/logo-white.svg";
import facebook from "../../images/icon-facebook.svg";
import instagram from "../../images/icon-instagram.svg";
import pinterest from "../../images/icon-pinterest.svg";
import twitter from "../../images/icon-twitter.svg";
import youtube from "../../images/icon-youtube.svg";

const SocialItem = ({ image }) => {
  return (
    <a href="#">
      <img src={image} alt="" className="h-8" />
    </a>
  );
};
const Links = ({ name }) => {
  return (
    <a href="#" className="hover:text-brightRed">
      {name}
    </a>
  );
};
const Footer = () => {
  return (
    <footer className="bg-veryDarkBlue font-Vietnam">
      <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
        <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
          <div className="mx-auto my-6 text-center text-white md:hidden">
            Copyright &copy; 2022, All Rights Reserved
          </div>

          <div>
            <img src={logo} className="h-8" alt="" />
          </div>

          <div className="flex justify-center space-x-4">
            <SocialItem image={facebook} />
            <SocialItem image={youtube} />
            <SocialItem image={twitter} />
            <SocialItem image={pinterest} />
            <SocialItem image={instagram} />
          </div>
        </div>

        <div className="flex justify-around space-x-32">
          <div className="flex flex-col space-y-3 text-white">
            <Links name={"Home"} />
            <Links name={"Pricing"} />
            <Links name={"Products"} />
            <Links name={"About"} />
          </div>
          <div className="flex flex-col space-y-3 text-white">
            <Links name={"Careers"} />
            <Links name={"Community"} />
            <Links name={"Privacy Policy"} />
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <form>
            <div className="flex space-x-3">
              <input
                type="text"
                className="flex-1 px-4 rounded-full focus:outline-none"
                placeholder="Updated in your inbox"
              />
              <button className="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none">
                Go
              </button>
            </div>
          </form>
          <div className="hidden text-white md:block">
            Copyright &copy; 2022, All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
