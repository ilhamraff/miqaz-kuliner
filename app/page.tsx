import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { WhyChoose } from "@/components/why-choose";
import { FeaturedProducts } from "@/components/featured-products";
import { ProductionProcess } from "@/components/production-process";
import { About } from "@/components/about";
import { Gallery } from "@/components/gallery";
import { Faq } from "@/components/faq";
import { FinalCta } from "@/components/final-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyChoose />
        <FeaturedProducts />
        <ProductionProcess />
        <About />
        <Gallery />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
