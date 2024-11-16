"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

export function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="bg-white py-24 dark:bg-gray-900" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-6xl"
        >
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Ready to start your project? Contact us today.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6 }}
              className="space-y-8 rounded-2xl bg-gray-50 p-8 dark:bg-gray-800"
            >
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-[#D14600]" />
                <div>
                  <h3 className="mb-2 text-lg font-semibold">Location</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    123 Innovation Street
                    <br />
                    Tech Valley, CA 94043
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-[#D14600]" />
                <div>
                  <h3 className="mb-2 text-lg font-semibold">Email</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    hello@ioraf.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-[#D14600]" />
                <div>
                  <h3 className="mb-2 text-lg font-semibold">Phone</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    +1 (555) 123-4567
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6 }}
              className="space-y-6 rounded-2xl bg-white p-8 shadow-lg dark:bg-gray-800"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium"
                  >
                    Name
                  </label>
                  <Input id="name" placeholder="John Doe" />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium"
                >
                  Subject
                </label>
                <Input id="subject" placeholder="Project Inquiry" />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project..."
                  rows={6}
                />
              </div>
              <Button className="w-full bg-[#D14600] hover:bg-[#D14600]/90">
                Send Message
              </Button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}