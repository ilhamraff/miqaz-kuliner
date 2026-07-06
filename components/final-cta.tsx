import { Button } from "@/components/ui/button";
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
          Ready to Order?
        </p>
        <h2
          id="cta-heading"
          className="mt-4 font-heading text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl"
        >
          Taste the Authentic Flavors of Indonesia
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/70">
          Experience premium frozen seafood crafted with love and tradition.
          Order now through WhatsApp and enjoy restaurant-quality dishes in the
          comfort of your home.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            className="inline-flex items-center gap-2 bg-gold px-8 py-3 text-sm font-semibold text-white hover:bg-gold-light"
            size="lg"
            render={
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
              />
            }
          >
            <MessageCircle className="size-4" />
            Order via WhatsApp
          </Button>
          <p className="text-xs text-white/50">
            Fast response • Free consultation
          </p>
        </div>
      </div>
    </section>
  );
}
