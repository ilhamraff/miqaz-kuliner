import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MessageCircle } from "lucide-react";

export function FinalCta() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-dark-green py-24 lg:py-32"
      aria-labelledby="cta-heading"
    >
      {/* Subtle decorative pattern */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-gold">
          Siap Memesan?
        </p>
        <h2
          id="cta-heading"
          className="mt-4 font-heading text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl"
        >
          Nikmati Cita Rasa Autentik Indonesia
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/70">
          Pesan sekarang melalui WhatsApp dan nikmati hidangan berkualitas restoran
          di kenyamanan rumah Anda.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ size: "lg" }),
              "inline-flex items-center gap-2 bg-gold px-8 py-3 text-sm font-semibold text-white hover:bg-gold-light"
            )}
          >
            <MessageCircle className="size-4" />
            Pesan via WhatsApp
          </a>
          <p className="text-xs text-white/50">
            Respon Cepat • Konsultasi Gratis
          </p>
        </div>
      </div>
    </section>
  );
}
