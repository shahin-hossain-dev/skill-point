"use client";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { Button } from "../ui/button";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
const Navbar = () => {
  const [isToggleBarOpen, setIsToggleBarOpen] = useState(false);

  console.log(isToggleBarOpen);
  return (
    <nav className="mx-2 md:mx-8 py-3">
      <div className="flex justify-between">
        {/* logo */}
        <h2 className="text-primary-color text-3xl font-bold ">
          <span className="text-secondary-color">Skill</span> Point
        </h2>
        {/* nav manu */}
        <div className="hidden lg:block text-lg">
          <NavigationMenu>
            <NavigationMenuList>
              {/* nav-item-1 */}
              <NavigationMenuItem>
                <Link href="/" className={navigationMenuTriggerStyle()}>
                  Home
                </Link>
              </NavigationMenuItem>
              {/* nav-item-2 */}
              <NavigationMenuItem>
                <Link href="/courses">
                  <NavigationMenuTrigger
                    className={navigationMenuTriggerStyle()}
                  >
                    Courses
                  </NavigationMenuTrigger>
                </Link>
              </NavigationMenuItem>
              {/* nav-item-3 */}
              <NavigationMenuItem>
                <Link href="/store" className={navigationMenuTriggerStyle()}>
                  Store
                </Link>
              </NavigationMenuItem>
              {/* nav-item-4 */}
              <NavigationMenuItem>
                <Link href="/blog" className={navigationMenuTriggerStyle()}>
                  Blog
                </Link>
              </NavigationMenuItem>
              {/* nav-item-3 */}
              <NavigationMenuItem>
                <Link
                  href="/components"
                  className={navigationMenuTriggerStyle()}
                >
                  Components
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        {/* nav end */}
        <div className="flex gap-3">
          <Button className="bg-outline relative hover:bg-ghost text-secondary-color">
            <p className="h-6 w-6 absolute -top-1 right-0 border-2 flex justify-center items-center text-[12px] border-white rounded-full bg-primary-color text-white">
              2
            </p>
            <MdOutlineShoppingCart className="text-2xl" />
          </Button>
          <Button className="bg-primary-color hidden lg:block text-white hover:bg-[#9E77ED]">
            Sign In
          </Button>
          <Button
            variant="outline"
            className=" text-primary-color hidden lg:block outline-1 outline-primary-color hover:bg-primary-color hover:text-white"
          >
            Sign Up
          </Button>
          <div className="lg:hidden relative">
            <button onClick={() => setIsToggleBarOpen(!isToggleBarOpen)}>
              {isToggleBarOpen ? (
                <IoCloseSharp className="text-3xl duration-150 text-primary-color " />
              ) : (
                <FaBars className="text-3xl duration-150 text-primary-color" />
              )}
            </button>
            {/* Sidebar nav item */}
            <div
              className={` right-0 p-5 w-[200px] shadow-2xl min-h-full rounded-l-lg  fixed ease-out transition-transform ${
                isToggleBarOpen ? "translate-x-0" : "translate-x-full"
              } duration-300`}
            >
              {/* small screen side bar */}
              <div className="lg:hidden font-medium">
                <NavigationMenu>
                  <NavigationMenuList className="flex items-start flex-col w-full gap-3">
                    {/* nav-item-1 */}
                    <NavigationMenuItem>
                      <Link href="/" className="ps-1">
                        Home
                      </Link>
                    </NavigationMenuItem>
                    {/* nav-item-2 */}
                    <NavigationMenuItem>
                      <Link href="/courses">Courses</Link>
                    </NavigationMenuItem>
                    {/* nav-item-3 */}
                    <NavigationMenuItem>
                      <Link href="/store">Store</Link>
                    </NavigationMenuItem>
                    {/* nav-item-4 */}
                    <NavigationMenuItem>
                      <Link href="/blog">Blog</Link>
                    </NavigationMenuItem>
                    {/* nav-item-3 */}
                    <NavigationMenuItem>
                      <Link href="/components">Components</Link>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
                <div className="mt-3 flex flex-col gap-3">
                  <Button className="bg-primary-color  text-white hover:bg-[#9E77ED]">
                    Sign In
                  </Button>
                  <Button
                    variant="outline"
                    className=" text-primary-color outline-1 outline-primary-color hover:bg-primary-color hover:text-white"
                  >
                    Sign Up
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
