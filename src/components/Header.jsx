import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "./Logo";
import Nav from "./Nav";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [open, setOpen] = useState(false);

  // Fonction pour scroller vers une section et fermer le menu
  const handleScroll = (id) => {
    setOpen(false); // ferme le menu mobile
    setTimeout(() => {
      document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    }, 100); // petit délai pour que le menu ait le temps de se fermer
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900/20 backdrop-blur-md shadow-lg z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Nav Desktop */}
        <div className="hidden md:flex">
          <Nav />
        </div>

        {/* Burger Mobile */}
        <button
          className="md:hidden text-amber-500 text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-800 border-t border-gray-700"
          >
            <ul className="flex flex-col text-white text-center py-4 gap-4 text-xl">
              <li>
                <button
                  onClick={() => handleScroll("#hero")}
                  className="hover:text-amber-500"
                >
                  Hero
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll("#skills")}
                  className="hover:text-amber-500"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll("#projects")}
                  className="hover:text-amber-500"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll("#contact")}
                  className="hover:text-amber-500"
                >
                  Contact
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
