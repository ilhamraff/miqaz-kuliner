import Image from "next/image";

export function About() {
  return (
    <section
      id="about"
      className="bg-white py-24 lg:py-32"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-warm-beige">
            <Image
              src="/images/about-kitchen.png"
              alt="Miqaz Nusantara Kuliner production facility"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-gold">
              Our Story
            </p>
            <h2
              id="about-heading"
              className="mt-3 font-heading text-3xl font-bold tracking-tight text-dark-green md:text-4xl"
            >
              Preserving Indonesian Culinary Heritage
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-dark-green/70">
              <p>
                Miqaz Nusantara Kuliner was born from a deep passion for
                Indonesia&apos;s rich culinary traditions. Founded with a mission
                to bring the authentic flavors of the archipelago to every
                household, we specialize in premium frozen seafood products that
                honor centuries-old recipes.
              </p>
              <p>
                Our journey began in a small kitchen where traditional family
                recipes met modern food technology. Today, we operate a
                certified production facility that combines time-honored cooking
                methods with state-of-the-art flash-freezing technology.
              </p>
              <p>
                Every product that leaves our facility carries the soul of
                Indonesian cuisine — carefully crafted, rigorously tested, and
                frozen at peak freshness to ensure that the first bite is always
                as extraordinary as the last.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-10">
              <div>
                <p className="font-heading text-3xl font-bold text-gold">
                  100%
                </p>
                <p className="mt-1 text-sm text-dark-green/60">Fresh Fish</p>
              </div>
              <div>
                <p className="font-heading text-3xl font-bold text-gold">
                  Halal
                </p>
                <p className="mt-1 text-sm text-dark-green/60">Certified</p>
              </div>
              <div>
                <p className="font-heading text-3xl font-bold text-gold">
                  3+
                </p>
                <p className="mt-1 text-sm text-dark-green/60">
                  Premium Products
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
