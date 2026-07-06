import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  name: string;
  description: string;
  image: string;
  alt: string;
}

const products: ProductCardProps[] = [
  {
    name: "Pempek Premium",
    description:
      "Our signature South Sumatran fish cake, made with the finest tenggiri fish and a perfect blend of traditional spices. Served best with rich cuko vinegar sauce.",
    image: "/images/product-pempek.png",
    alt: "Pempek premium Indonesian fish cake with vinegar sauce",
  },
  {
    name: "Otak-Otak Panggang",
    description:
      "Grilled fish paste wrapped in fragrant banana leaf, infused with aromatic spices and coconut milk. A classic Indonesian delicacy with a smoky finish.",
    image: "/images/product-otakotak.png",
    alt: "Otak-otak panggang grilled fish cake in banana leaf",
  },
  {
    name: "Rendang Abon Ikan",
    description:
      "Premium dry-shredded fish simmered in a rich rendang sauce with authentic Padang spices. Intensely flavorful, perfect as a topping or side dish.",
    image: "/images/product-rendang.png",
    alt: "Rendang abon ikan dry shredded fish with Padang spices",
  },
];

function ProductCard({ name, description, image, alt }: ProductCardProps) {
  return (
    <article className="group overflow-hidden rounded-xl border border-border bg-white transition-all duration-300 hover:shadow-xl hover:shadow-dark-green/5">
      {/* Product image */}
      <div className="relative aspect-4/3 overflow-hidden">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Card content */}
      <div className="p-6 lg:p-8">
        <h3 className="font-heading text-xl font-semibold text-dark-green">
          {name}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-dark-green/60">
          {description}
        </p>
        <Link
          href="#products"
          className="mt-4 inline-flex h-auto items-center gap-1.5 p-0 text-sm font-semibold text-gold underline-offset-4 transition-colors hover:text-gold-dark hover:underline"
        >
          Learn More
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}

export function FeaturedProducts() {
  return (
    <section
      id="products"
      className="bg-white py-24 lg:py-32"
      aria-labelledby="products-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold">
            Our Products
          </p>
          <h2
            id="products-heading"
            className="mt-3 font-heading text-3xl font-bold tracking-tight text-dark-green md:text-4xl"
          >
            Premium Frozen Selections
          </h2>
          <p className="mt-4 text-base leading-relaxed text-dark-green/60">
            Each product is carefully crafted to deliver the authentic taste of
            Indonesian culinary heritage — frozen fresh, ready to enjoy.
          </p>
        </div>

        {/* Product grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
