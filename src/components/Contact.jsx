import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"; // Needed for form submission
import { motion } from "framer-motion";
// 1. Create Zod schema
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function Contact() {
  // 2. Set up react-hook-form with resolver
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      message: "",
    },
  });

  // 3. Handle form submit
  const onSubmit = (values) => {
    console.log("Form submitted:", values);
    // Do something, e.g., send to backend or show success alert
  };

  return (
    <motion.section id="contact"  initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.6, ease: "easeOut" }} className="flex flex-col gap-4 mt-6">
      <div className="flex flex-col">
        <h1 className="text-center font-bold font-mono text-2xl md:text-4xl">
          Contact <span className="font-normal underline ml-2">Us</span>
        </h1>
        <p className='flex mx-auto text-md text-gray-400 md:p-0 px-3'>
          Ready to Make a Move? Let’s Build Your Future Together
        </p>
      </div>

      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 px-4">
  <div className="flex flex-col mx-auto items-center shadow-sm gap-y-4 p-6 rounded-xl max-w-md w-full bg-white">
    {/* Username */}
    <FormField
      control={form.control}
      name="username"
      render={({ field }) => (
        <FormItem className="w-full">
          <FormLabel>Username</FormLabel>
          <FormControl>
            <Input
              placeholder="Your name"
              className="w-full"
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />

    {/* Email */}
    <FormField
      control={form.control}
      name="email"
      render={({ field }) => (
        <FormItem className="w-full">
          <FormLabel>Email</FormLabel>
          <FormControl>
            <Input
              type="email"
              placeholder="you@example.com"
              className="w-full"
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />

    {/* Message */}
    <FormField
      control={form.control}
      name="message"
      render={({ field }) => (
        <FormItem className="w-full">
          <FormLabel>Message</FormLabel>
          <FormControl>
            <Input
              placeholder="Type your message here..."
              className="w-full"
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />

    <Button type="submit" className="w-full mt-4 bg-blue-500">
      Submit
    </Button>
  </div>
</form>

      </Form>
    </motion.section>
  );
}
