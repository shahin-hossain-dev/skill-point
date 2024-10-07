import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { FaGlobe } from "react-icons/fa6";
import { IoCall, IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="py-10 mt-24 bg-secondary-color border-t border-neutral ">
      <div className="w-[90%] mx-auto flex flex-col text-center md:flex-wrap md:text-start md:flex-row gap-10  md:gap-10 lg:gap-5 items-center md:items-start  md:justify-between  text-white ">
        {/* footer title */}
        <aside>
          <div className="flex md:justify-start justify-center ">
            {/* logo */}
            <h2 className="text-[#B692F6] text-3xl font-bold ">
              <span className="text-white">Skill</span> Point
            </h2>
          </div>

          <div className="flex flex-col items-center md:items-start gap-2 mt-5">
            <span className="flex items-center gap-2">
              <IoLocationOutline className="text-[#B692F6] " />
              <span>15/2, 15/D, Mirpur, Dhaka</span>
            </span>
            <span className="flex items-center gap-2">
              <IoCall className="text-[#B692F6] " />
              <span>+8801676446077</span>
            </span>
            <span className="flex items-center gap-2">
              <MdOutlineEmail className="text-[#B692F6] " />
              <span>shahin.hossain.dev@gmail.com</span>
            </span>
            <span className="flex items-center gap-2">
              <FaGlobe className="text-[#B692F6] " />
              <Link href="#" target="_blank">
                www.skillpoint.com
              </Link>
            </span>
          </div>
        </aside>
        {/* footer nav section */}
        <nav className="flex flex-col space-y-3 ">
          <h6 className="font-semibold uppercase text-[#B692F6] mb-3 ">
            Services
          </h6>
          <Link href="#">UI/UX Design</Link>
          <Link href="#">Web Development</Link>
          <Link href="#">Digital Marketing</Link>
          <Link href="#">Social Marketing</Link>
        </nav>
        <nav className="flex flex-col space-y-3">
          <h6 className="font-semibold uppercase text-[#B692F6]  mb-3 ">
            Company
          </h6>
          <Link href="#">About us</Link>
          <Link href="#">Contact</Link>
          <Link href="#">Career</Link>
          <Link href="#">Press & Media</Link>
        </nav>
        <nav className="flex flex-col space-y-3">
          <h6 className="font-semibold uppercase text-[#B692F6]  mb-3 ">
            Information
          </h6>
          <Link href="#">Terms of use</Link>
          <Link href="#">Privacy policy</Link>
          <Link href="#">Cookie policy</Link>
        </nav>
        {/* news letter */}
        <div>{/* social links */}</div>
      </div>
      <hr className="my-10 border-b border-gray-600" />
      <div className="flex justify-between w-[90%] mx-auto">
        <p className="text-white text-center">
          <span className="text-[#B692F6] "> &copy; </span>
          <small>2024 All Rights Reserved Skill Point </small>
        </p>
        <div className="flex justify-center md:justify-start gap-8 text-xl text-white">
          <Link
            href="https://www.facebook.com/"
            target="_blank"
            className="hover:text-[#B692F6] duration-300"
          >
            <FaFacebookF />
          </Link>
          <Link
            href="https://twitter.com/"
            target="_blank"
            className="hover:text-[#B692F6] duration-300"
          >
            <FaTwitter />
          </Link>
          <Link
            href="https://www.instagram.com/"
            target="_blank"
            className="hover:text-[#B692F6] duration-300"
          >
            <FaInstagram />
          </Link>
          <Link
            href="https://www.linkedin.com/"
            target="_blank"
            className="hover:text-[#B692F6] duration-300"
          >
            <FaLinkedin />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
