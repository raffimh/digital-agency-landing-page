"use client";

import { useEffect, useState } from "react";
import { Code2 } from "lucide-react";
import Link from "next/link";

const navigation = {
  main: [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ],
  social: [
    {
      name: "Twitter",
      href: "#",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "#",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.607.069-.607 1.003.07 1.53 1.03 1.53 1.03.892 1.528 2.341 1.087 2.91.832.092-.647.35-1.087.636-1.337-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.253-.25-.733.024-1.527 0 0 .84-.27 2.75 1.03a9.564 9.564 0 015.004 0c1.91-1.3 2.75-1.03 2.75-1.03.274.794.127 1.274.024 1.527.64.698 1.03 1.591 1.03 2.682 0 3.842-2.337 4.69-4.563 4.94.36.31.682.92.682 1.855 0 1.34-.012 2.42-.012 2.75 0 .27.18.58.688.48C19.135 20.197 22 16.442 22 12.017 22 6.484 17.523 2 12 2z"
          />
        </svg>
      ),
    },
  ],
};

export function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-gray-900 py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between space-y-8 md:flex-row md:space-y-0">
          <div className="flex items-center space-x-2">
            <Code2 className="h-8 w-8 text-[#D14600]" />
            <span className="text-2xl font-bold">IORAF</span>
          </div>
          <nav className="flex space-x-6">
            {navigation.main.map(item => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium hover:text-[#D14600]"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="flex space-x-4">
            {navigation.social.map(item => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium hover:text-[#D14600]"
              >
                <item.icon className="h-6 w-6" />
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-400">
          <p>©{currentYear} IORAF. All rights reserved.</p>
          <p>
            Empowering your digital presence with cutting-edge web solutions.
          </p>
        </div>
      </div>
    </footer>
  );
}
