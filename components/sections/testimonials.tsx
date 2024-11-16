"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Quote } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

const testimonials = [
  {
    content:
      "IORAF transformed our online presence completely. Their attention to detail and technical expertise helped us achieve a modern, high-performing website that our customers love.",
    author: "Sandra Williams",
    position: "CEO, TechSolutions",
    image:
      "https://plus.unsplash.com/premium_photo-1670884441012-c5cf195c062a?auto=format&fit=crop&q=80&w=150&h=150",
  },
  {
    content:
      "Working with IORAF was a game-changer for our business. They delivered a custom web application that streamlined our operations and improved customer satisfaction.",
    author: "John Doe",
    position: "CTO, DataWorks",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
  },
  {
    content:
      "The team at IORAF goes above and beyond. Their expertise in web development and commitment to excellence made our project a huge success.",
    author: "Elsa Johnson",
    position: "Marketing Director, BrightIdeas",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
  },
  {
    content:
      "IORAF is a top-notch agency. They delivered a beautiful website that exceeded our expectations. Their professionalism and dedication to quality are unmatched.",
    author: "Michael Smith",
    position: "Founder, CreativeCo",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150",
  },
  {
    content:
      "We are thrilled with the results of our collaboration with IORAF. They created a stunning e-commerce platform that has significantly increased our sales and customer engagement.",
    author: "Laura Brown",
    position: "CEO, FashionHub",
    image:
      "https://plus.unsplash.com/premium_photo-1658527049634-15142565537a?auto=format&fit=crop&q=80&w=150&h=150",
  },
];

export function TestimonialsSection() {
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="bg-white py-24 dark:bg-gray-900" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Client Success Stories
          </h2>
          <p className="mb-16 text-lg text-gray-600 dark:text-gray-300">
            Hear what our clients have to say about working with us
          </p>

          <div className="relative">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="relative rounded-2xl bg-gray-50 p-8 dark:bg-gray-800"
            >
              <Quote className="mx-auto mb-6 h-12 w-12 text-[#D14600]" />
              <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
                {testimonials[currentIndex].content}
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-left">
                  <p className="font-semibold">
                    {testimonials[currentIndex].author}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {testimonials[currentIndex].position}
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="mt-8 flex justify-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 w-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "w-6 bg-[#D14600]"
                      : "bg-gray-300 dark:bg-gray-600"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
