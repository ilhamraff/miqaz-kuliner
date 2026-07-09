import { Fish, ChefHat, ShieldCheck, Leaf } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: FeatureCardProps[] = [
  {
    icon: Fish,
    title: "100% Ikan Segar",
    description:
      "Menggunakan daging ikan segar berkualitas premium tanpa menggunakan bahan kimia pemutih yang berbahaya.",
  },
  {
    icon: ChefHat,
    title: "Resep Autentik Nusantara",
    description:
      "Rasio bumbu alami yang presisi untuk menghasilkan rasa gurih khas warisan asli daerah Nusantara.",
  },
  {
    icon: ShieldCheck,
    title: "Higienis & Halal",
    description:
      "Diproses super bersih dengan kepatuhan tinggi terhadap standardisasi kebersihan pabrik modern.",
  },
  {
    icon: Leaf,
    title: "Kualitas Terjaga",
    description:
      "Kesegaran gizi dikunci melalui pengemasan terbaik tanpa mengandalkan pengawet sintetis.",
  },
];

function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <article className="group rounded-xl border border-transparent bg-white p-8 transition-all duration-300 hover:border-gold/20 hover:shadow-lg hover:shadow-gold/5">
      <div className="mb-5 flex size-12 items-center justify-center rounded-lg bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-white">
        <Icon className="size-6" aria-hidden="true" />
      </div>
      <h3 className="font-heading text-lg font-semibold text-dark-green">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-dark-green/60">
        {description}
      </p>
    </article>
  );
}

export function WhyChoose() {
  return (
    <section className="bg-yellow-brand py-12 lg:py-24" aria-labelledby="why-choose-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-red-brand">
            Why Choose Us
          </p>
          <h2
            id="why-choose-heading"
            className="mt-3 font-heading text-3xl font-bold tracking-tight text-dark-green md:text-4xl"
          >
            Kenapa Memilih Kami
          </h2>
          <p className="mt-4 text-base leading-relaxed text-dark-green/60">
            Setiap produk mencerminkan komitmen kami terhadap kualitas, tradisi, dan inovasi — dari tangkapan segar hingga sampai di tangan Anda.
          </p>
        </div>

        {/* Feature grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
