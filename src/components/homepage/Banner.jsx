import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const Banner = () => {
  return (
    <div className="-mt-4 relative -z-10">
      {/* ------------banner title------------ */}
      <div className="absolute top-1/2 -translate-y-1/2 lg:-translate-y-2/3 left-8 lg:left-14">
        <h1
          style={{ lineHeight: "1.2" }}
          className="text-2xl md:text-4xl  lg:text-5xl font-bold text-secondary-color"
        >
          {" "}
          <span className="text-primary-color">Upgrade</span> Your Skill <br />{" "}
          for Better <span className="text-primary-color">Future</span>{" "}
        </h1>
        <Button className=" text-primary-color mt-4 bg-transparent border border-primary-color hover:bg-primary-color hover:text-white">
          Get Started
        </Button>
      </div>
      {/*----------- banner image----------------*/}
      <Image
        src="/assets/banner.png"
        width={1900}
        height={600}
        alt="banner image"
        className=" "
      />
    </div>
  );
};

export default Banner;
