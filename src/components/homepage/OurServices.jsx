import React from "react";
import SectionTitle from "../SectionTitle";
import Image from "next/image";
import { Button } from "../ui/button";
import { FaAngleRight } from "react-icons/fa6";

const OurServices = () => {
  return (
    <div>
      <SectionTitle
        title={"Our Service"}
        subtitle={"Fostering a playful & engaging learning environment"}
      />
      <div>
        <div className="flex gap-5 flex-col justify-between md:flex-row mt-4 lg:mt-6">
          {services.map((service, idx) => (
            <div key={idx} className="flex-1">
              <div className="p-5 rounded-md hover:bg-primary-color hover:text-white shadow-2xl ">
                <div className="flex gap-3 items-center">
                  <div className="w-[30px] h-[30px]  flex justify-center items-center rounded-md  bg-white">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={20}
                      height={20}
                    />
                  </div>
                  <h3 className="font-bold text-xl">{service.title}</h3>
                </div>
                <p className="mt-4">{service.description}</p>
                <button className="group text-primary-color hover:group-[.icon]:text-black flex items-center gap-2 bg-white px-3 font-medium py-1 rounded-md  mt-4">
                  <span>Learn More</span>{" "}
                  <FaAngleRight className="icon group-hover:translate-x-1 duration-200" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;

const services = [
  {
    image: "/assets/icons/icon-1.png",
    title: "UI/UX Design",
    description: "Lessons on design that cover the most recent developments.",
  },
  {
    image: "/assets/icons/icon-2.png",
    title: "Web Development",
    description:
      "Classes in development that cover the most recent advancements in web.",
  },
  {
    image: "/assets/icons/icon-3.png",
    title: "Digital Marketing",
    description:
      "Marketing courses that cover the most recent marketing trends.",
  },
];
