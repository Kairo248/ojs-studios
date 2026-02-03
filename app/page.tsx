import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
// import Portfolio from "./components/Portfolio";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      {/* <Portfolio /> */}
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
