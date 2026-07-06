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
    icon: Fish,
    title: "Fresh Fish",
    description: "Sourced from trusted local fishermen daily",
  },
  {
    icon: Factory,
    title: "Hygienic Processing",
    description: "Prepared in a certified clean facility",
  },
  {
    icon: Package,
    title: "Vacuum Packaging",
    description: "Sealed to preserve freshness and flavor",
  },
  {
    icon: Thermometer,
    title: "Frozen Storage",
    description: "Flash-frozen at optimal temperature",
  },
  {
    icon: Truck,
    title: "Delivered Fresh",
    description: "Cold-chain delivery to your doorstep",
  },
];

export function ProductionProcess() {
  return (
    <section
      className="bg-warm-beige py-24 lg:py-32"
      aria-labelledby="process-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold">
            Our Process
          </p>
          <h2
            id="process-heading"
            className="mt-3 font-heading text-3xl font-bold tracking-tight text-dark-green md:text-4xl"
          >
            From Ocean to Your Table
          </h2>
          <p className="mt-4 text-base leading-relaxed text-dark-green/60">
            Every step of our production is designed to deliver the freshest,
            most authentic frozen seafood experience.
          </p>
        </div>

        {/* Desktop horizontal timeline */}
        <div className="mt-16 hidden lg:block">
          <div className="relative flex items-start justify-between">
            {/* Connecting line */}
            <div
              className="absolute top-6 left-[10%] right-[10%] h-px bg-gold/30"
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
                  <div className="relative z-10 flex size-12 items-center justify-center rounded-full border-2 border-gold bg-white text-gold">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>

                  {/* Step number */}
                  <span className="mt-3 text-xs font-semibold uppercase tracking-wider text-gold">
                    Step {index + 1}
                  </span>

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
              className="absolute top-2 bottom-2 left-3 w-px bg-gold/30"
              aria-hidden="true"
            />

            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="relative flex gap-6">
                  {/* Step dot */}
                  <div className="absolute -left-8 flex size-6 items-center justify-center rounded-full border-2 border-gold bg-white">
                    <div className="size-2 rounded-full bg-gold" />
                  </div>

                  {/* Step content */}
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-gold">
                      Step {index + 1}
                    </span>
                    <h3 className="mt-1 flex items-center gap-2 font-heading text-base font-semibold text-dark-green">
                      <Icon
                        className="size-4 text-gold"
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
