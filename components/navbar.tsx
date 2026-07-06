"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu, ArrowUp } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <header
      id="navbar"
      className="w-full bg-white"
    >
      <nav
        className="mx-auto flex h-auto max-w-7xl items-center justify-between px-6 py-4 lg:px-8"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" aria-label="Miqaz Nusantara Kuliner home">
          <img src="/images/logo.png" alt="Miqaz Nusantara Kuliner" className="h-15 w-auto lg:h-25 lg:w-auto" />
        </Link>

        {/* Desktop navigation */}
        <ul className="hidden items-center gap-8 lg:flex" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-dark-green/70 transition-colors hover:text-dark-green"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link
            href="#contact"
            className={buttonVariants({ size: "lg", className: "bg-red-brand px-6 rounded-full text-sm font-semibold text-white hover:bg-dark-red" })}
          >
            Pesan Sekarang
          </Link>
        </div>

        {/* Mobile menu */}
        <div className="lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className="inline-flex size-8 items-center justify-center rounded-lg text-dark-green transition-colors hover:bg-muted"
              aria-label="Open menu"
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-72 bg-white">
              <SheetHeader>
                <SheetTitle className="font-heading text-xl font-bold text-gold">
                  Miqaz
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4" aria-label="Mobile navigation">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-sm font-medium text-dark-green transition-colors hover:bg-warm-beige"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="mt-4 px-3">
                  <Link
                    href="#contact"
                    onClick={() => setOpen(false)}
                    className="flex w-full items-center justify-center rounded-lg bg-red-brand px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-dark-red"
                  >
                    Pesan Sekarang
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      {/* Floating scroll-to-top button */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`fixed bottom-6 right-6 z-50 flex size-12 items-center justify-center rounded-full bg-[#BA2C2B] text-white shadow-lg transition-all duration-300 hover:bg-[#9a2423] hover:shadow-xl active:scale-95 ${
          showScrollTop
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <ArrowUp className="size-5" />
      </button>
    </header>
  );
}
