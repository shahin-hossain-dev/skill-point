"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaRegUser } from "react-icons/fa";
import { Button } from "./ui/button";
const CourseCard = ({ course }) => {
  const { id, title, description, duration, price, enrolled, rating, imgURL } =
    course;
  return (
    <Card className="shadow-lg min-h-full">
      <CardHeader>
        <Image
          src={imgURL}
          alt={title}
          width={300}
          height={200}
          className="w-full"
        />
        <CardTitle className="text-base lg:text-lg">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2 justify-between">
          <div className="flex gap-2 text-sm">
            <span>{`(${rating})`}</span>
            <Rating style={{ maxWidth: 90 }} value={rating} />
          </div>
          <div className="flex gap-2 items-baseline text-sm">
            <span>
              <FaRegUser />
            </span>
            <span>{enrolled}</span>
          </div>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <span className="font-semibold text-primary-color text-lg lg:text-2xl">
            ${price}
          </span>
          <Button className="bg-primary-color  text-white hover:bg-[#9E77ED]">
            Enroll
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
