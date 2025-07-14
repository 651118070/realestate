import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'
export default function Testimonies() {
    const testimonies = [
        {
            image:assets.profile_img_1,
            name:'Donald Jackman',
            role:'Marketing Manager',
            testimony:'From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched.'
        },{
            image:assets.profile_img_2,
            name:'Sarah Johnson',
            role:'Real Estate Investor',
            testimony:'Working with this team was a game-changer for my real estate portfolio. They provided invaluable insights and helped me secure properties that exceeded my expectations.'
        },
        {
            image:assets.profile_img_3,
            name:'Michael Smith',
            role:'Homeowner',
            testimony:'I cannot thank them enough for their professionalism and dedication. They made the home-buying process smooth and stress-free, and I am thrilled with my new home!'
        }
    ]
  return (
    <motion.section id='testimonials' initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.6, ease: "easeOut" }} className='flex flex-col gap-4 mt-6'>
        <h1 className='text-center font-bold font-mono text-2xl md:text-4xl'>Customer<span className='font-normal underline ml-2'>Testimonials</span></h1>
        <p className="flex mx-auto text-md text-gray-400 md:p-0 px-3">Real Stories from Those Who Found Home with Us</p>
        <div className='grid md:grid-cols-3'>
              {testimonies.map((c, index) => (
                  
                    <div key={index} className="p-1">
                      <Card  className="overflow-hidden h-full md:mx-10 ">
                        <CardContent className="flex flex-col items-center">
                          <img
                            src={c.image}
                            alt={c.name}
                            className="w-40 h-40 rounded-full object-cover"
                          />
                          <div className="">
                            <h3 className="text-lg font-semibold">{c.name}</h3>
                            <p className="text-gray-500">{c.role}</p>
                          </div>
                          <p className='flex mx-auto text-center'>{c.testimony}</p>
                        </CardContent>
                      </Card>
                    </div>
                  
                ))}
        </div>
        </motion.section>
  )
}
