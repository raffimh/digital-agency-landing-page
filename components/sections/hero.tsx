"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Code2 } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white dark:bg-gray-900 pt-20"
    >
      <div className="absolute inset-0 bg-grid-pattern" />
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D14600] text-white"
          >
            <Code2 className="h-8 w-8" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl"
          >
            Crafting Digital Excellence for{" "}
            <span className="text-[#D14600]">Modern Businesses</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-10 text-lg text-gray-600 dark:text-gray-300"
          >
            We transform your vision into powerful digital experiences. Our
            expert team delivers cutting-edge web solutions that drive growth
            and engage your audience.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button
              asChild
              size="lg"
              className="bg-[#D14600] hover:bg-[#D14600]/90"
            >
              <Link href="#contact">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#portfolio">View Our Work</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
