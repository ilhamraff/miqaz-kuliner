import {
  Fish,
  Factory,
  Package,
  Thermometer,
  Truck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ProcessStep {
  icon: LucideIcon;
  title: string;
  description: string;
}

const steps: ProcessStep[] = [
  {
    icon: Package,
    title: "Vacuum Eco-Packaging:",
    description: "Kemasan food-grade hampa udara untuk menjaga kualitas produk.",
  },
  {
    icon: Factory,
    title: "Pengawetan Alami",
    description: "Dibekukan tanpa pengawet sintetis agar rasa tetap autentik.",
  },
  {
    icon: Package,
    title: "Alur Terstandardisasi",
    description: "Mulai dari fillet, sterilisasi, hingga pembekuan cepat.",
  },
  {
    icon: Thermometer,
    title: "Siap Scale-Up",
    description: "Produksi modular siap memenuhi permintaan lebih besar.",
  },
];

export function ProductionProcess() {
  return (
    <section
      className="bg-yellow-brand py-24 lg:py-32"
      aria-labelledby="process-heading"
    >
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-red-brand">
            Our Process
          </p>
          <h2
            id="process-heading"
            className="mt-3 font-heading text-3xl font-bold tracking-tight text-dark-green md:text-4xl"
          >
            Teknologi & Skalabilitas Produksi
          </h2>
          <p className="mt-4 text-base leading-relaxed text-dark-green/60">
            Setiap tahapan proses produksi dirancang untuk menghadirkan cita rasa yang paling otentik dan berkualitas tinggi.
          </p>
        </div>

        {/* Desktop horizontal timeline */}
        <div className="mt-16 hidden lg:block">
          <div className="relative flex items-start justify-between">
            {/* Connecting line */}
            <div
              className="absolute top-6 left-[10%] right-[10%] h-px bg-red-brand"
              aria-hidden="true"
            />

            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="relative flex w-1/5 flex-col items-center text-center"
                >
                  {/* Step circle */}
                  <div className="relative z-10 flex size-12 items-center justify-center rounded-full border-2 border-red-brand bg-white text-red-brand">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>

                  {/* Step content */}
                  <h3 className="mt-2 font-heading text-sm font-semibold text-dark-green">
                    {step.title}
                  </h3>
                  <p className="mt-1 max-w-32 text-xs leading-relaxed text-dark-green/60">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="mt-16 lg:hidden">
          <div className="relative space-y-8 pl-8">
            {/* Vertical line */}
            <div
              className="absolute top-2 bottom-2 left-3 w-px bg-red-brand"
              aria-hidden="true"
            />

            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="relative flex gap-6">
                  {/* Step dot */}
                  <div className="absolute -left-8 flex size-6 items-center justify-center rounded-full border-2 border-red-brand bg-white">
                    <div className="size-2 rounded-full bg-red-brand" />
                  </div>

                  {/* Step content */}
                  <div>
                    <h3 className="mt-0 flex items-center gap-2 font-heading text-base font-semibold text-dark-green">
                      <Icon
                        className="size-4 text-red-brand mb-1"
                        aria-hidden="true"
                      />
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-dark-green/60">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
