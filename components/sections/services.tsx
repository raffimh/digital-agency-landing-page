"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Building2, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const services = [
  {
    icon: Building2,
    title: "Company Profile Websites",
    description:
      "Establish a strong online presence with a professional company website that showcases your brand, services, and values.",
    features: [
      "Responsive Design",
      "SEO Optimization",
      "Content Management System",
      "Analytics Integration",
    ],
  },
  {
    icon: Code2,
    title: "Custom Web Applications",
    description:
      "Transform your business processes with tailored web applications designed to meet your specific needs and goals.",
    features: [
      "Custom Development",
      "Scalable Architecture",
      "API Integration",
      "Cloud Deployment",
    ],
  },
];

export function ServicesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="bg-white py-24 dark:bg-gray-900" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Our Services
          </h2>
          <p className="mb-16 text-lg text-gray-600 dark:text-gray-300">
            We offer comprehensive web development solutions tailored to your needs
          </p>

          <div className="grid gap-8 lg:grid-cols-2">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-2xl bg-gray-50 p-8 dark:bg-gray-800"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#D14600]/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <service.icon className="mb-6 h-12 w-12 text-[#D14600]" />
                <h3 className="mb-4 text-2xl font-bold">{service.title}</h3>
                <p className="mb-6 text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
                <ul className="mb-8 space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-gray-600 dark:text-gray-300"
                    >
                      <span className="mr-2 h-1.5 w-1.5 rounded-full bg-[#D14600]" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className="bg-[#D14600] hover:bg-[#D14600]/90"
                >
                  <Link href="#contact">Get Started</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}