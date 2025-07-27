import Header from "@/components/layout/Header/Header";
import Hero from "@/components/sections/Hero/Hero";
import Catalog from "@/components/sections/Catalog/Catalog";
import Story from "@/components/sections/Story/Story";

export default function Home() {
  return (
    <main className="home-page-container">
      <Header />
      <Hero />
      <Catalog />
      <Story />
    </main>
  );
}