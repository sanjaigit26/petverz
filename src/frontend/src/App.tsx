import Header from "./components/layout/Header";
import BusinessModel from "./components/sections/BusinessModel";
import CoreInsight from "./components/sections/CoreInsight";
import Footer from "./components/sections/Footer";
import Hero from "./components/sections/Hero";
import Market from "./components/sections/Market";
import Problem from "./components/sections/Problem";
import ProductDemo from "./components/sections/ProductDemo";
import Roadmap from "./components/sections/Roadmap";
import Solution from "./components/sections/Solution";
import Vision from "./components/sections/Vision";
import WhyNow from "./components/sections/WhyNow";
import WhyPetverz from "./components/sections/WhyPetverz";

export default function App() {
  return (
    <div className="dark min-h-screen" style={{ background: "#0B0F1A" }}>
      <Header />
      <main>
        <Hero />
        <Problem />
        <CoreInsight />
        <Solution />
        <ProductDemo />
        <WhyNow />
        <Market />
        <BusinessModel />
        <WhyPetverz />
        <Roadmap />
        <Vision />
      </main>
      <Footer />
    </div>
  );
}
