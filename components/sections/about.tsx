"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code, Lightbulb, Users } from "lucide-react";

const features = [
  {
    icon: Code,
    title: "Expert Development",
    description:
      "Our team of skilled developers creates robust and scalable web solutions.",
  },
  {
    icon: Lightbulb,
    title: "Creative Solutions",
    description:
      "We combine innovation with functionality to deliver unique digital experiences.",
  },
  {
    icon: Users,
    title: "Client-Focused",
    description:
      "Your success is our priority. We work closely with you to achieve your goals.",
  },
];

export function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section
      id="about"
      className="bg-white py-24 dark:bg-gray-900"
      ref={ref}
    >
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Grow With{" "}
            <span className="text-[#D14600]">Ioraf Creative</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mb-16 text-lg text-gray-600 dark:text-gray-300"
          >
            We&apos;re more than just developers – we&apos;re your digital growth partners.
            With years of experience and a passion for innovation, we help
            businesses thrive in the digital age.
          </motion.p>

          <motion.div
            variants={containerVariants}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="rounded-lg bg-gray-50 p-8 dark:bg-gray-800"
              >
                <feature.icon className="mx-auto mb-4 h-12 w-12 text-[#D14600]" />
                <h3 className="mb-3 text-xl font-semibold">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}