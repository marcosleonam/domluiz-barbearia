import Intro from "./components/Intro";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Servicos from "./components/Servicos";
import Galeria from "./components/Galeria";
import Sobre from "./components/Sobre";
import Agendamento from "./components/Agendamento";
import Local from "./components/Local";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function App() {
  return (
    <>
      <Intro />
      <Nav />
      <main className="min-h-screen">
        <Hero />
        <Marquee />
        <Servicos />
        <Galeria />
        <Sobre />
        <Agendamento />
        <Local />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
