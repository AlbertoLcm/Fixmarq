import Footer from "../components/common/Footer";
import About from "../components/home/About";
import Contact from "../components/home/Contact";
import Gallery from "../components/home/Gallery";
import Inicio from "../components/home/Inicio";
import Services from "../components/home/Services";

function Home() {
  return (
    <main>
      <Inicio />
      <About />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}

export default Home;
