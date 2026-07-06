"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      id="navbar"
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-sm backdrop-blur-md"
          : "bg-white"
      }`}
    >
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" aria-label="Miqaz Nusantara Kuliner home">
          <span className="font-heading text-2xl font-bold tracking-tight text-gold">
            Miqaz
          </span>
          <span className="hidden text-sm font-medium tracking-wide text-dark-green sm:inline">
            Nusantara Kuliner
          </span>
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
          <Button
            className="bg-gold px-6 text-sm font-semibold text-white hover:bg-gold-dark"
            size="lg"
            render={<Link href="#contact" />}
          >
            Order Now
          </Button>
        </div>

        {/* Mobile menu */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" aria-label="Open menu" />
              }
            >
              <Menu className="size-5 text-dark-green" />
            </SheetTrigger>
            <SheetContent side="right" className="w-72 bg-white">
              <SheetHeader>
                <SheetTitle className="font-heading text-xl font-bold text-gold">
                  Miqaz
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4" aria-label="Mobile navigation">
                {navLinks.map((link) => (
                  <SheetClose key={link.href} render={<Link href={link.href} />}>
                    <span className="block rounded-lg px-3 py-2.5 text-sm font-medium text-dark-green transition-colors hover:bg-warm-beige">
                      {link.label}
                    </span>
                  </SheetClose>
                ))}
                <div className="mt-4 px-3">
                  <SheetClose
                    render={<Link href="#contact" />}
                    className="flex w-full items-center justify-center rounded-lg bg-gold px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gold-dark"
                  >
                    Order Now
                  </SheetClose>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
