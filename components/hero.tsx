import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, MessageCircle } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white"
    >
      <div className="mx-auto max-w-7xl px-6 pt-10 pb-20 lg:px-8 lg:pt-16 lg:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text content */}
          <div className="order-2 lg:order-1">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-yellow-brand-old">
              Mengenal Lebih Dekat MIQAZ
            </p>
            <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-dark-green md:text-5xl lg:text-6xl">
              Authentic <span className="text-yellow-brand-old">Fish</span> Authentic <span className="text-yellow-brand-old">Taste</span>{" "}
              
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-dark-green/70 md:text-lg">
              Warisan resep Nusantara berpadu dengan 100% ikan pilihan untuk menghadirkan olahan premium yang autentik. 
              Diproses secara higienis dan dibekukan dengan teknologi frozen fresh, 
              sehingga cita rasa, kualitas, dan kesegarannya tetap terjaga di setiap sajian.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#products"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "inline-flex items-center gap-2 bg-yellow-brand-old px-8 py-3 text-sm font-semibold text-white hover:bg-yellow-brand-old"
                )}
              >
                Jelajahi Produk
                <ArrowRight className="size-4" />
              </Link>
              <a
                href="https://wa.me/6282123400241"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "inline-flex items-center gap-2 border-dark-green/20 px-8 py-3 text-sm font-semibold text-dark-green hover:bg-dark-green/5"
                )}
              >
                <MessageCircle className="size-4" />
                Hubungi Kami
              </a>
            </div>
          </div>

          {/* Hero image */}
          <div className="order-1 lg:order-2">
            <div className="relative mx-auto aspect-4/3 max-w-lg overflow-hidden lg:max-w-none">
              <Image
                src="/images/hero-brand.webp"
                alt="Hero"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative bottom curve */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 60L1440 60L1440 20C1440 20 1080 0 720 0C360 0 0 20 0 20L0 60Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
