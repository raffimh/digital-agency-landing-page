"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Code2, Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Our Work", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 z-50 w-full backdrop-blur-xl bg-gray-100/30"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <div className="relative z-10 flex items-center gap-2">
          <Code2 className="h-8 w-8 text-[#D14600]" />
          <span className="text-xl font-bold">IORAF</span>
        </div>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navItems.map(item => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-gray-600 hover:text-[#D14600] dark:text-gray-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <Button
            asChild
            className="hidden bg-[#D14600] hover:bg-[#D14600]/90 md:inline-flex"
          >
            <Link href="#contact">Get Started</Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute inset-x-0 top-full bg-white p-4 shadow-lg md:hidden"
        >
          <nav className="flex flex-col space-y-4">
            {navItems.map(item => (
              <Link
                key={item.name}
                href={item.href}
                className="flex text-sm font-medium justify-center text-gray-600 hover:text-[#D14600]"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button className="bg-[#D14600] hover:bg-[#D14600]/90">
              Get Started
            </Button>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
