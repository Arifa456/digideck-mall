import { useEffect, useState } from "react";

export default function ProgressBar() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const total =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const current = window.scrollY;
      setScroll((current / total) * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] bg-transparent z-50">
      <div
        className="h-full bg-white transition-all duration-200"
        style={{ width: `${scroll}%` }}
      ></div>
    </div>
  );
}