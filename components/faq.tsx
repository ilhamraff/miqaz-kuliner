import { MessageCircle, Quote } from "lucide-react";

interface Testimonial {
  content: string;
  name: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    content:
      "Trimakasih bu Moenz. Penpeknya enak, ikannya terasa. Pempeknya juga empuk ga alot.",
    name: "Euis Supriati",
    role: "Business Development Centre",
  },
  {
    content:
      "Pempek dari Miqaz, lezat dan enak. Apalagi cuko nya yang manis dan pedasnya pas.. buat aku yang gak doyan pedas. Sukses untuk Miqaz food ditunggu produk lainnya ya. Salam.",
    name: "Djarot MK",
    role: "Jurnalis TIMES Indonesia",
  },
];

export function Testimonials() {
  return (
    <section
      className="bg-white py-12 lg:py-24"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center pb-4">
          <p className="text-sm font-bold uppercase tracking-widest text-red-brand">
            Testimonial
          </p>
          <h2
            id="testimonials-heading"
            className="mt-3 font-heading text-3xl font-bold tracking-tight text-dark-green md:text-4xl"
          >
            Apa Kata Mereka?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-dark-green/60">
            Testimoni pelanggan yang telah merasakan kelezatan produk Miqaz.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="relative rounded-2xl border border-dark-green/10 bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-lg"
            >
              {/* Quote icon */}
              <Quote
                className="size-8 text-yellow-brand/60"
                aria-hidden="true"
              />

              {/* Content */}
              <blockquote className="mt-4">
                <p className="text-base leading-relaxed text-dark-green/80 italic">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
              </blockquote>

              {/* Author */}
              <div className="mt-6 flex items-center gap-4">
                {/* Avatar placeholder */}
                <div className="flex size-11 items-center justify-center rounded-full bg-yellow-brand text-sm font-bold text-white">
                  {/* {testimonial.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)} */}
                    <MessageCircle className="size-5"/>
                </div>
                <div>
                  <p className="text-sm font-semibold text-dark-green">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-dark-green/50">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
