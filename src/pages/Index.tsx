import { useEffect } from "react"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { Verticals } from "@/components/sections/Verticals"
import { About } from "@/components/sections/About"
import { News } from "@/components/sections/News"
import { Contact } from "@/components/sections/Contact"

const Index = () => {
  useEffect(() => {
    // Set home page title
    document.title = "LYNQ Satnaliwala Enterprises - Innovative Multi-Sector Solutions";
  }, []);

  return (
    <div className="min-h-screen matte-bg">
      <Header />
      <main>
        <Hero />
        <Verticals />
        <About />
        <News />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
