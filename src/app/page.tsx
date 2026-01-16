import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/sections/01-hero";
import { Features } from "@/components/sections/02-features";
import { Process } from "@/components/sections/03-process";
import { Contact } from "@/components/sections/04-contact";
import { Footer } from "@/components/sections/05-footer";

const Page = () => {
  return (
    <>
      <Navigation />
      <main >
        <Hero />
        <Features />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Page;
