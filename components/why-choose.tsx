import { Fish, ChefHat, ShieldCheck, Leaf } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: FeatureCardProps[] = [
  {
    icon: ChefHat,
    title: "Warisan Resep Leluhur",
    description:
      "Resep autentik Nusantara yang diwariskan turun-temurun dan tetap lestari dalam setiap sajian.",
  },
  {
    icon: Fish,
    title: "Ikan Pilihan Berkualitas",
    description:
      "Menggunakan ikan pilihan premium untuk menghasilkan cita rasa yang konsisten di setiap produk.",
  },
  {
    icon: ShieldCheck,
    title: "Higienis & Halal",
    description:
      "Diproses dengan standar kebersihan tinggi untuk menjaga keamanan dan kualitas pangan.",
  },
  {
    icon: Leaf,
    title: "Kualitas Tetap Terjaga",
    description:
      "Dikemas secara modern untuk menjaga kesegaran, cita rasa, dan kualitas hingga siap dinikmati.",
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
          {/* <p className="text-sm font-bold uppercase tracking-widest text-red-brand">
            Kenalan Bersama Miqaz
          </p> */}
          <h2
            id="why-choose-heading"
            className="mt-3 font-heading text-3xl font-bold tracking-tight text-red-brand md:text-4xl"
          >
            BRAND STORY
          </h2>
          <p className="mt-4 text-base leading-relaxed text-dark-green font-semibold">
            "Tidak semua orang memiliki waktu memasak makanan bergizi setiap hari.
            Miqaz hadir untuk menghadirkan olahan ikan berkualitas yang praktis, lezat, dan tetap
            memperahankan cita rasa khas Nusantara. Setiap produk dibuat dengan komitmen pada
            kualitas, sehingga setiap gigitan membawa kehangatan dan kekayaan rasa Indonesia."
          </p>
          <p className="mt-4 text-base leading-relaxed text-dark-green/60 italic">— Munziar Munaf Founder Miqaz Kuliner Nusantara</p>
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
