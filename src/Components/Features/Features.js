import React from "react";
const Item = (props) => {
  return (
    <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
      <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
        <div className="flex items-center space-x-2">
          <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
            {props.number}
          </div>
          <h3 className="text-base font-bold md:mb-4 md:hidden">
            {props.heading}
          </h3>
        </div>
      </div>
      <div>
        <h3 className="hidden mb-4 text-lg font-bold md:block">
          {props.heading}
        </h3>
        <p className="text-darkGrayishBlue">{props.paragraph}</p>
      </div>
    </div>
  );
};
const Features = () => {
  return (
    <section name="features" id="features" className="font-Vietnam">
      <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-0 md:flex-row">
        <div className="flex flex-col space-y-12 md:w-1/2">
          <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
            What's different about Manage?
          </h2>
          <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>
        {/*Numberd List*/}
        <div className="flex flex-col space-y-8 md:w-1/2">
          <Item
            number="01"
            heading="Track company-wide progress"
            paragraph="See how your day-to-day tasks fit into the wider vision. Go from
                tracking progress at the milestone level all the way down to the
                smallest of details. Never lose sight of the bigger picture
                again."
          />
          <Item
            number="02"
            heading="Advanced built-in reports"
            paragraph="Set internal delivery estimates and track progress toward
                company goals. Our customisable dashboard helps you build out
                the reports you need to keep key stakeholders informed."
          />
          <Item
            number="03"
            heading="Everything you need in one place"
            paragraph="Stop jumping from one service to another to communicate, store
                files, track tasks and share documents. Manage offers an
                all-in-one team productivity solution."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
