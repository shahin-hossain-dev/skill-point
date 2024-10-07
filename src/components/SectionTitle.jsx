import React from "react";

const SectionTitle = ({ title, subtitle, description }) => {
  return (
    <div className="flex px-5 flex-col gap-3 justify-center text-center items-center mt-12 lg:mt-16">
      <h4 className="text-primary-color font-medium">{title}</h4>
      <h2 className="font-bold text-2xl lg:text-3xl text-secondary-color">
        {subtitle}
      </h2>
      <p>{description}</p>
    </div>
  );
};

export default SectionTitle;
