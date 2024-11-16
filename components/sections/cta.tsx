"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CtaSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-gray-600 to-gray-900 py-24 text-white"
      ref={ref}
    >
      <div className="absolute inset-0 bg-[#D14600]/10" />
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="mb-8 text-lg text-gray-300">
            Let&apos;s work together to create something extraordinary. Our team
            is ready to bring your vision to life with cutting-edge web
            solutions.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[#D14600] hover:bg-[#D14600]/90"
          >
            <Link href="#contact">
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
