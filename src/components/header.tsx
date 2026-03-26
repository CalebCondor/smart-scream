"use client";

import React, { useState, useEffect } from "react";
import {
  Menu,
  ChevronDown,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navItems = [
  { label: "PRODUCTS", href: "#" },
  { label: "INDUSTRIES", href: "#" },
  {
    label: "RESOURCES",
    href: "#",
    sublinks: [
      { label: "Blog", href: "#" },
      { label: "Case Studies", href: "#" },
      { label: "Webinars", href: "#" },
      { label: "FAQ", href: "#" },
    ],
  },
  { label: "ABOUT US", href: "#" },
  { label: "CONTACT US", href: "#" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-md py-3" : "bg-white py-5"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        {/* Logo Section */}
        <div className="flex items-center">
          <a href="/" className="transition-opacity hover:opacity-80">
            <img 
              src="/logo.png" 
              alt="SMART Screening Logo" 
              className={cn(
                "transition-all duration-300 object-contain",
                isScrolled ? "h-8" : "h-10"
              )}
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.label}>
                {item.sublinks ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger className="text-[#00334E] text-[13px] font-bold hover:text-[#00AEEF] transition-colors flex items-center gap-1 tracking-wider outline-none">
                      {item.label}
                      <ChevronDown className="w-4 h-4 opacity-70" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="bg-white border-[#00AEEF]/10">
                      {item.sublinks.map((sublink) => (
                        <DropdownMenuItem key={sublink.label} asChild>
                          <a
                            href={sublink.href}
                            className="text-[#00334E] font-bold text-[13px] w-full px-4 py-2 hover:text-[#00AEEF] transition-colors cursor-pointer"
                          >
                            {sublink.label}
                          </a>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <a
                    href={item.href}
                    className="text-[#00334E] text-[13px] font-bold hover:text-[#00AEEF] transition-colors flex items-center gap-1 tracking-wider"
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Button & Mobile Menu */}
        <div className="flex items-center gap-4">
          <Button className="hidden md:flex bg-[#2E6DA4] hover:bg-[#23527c] text-white font-bold rounded-md px-6 py-2.5 h-auto text-[13px] tracking-wider transition-all">
            GET STARTED
          </Button>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button
                  className="p-2 text-[#00334E] hover:text-[#00AEEF] transition-colors"
                  aria-label="Menu"
                >
                  <Menu className="w-7 h-7" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-white">
                <SheetHeader className="mt-4">
                  <SheetTitle className="text-left flex flex-col leading-none">
                    <span className="text-[#00AEEF] font-black text-xl tracking-tighter uppercase leading-none">
                      SMART
                    </span>
                    <span className="text-[#00334E] font-black text-xl tracking-tighter leading-none">
                      screening
                    </span>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 mt-10">
                  {navItems.map((item) => (
                    <div key={item.label} className="flex flex-col gap-2">
                       <a
                        href={item.href}
                        className="text-lg font-bold text-[#00334E] hover:text-[#00AEEF] transition-colors flex justify-between items-center"
                      >
                        {item.label}
                      </a>
                      {item.sublinks && (
                        <div className="flex flex-col gap-2 pl-4 border-l-2 border-[#00AEEF]/20 ml-1">
                          {item.sublinks.map((sublink) => (
                            <a
                              key={sublink.label}
                              href={sublink.href}
                              className="text-base font-semibold text-[#00334E]/70 hover:text-[#00AEEF]"
                            >
                              {sublink.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  <Button className="font-bold w-full mt-6 py-6 text-base bg-[#2E6DA4] hover:bg-[#23527c] text-white">
                    GET STARTED
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
