import React from "react";
import SectionTitle from "../SectionTitle";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";

const Teachers = () => {
  return (
    <div className="w-[80%] lg:w-[90%] mx-auto ">
      <SectionTitle title={"Tutors"} subtitle={"Our Dedicated Mentors"} />
      <div>
        <Carousel>
          <CarouselContent>
            {teachers.map((teacher, index) => (
              <CarouselItem
                key={teacher.id}
                className="md:basis-1/2 lg:basis-1/4"
              >
                <div className="p-1">
                  <Card>
                    <CardContent className="flex flex-col  items-center justify-center p-6">
                      <Image
                        src={teacher.imgURL}
                        alt={teacher.name}
                        height={100}
                        width={100}
                        className="rounded-full"
                      />
                      <p className="font-medium text-center">{teacher.name}</p>
                      <p className="text-[#98A2B3]">{teacher.versity}</p>
                      <p className="text-[#98A2B3]">{`(${teacher.experience} years experience)`}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Teachers;

const teachers = [
  {
    id: "1",
    name: "Farhan Sakib",
    versity: "Jahangirnagar University",
    experience: 7,
    imgURL: "/assets/teachers/image-1.jpg",
  },
  {
    id: "2",
    name: "Md. Suman Bhuiyan",
    versity: "Dhaka University",
    experience: 5,
    imgURL: "/assets/teachers/image-2.jpg",
  },
  {
    id: "3",
    name: "Tanmay Dhar",
    versity: "Dhaka University",
    experience: 4,
    imgURL: "/assets/teachers/image-3.jpg",
  },
  {
    id: "4",
    name: "Shariful Islam Avro",
    versity: "Dhaka University",
    experience: 2,
    imgURL: "/assets/teachers/image-4.jpg",
  },
  {
    id: "5",
    name: "Sajan Chakraborty",
    versity: "SUST",
    experience: 6,
    imgURL: "/assets/teachers/image-5.jpg",
  },
  {
    id: "6",
    name: "Mohammed Istiaque ",
    versity: "CU",
    experience: 9,
    imgURL: "/assets/teachers/image-6.jpg",
  },
  {
    id: "7",
    name: "Nayeem Durjoy",
    versity: "Dhaka University",
    experience: 3,
    imgURL: "/assets/teachers/image-7.jpg",
  },
];
