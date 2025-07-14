import React from "react";
import { assets } from "../assets/assets";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="grid md:grid-rows-2 mt-6 h-fit bg-blue-500 px-4 py-4 text-white justify-between"
    >
      <div className="grid md:grid-cols-3 gap-6">
        {/* Left section */}
        <div className="space-y-3">
          <img src={assets.logo_dark} alt="logo" className="h-10 w-auto" />
          <p className="text-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
          </p>
        </div>

        {/* Middle section */}
        <div className="flex flex-col md:items-center">
          <h1 className="text-xl font-bold mb-2">Company</h1>
          <ul className="space-y-2 text-lg pl-4">
            {["Home", "About", "Projects", "Testimonials", "Contact"].map(
              (item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:scale-105 transition"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Right section */}
        <div className="space-y-3">
          <h1 className="text-xl font-bold">Subscribe to our newsletter</h1>
          <p className="text-lg">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <form className="flex w-full max-w-md">
            <Input
              type="email"
              placeholder="E-mail"
              className="rounded-r-none border-r-0 h-10 placeholder:text-white focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            <Button type="submit" className="rounded-l-none h-10">
              Subscribe Now!
            </Button>
          </form>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className=" mt-28 h-20 flex items-end justify-center text-center text-lg border-t border-white ">
        &copy; 2024–{new Date().getFullYear()} — Done by POLA · Web Developer at
        Techsprint
      </div>
    </motion.footer>
  );
}
