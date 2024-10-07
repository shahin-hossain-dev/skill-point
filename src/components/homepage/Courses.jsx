"use client";
import CourseCard from "../CourseCard";
import SectionTitle from "../SectionTitle";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { useState, useEffect } from "react";

const Courses = () => {
  const [smallSlide, setSmallSlide] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", () => {
      const width = window.innerWidth;
      if (width < 1024) {
        setSmallSlide(true);
      } else {
        setSmallSlide(false);
      }
    });
  }, []);

  return (
    <div>
      <SectionTitle title={"Our Courses"} subtitle={"Our Most Popular Class"} />
      <div className="mt-6">
        <div>
          <Swiper
            style={{
              "--swiper-navigation-color": "#7F56D9",
              "--swiper-navigation-size": "30px",
            }}
            slidesPerView={smallSlide ? 2 : 4}
            spaceBetween={20}
            // centeredSlides={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className={""}
          >
            {courses.map((course) => (
              <SwiperSlide key={course.id}>
                <CourseCard course={course}></CourseCard>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Courses;

const courses = [
  {
    id: "1",
    title: "Figma UI UX Design",
    description:
      "Use Figma to get a job in UI Design, User Interface, User Experience design.",
    rating: 5,
    enrolled: 50,
    price: 55,
    imgURL: "/assets/images/image-1.png",
    duration: {
      hour: 5,
      minute: 50,
    },
  },
  {
    id: "2",
    title: "MERN Stack Development",
    description:
      "Design Web Sites and Mobile Apps that Your Users Love and Return to Again.",
    rating: 5,
    enrolled: 50,
    price: 55,
    imgURL: "/assets/images/image-2.png",
    duration: {
      hour: 5,
      minute: 50,
    },
  },
  {
    id: "3",
    title: "Digital Marketing",
    description:
      "Use Figma to get a job in UI Design, User Interface, User Experience design.",
    rating: 4,
    enrolled: 50,
    price: 55,
    imgURL: "/assets/images/image-3.png",
    duration: {
      hour: 5,
      minute: 50,
    },
  },
  {
    id: "4",
    title: "Speaking English Course",
    description:
      "Use Figma to get a job in UI Design, User Interface, User Experience design.",
    rating: 5,
    enrolled: 50,
    price: 55,
    imgURL: "/assets/images/image-4.png",
    duration: {
      hour: 5,
      minute: 50,
    },
  },
  {
    id: "5",
    title: "AutoCAD Design",
    description:
      "Use Figma to get a job in UI Design, User Interface, User Experience design.",
    rating: 4,
    enrolled: 50,
    price: 55,
    imgURL: "/assets/images/image-5.png",
    duration: {
      hour: 5,
      minute: 50,
    },
  },
];
