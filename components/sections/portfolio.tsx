"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const projects = [
  {
    title: "Modern E-commerce Platform",
    description: "A full-featured online store with seamless user experience",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800&h=600",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Corporate Banking Dashboard",
    description: "Intuitive financial management interface for enterprise clients",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=600",
    tags: ["React", "Node.js", "Material UI"],
  },
  {
    title: "Healthcare Provider Platform",
    description: "Streamlined patient management system for medical facilities",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800&h=600",
    tags: ["Vue.js", "Express", "MongoDB"],
  },
];

export function PortfolioSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="portfolio" className="bg-gray-50 py-24 dark:bg-gray-800" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-6xl"
        >
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Our Recent Work
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Explore our portfolio of successful projects and digital solutions
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl dark:bg-gray-700"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                  <p className="mb-4 text-gray-600 dark:text-gray-300">
                    {project.description}
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600 dark:bg-gray-600 dark:text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full"
                  >
                    <Link href="#contact">View Details</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}