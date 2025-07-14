import React from "react";
import { Navbar } from "./Navbar";
import { Button } from "@/components/ui/button";
import { assets } from "../assets/assets";

export  function Main() {
 

  return (
    <div id="home" style={{ backgroundImage: `url(${assets.header_img})` }} className="flex flex-col  justify-between gap-3 px-4 h-[400px] md:h-[700px] w-full relative">
      <Navbar />
      <section className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
    <p className="text-lg flex mx-auto md:px-0 pl-3 text-white font-mono md:text-6xl font-semibold mb-4 max-w-2xl">Explore Homes that fit your dreams</p>
    <div className="flex gap-x-4">
      <Button className="hover:bg-transparent hover:text-white  text-black bg-white border px-4 hover:cursor-pointer">Projects</Button>
      <Button className="bg-blue-500 px-4 hover:cursor-pointer">Contact Us</Button>
    </div>
  </section>
   
    </div>
  );
}
