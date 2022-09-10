import React from "react";
import Test1 from "../../images/test1.png";
import Test2 from "../../images/test2.png";
import Test3 from "../../images/test3.png";
const TestItem = ({ image, name, review, property }) => {
  return (
    <div className={property}>
      <img src={image} className="w-16 -mt-14" alt="" />
      <h5 className="text-lg font-bold">{name}</h5>
      <p className="text-sm text-darkGrayishBlue">{review}</p>
    </div>
  );
};
const Testimonials = () => {
  return (
    <section id="testimonials" className="font-Vietnam">
      <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
        <h2 className="text-4xl font-bold text-center">
          What's Different About Manage?
        </h2>

        <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
          <TestItem
            name={"Ali Bravo"}
            image={Test1}
            review={
              "Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated."
            }
            property="flex flex-col items-center p-6 space-y-6 rounded-lg bg-brightRedSupLight md:flex md:w-1/3"
          />
          <TestItem
            name={"Anisha Li"}
            image={Test2}
            review={
              "We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused."
            }
            property="hidden flex flex-col items-center p-6 space-y-6 rounded-lg bg-brightRedSupLight md:flex md:w-1/3"
          />
          <TestItem
            name={"Richard Watts"}
            image={Test3}
            review={
              "Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated."
            }
            property="hidden flex flex-col items-center p-6 space-y-6 rounded-lg bg-brightRedSupLight md:flex md:w-1/3"
          />
        </div>
        <div className="my-16">
          <a
            href="#"
            class="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
