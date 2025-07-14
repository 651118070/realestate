import React from "react";
import { assets } from "../assets/assets";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";
export function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 w-full  ">
      <img src={assets.logo} alt="logo" />
      <ul className="space-x-6 hidden md:flex">
        <li>
          <a href="#home" className="text-white hover:text-blue-500">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="text-white hover:text-blue-500">
            About
          </a>
        </li>
        <li>
          <a href="#projects" className="text-white hover:text-blue-500">
            Projects
          </a>
        </li>
        <li>
          <a href="#testimonials" className="text-white hover:text-blue-500">
            Testimonials
          </a>
        </li>
        <li>
          <a href="#contact" className="text-white hover:text-blue-500">
            Contact
          </a>
        </li>
      </ul>
      <Button className="hidden md:block rounded-xl px-4  bg-blue-500 hover:bg-transparent hover:border">Sign In</Button>
      <Sheet >
        <SheetTrigger className="md:hidden">
          <MenuIcon className="text-white" />
        </SheetTrigger>
        <SheetContent className='bg-black'>
          <SheetDescription className="flex flex-col gap-y-4 ">
            <ul className="space-y-6 flex flex-col pl-4 mt-10">
            <li>
          <a href="#home" className="text-white hover:text-blue-500">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="text-white hover:text-blue-500">
            About
          </a>
        </li>
        <li>
          <a href="#projects" className="text-white hover:text-blue-500">
            Projects
          </a>
        </li>
        <li>
          <a href="#testimonials" className="text-white hover:text-blue-500">
            Testimonials
          </a>
        </li>
        <li>
          <a href="#contact" className="text-white hover:text-blue-500">
            Contact
          </a>
        </li>
            </ul>
            <Button className="pl-4">Sign In</Button>
          </SheetDescription>
          
        </SheetContent>
      </Sheet>
    </nav>
  );
}
