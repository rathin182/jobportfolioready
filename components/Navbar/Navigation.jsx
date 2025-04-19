import React, { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi"; // Hamburger & Close icons

const Navigation = () => {
  const [active, setActive] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleChange = (id) => {
    setActive(id);
    setMenuOpen(false); // close mobile menu on click
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "home", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
        isScrolled ? "bg-white/10 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center w-full h-16 px-4">
        <h1 className="text-xl font-bold">Rathin-WEB-Portfolio</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer ${
                active === item.id ? "text-[#bab6c9]" : ""
              }`}
            >
              <button onClick={() => handleChange(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col gap-4 px-4 pb-4 bg-white/10 backdrop-blur-md">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer ${
                active === item.id ? "text-[#8245ec]" : ""
              }`}
            >
              <button onClick={() => handleChange(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navigation;
