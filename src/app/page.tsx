import Hero from "@/components/sections/Hero";
import Catalog from "@/components/sections_kiwi/Catalog";
//import About from "@/components/sections/About";
import Historia from "@/components/sections_kiwi/Historia";

export default function Home() {
  return (
    <div >
      <main >
        <Hero />
        <Catalog />
        {/* <About /> */}
        <Historia />
      </main>
    </div>
  );
}
