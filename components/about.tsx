import Image from "next/image";

export function About() {
  return (
    <section
      id="about"
      className="bg-white py-12 lg:py-24"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-warm-beige">
            <Image
              src="/images/story.jpeg"
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
              Cerita di Balik Miqaz
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-dark-green/70">
              <p>
                Miqaz berawal dari Pempek Moenz, UMKM asli Palembang yang berdiri sejak 2019. Berlandaskan kecintaan pendirinya, Munziar Munaf, terhadap kuliner tradisional Nusantara, usaha ini mengolah potensi perikanan lokal menjadi produk ikan yang bergizi, praktis, dan premium.
              </p>
              <p>
                Pada 11 Juli 2026, Pempek Moenz resmi bertransformasi menjadi Miqaz sebagai langkah menghadirkan cita rasa warisan daerah dalam identitas yang lebih modern.
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
