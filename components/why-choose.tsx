import { Fish, ChefHat, ShieldCheck, Snowflake } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: FeatureCardProps[] = [
  {
    icon: Fish,
    title: "100% Fresh Fish",
    description:
      "We source only the freshest catch from trusted local fishermen, ensuring every product starts with the highest quality ingredients.",
  },
  {
    icon: ChefHat,
    title: "Authentic Indonesian Recipe",
    description:
      "Our recipes are passed down through generations, capturing the true essence of Indonesian culinary heritage in every bite.",
  },
  {
    icon: ShieldCheck,
    title: "Hygienic & Halal",
    description:
      "Produced in a certified hygienic facility with strict halal standards, giving you peace of mind with every purchase.",
  },
  {
    icon: Snowflake,
    title: "Frozen Fresh Technology",
    description:
      "Advanced flash-freezing technology locks in nutrients and flavor at peak freshness, so it tastes just like it was freshly made.",
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
    <section className="bg-warm-beige py-24 lg:py-32" aria-labelledby="why-choose-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold">
            Why Choose Us
          </p>
          <h2
            id="why-choose-heading"
            className="mt-3 font-heading text-3xl font-bold tracking-tight text-dark-green md:text-4xl"
          >
            Crafted with Care, Delivered with Quality
          </h2>
          <p className="mt-4 text-base leading-relaxed text-dark-green/60">
            Every product reflects our commitment to quality, tradition, and
            innovation — from fresh catch to your doorstep.
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
