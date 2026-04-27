import { useEffect, useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("overview");

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const sections = ["overview", "retail", "luxury", "events"];

    const handleScroll = () => {
      let current = "overview";

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop - 120;
          if (window.scrollY >= top) current = id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full flex justify-between items-center px-10 py-6 bg-black/60 backdrop-blur-xl border-b border-white/10 z-50">

      {/* LOGO */}
      <h1 className="font-bold text-lg tracking-wide">
        DIGIDECK
      </h1>

      {/* NAV ITEMS */}
      <div className="flex gap-8 text-sm">

        {["overview", "retail", "luxury", "events"].map((item) => (
          <button
            key={item}
            onClick={() => scrollTo(item)}
            className={`transition ${
              active === item
                ? "text-white font-semibold"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </button>
        ))}

      </div>
    </div>
  );
}