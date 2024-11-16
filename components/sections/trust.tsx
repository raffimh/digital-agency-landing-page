"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Shield, Rocket, Target, Users2, Zap, Trophy } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Reliable & Secure",
    description: "We build with security and reliability at the forefront",
  },
  {
    icon: Rocket,
    title: "Fast Performance",
    description: "Lightning-fast websites optimized for speed and efficiency",
  },
  {
    icon: Target,
    title: "Goal-Oriented",
    description: "Focused on achieving measurable business outcomes",
  },
  {
    icon: Users2,
    title: "Collaborative",
    description: "We work closely with you throughout the development process",
  },
  {
    icon: Zap,
    title: "Modern Tech Stack",
    description: "Using cutting-edge technologies for optimal results",
  },
  {
    icon: Trophy,
    title: "Quality First",
    description: "Committed to delivering excellence in every project",
  },
];

export function TrustSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="bg-gray-50 py-24 dark:bg-gray-800" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Trusted Web Development Partner
          </h2>
          <p className="mb-16 text-lg text-gray-600 dark:text-gray-300">
            We bring together expertise, innovation, and dedication to deliver
            exceptional web solutions for our clients.
          </p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative rounded-lg bg-white p-8 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl dark:bg-gray-700"
              >
                <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-[#D14600] to-orange-600 opacity-0 blur transition duration-300 group-hover:opacity-30" />
                <div className="relative">
                  <value.icon className="mx-auto mb-4 h-10 w-10 text-[#D14600]" />
                  <h3 className="mb-3 text-xl font-semibold">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}