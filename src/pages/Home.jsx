import Navbar from "../components/Navbar";
import CursorGlow from "../components/CursorGlow";   // 🔥 NEW

import Hero from "../sections/Hero";
import Why from "../sections/Why";
import Retail from "../sections/Retail";
import Luxury from "../sections/Luxury";
import Dining from "../sections/Dining";
import Entertainment from "../sections/Entertainment";
import Events from "../sections/Events";

export default function Home() {
  return (
    <div>

      {/* 🔥 INSANE CURSOR EFFECT */}
      <CursorGlow />

      {/* 🔥 NAVBAR */}
      <Navbar />

      {/* 🔥 SECTIONS */}
      <Hero />
      <Why />
      <Retail />
      <Luxury />
      <Dining />
      <Entertainment />
      <Events />

    </div>
  );
}