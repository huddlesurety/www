import { Navigation } from "@/components/navigation";
import { Contact } from "@/components/sections/contact";
import { Features } from "@/components/sections/features";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
