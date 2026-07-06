import Image from "next/image";

interface GalleryImage {
  src: string;
  alt: string;
  span: "tall" | "wide" | "normal";
}

const galleryImages: GalleryImage[] = [
  {
    src: "/images/hero-product.png",
    alt: "Premium pempek dish beautifully plated",
    span: "tall",
  },
  {
    src: "/images/product-pempek.png",
    alt: "Pempek premium with rich vinegar sauce",
    span: "normal",
  },
  {
    src: "/images/product-otakotak.png",
    alt: "Otak-otak panggang on rustic wooden board",
    span: "normal",
  },
  {
    src: "/images/product-rendang.png",
    alt: "Rendang abon ikan with aromatic spices",
    span: "wide",
  },
  {
    src: "/images/product-pempek.png",
    alt: "Close-up of freshly made pempek",
    span: "normal",
  },
  {
    src: "/images/product-otakotak.png",
    alt: "Grilled otak-otak ready to serve",
    span: "normal",
  },
];

const spanClasses = {
  tall: "md:row-span-2",
  wide: "md:col-span-2",
  normal: "",
};

export function Gallery() {
  return (
    <section
      id="gallery"
      className="bg-warm-beige py-24 lg:py-32"
      aria-labelledby="gallery-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold">
            Gallery
          </p>
          <h2
            id="gallery-heading"
            className="mt-3 font-heading text-3xl font-bold tracking-tight text-dark-green md:text-4xl"
          >
            A Glimpse of Our Craft
          </h2>
          <p className="mt-4 text-base leading-relaxed text-dark-green/60">
            From raw ingredients to beautifully plated dishes — explore the
            artistry behind every Miqaz creation.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="mt-16 grid gap-4 md:grid-cols-3 md:auto-rows-[240px]">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl ${spanClasses[img.span]}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-end bg-dark-green/0 p-4 transition-colors duration-300 group-hover:bg-dark-green/40">
                <p className="translate-y-4 text-sm font-medium text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {img.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
