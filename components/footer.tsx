import Link from "next/link";
import { Globe, Mail, Phone, MapPin } from "lucide-react";

const footerNav = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const footerProducts = [
  "Pempek Premium",
  "Otak-Otak Panggang",
  "Rendang Abon Ikan",
];

export function Footer() {
  return (
    <footer className="bg-dark-green text-white" role="contentinfo">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block" aria-label="Miqaz Nusantara Kuliner home">
              <img src="/images/logo.png" alt="Miqaz Nusantara Kuliner" className="h-12 w-auto lg:h-16" />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              Melestarikan warisan kuliner Nusantara melalui olahan ikan premium yang autentik, 
              higienis, dan berkualitas untuk setiap keluarga Indonesia.
            </p>
            {/* Social links */}
            <div className="mt-6 flex gap-3">
              <a
                href="https://www.instagram.com/miqaz_kuliner/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-9 items-center justify-center rounded-lg bg-white/10 text-white/70 transition-colors hover:bg-gold hover:text-white"
                aria-label="Follow us on Instagram"
              >
                <Globe className="size-4" />
              </a>
              <a
                href="mailto:hello@miqazkuliner.com"
                className="flex size-9 items-center justify-center rounded-lg bg-white/10 text-white/70 transition-colors hover:bg-gold hover:text-white"
                aria-label="Email us"
              >
                <Mail className="size-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40">
              Navigation
            </h3>
            <ul className="mt-4 space-y-3" role="list">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 transition-colors hover:text-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40">
              Products
            </h3>
            <ul className="mt-4 space-y-3" role="list">
              {footerProducts.map((product) => (
                <li key={product}>
                  <Link
                    href="#products"
                    className="text-sm text-white/60 transition-colors hover:text-gold"
                  >
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40">
              Contact
            </h3>
            <ul className="mt-4 space-y-4" role="list">
              <li className="flex items-start gap-3">
                <Phone
                  className="mt-0.5 size-4 shrink-0 text-gold"
                  aria-hidden="true"
                />
                <a
                  href="#contact"
                  className="text-sm text-white/60 transition-colors hover:text-gold"
                >
                  +62 821 2340 0241
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail
                  className="mt-0.5 size-4 shrink-0 text-gold"
                  aria-hidden="true"
                />
                <a
                  href="mailto:[EMAIL_ADDRESS]"
                  className="text-sm text-white/60 transition-colors hover:text-gold"
                >
                  [EMAIL_ADDRESS]
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  className="mt-0.5 size-4 shrink-0 text-gold"
                  aria-hidden="true"
                />
                <span className="text-sm text-white/60">
                  Bandung, Indonesia
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 border-t border-white/10 pt-8">
          <p className="text-center text-xs text-white/40">
            &copy; {new Date().getFullYear()} Miqaz Nusantara Kuliner. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
