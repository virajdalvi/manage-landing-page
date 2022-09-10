import React from "react";
import heroImage from "../../images/illustration-intro.svg";
const HeroSection = () => {
  return (
    <section id="hero" className="font-Vietnam">
      <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
        {/*Left item*/}
        <div className="flex flex-col mb-32 space-y-10 md:w-1/2">
          <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
            Bring everyone together to build better products
          </h1>
          <p class="max-w-sm text-center text-darkGrayishBlue md:text-left">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <div className="flex justify-center md:justify-start">
            <a
              href="#"
              className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
            >
              Get Started
            </a>
          </div>
        </div>
        <div className="md:w-1/2">
          <img src={heroImage} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
