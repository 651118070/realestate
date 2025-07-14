import React from "react";
import { assets } from "../assets/assets";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
export default function About() {
  return (
    <section id="about" className="flex flex-col gap-4 mt-6">
      <h1 className="text-center font-bold font-mono text-2xl md:text-4xl">
        About<span className="font-normal underline ml-2">Our Brand</span>
      </h1>
      <p className="flex mx-auto text-md text-gray-400 md:p-0 px-3">
        Passionate About Properties, Dedicated to Your Vision
      </p>
      <div className="grid md:grid-cols-2 mx-auto">
        <motion.img
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: "easeOut" }}
          src={assets.brand_img}
          className="w-[500px] h-[500px]"
          alt="brand image"
        />
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col gap-4 items-center mx-auto justify-center md:pt-0 pt-4"
        >
          <div className="grid md:grid-cols-2 gap-4 ">
            <p className="text-xl  md:text-5xl max-w-[300px] text-center">
              10+
              <br />
              <span className="text-sm font-normal">Years of Excellence</span>
            </p>
            <p className="text-xl   md:text-5xl max-w-[300px] text-center">
              12+ <br />{" "}
              <span className="text-sm font-normal">Projects Completed</span>
            </p>
            <p className="text-xl  md:text-5xl max-w-[300px] text-center">
              20+ <br />{" "}
              <span className="text-sm font-normal">Mn. Sq. Ft. Delivered</span>
            </p>
            <p className="text-xl md:text-5xl max-w-[300px] text-center">
              25+ <br />{" "}
              <span className="text-sm font-normal"> Ongoing Projects</span>
            </p>
          </div>
          <p className="max-w-lg text-start pl-5 md:pl-32 ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <Button className="w-64 bg-blue-500 ">Learn More</Button>
        </motion.div>
      </div>
    </section>
  );
}
