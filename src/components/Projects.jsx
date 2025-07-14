import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
export default function Projects() {
  const projects = [
    {
      image: assets.project_img_1,
      name: "Skyline Haven",
      price: "$2,50,000 | California",
    },
    {
      image: assets.project_img_2,
      name: "Urban Oasis",
      price: "$1,80,000 | New York",
    },
    {
      image: assets.project_img_3,
      name: "Coastal Retreat",
      price: "$3,00,000 | Florida",
    },
    {
      image: assets.project_img_4,
      name: "Mountain View Villa",
      price: "$2,20,000 | Colorado",
    },
  ];
  return (
    <motion.section id="projects"  initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.6, ease: "easeOut" }} className="flex flex-col gap-4 mt-6">
      <h1 className="text-center font-bold font-mono text-2xl md:text-4xl">
        Projects<span className="font-normal underline ml-2">Completed</span>
      </h1>
      <p className="flex mx-auto text-md text-gray-400 md:p-0 px-3">
        Crafting Spaces, Building Legacies—Explore Our Portfolio
      </p>
      <Carousel className="w-full max-w-3xl mx-auto">
        <CarouselContent className="-ml-1">
          {projects.map((c, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <Card className="relative overflow-hidden">
                  <CardContent className="p-0">
                    <img
                      src={c.image}
                      alt={c.name}
                      className="w-full h-[300px] object-cover"
                    />
                    <div className="absolute bottom-0 left-0 w-64 h-20 bg-white z-10  p-4 text-center">
                      <h3 className="text-lg font-semibold">{c.name}</h3>
                      <p className="text-gray-500">{c.price}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </motion.section>
  );
}
