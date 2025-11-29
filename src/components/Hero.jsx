import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Aziz from "../assets/AzizDev.jpg";

function Particle({ size, x, y, delay }) {
  return (
    <motion.div
      className="absolute bg-amber-500 rounded-full opacity-20"
      style={{ width: size, height: size, top: y, left: x }}
      animate={{ y: [y, y - 20, y], opacity: [0.2, 0.6, 0.2] }}
      transition={{
        repeat: Infinity,
        duration: 4 + delay,
        ease: "easeInOut",
        delay,
      }}
    />
  );
}

export default function Hero() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const temp = Array.from({ length: 20 }).map(() => ({
      size: `${Math.random() * 8 + 4}px`,
      x: `${Math.random() * 100}%`,
      y: `${Math.random() * 100}%`,
      delay: Math.random() * 3,
    }));
    setParticles(temp);
  }, []);

  return (
    <section
      id="hero"
      className="h-screen relative flex flex-col-reverse md:flex-row items-center justify-center md:justify-around gap-10 px-6 md:px-16 text-white "
    >
      {/* Overlay pour mobile */}
      <div className="absolute inset-0 bg-black/40 md:hidden z-0"></div>

      {/* Particules */}
      {particles.map((p, i) => (
        <Particle key={i} {...p} />
      ))}

      {/* Texte + CTA */}
      <motion.div
        className="flex flex-col items-center gap-4 text-center md:text-left md:max-w-lg z-20  md:mt-0 "
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl md:text-5xl font-bold">
          Salut, je suis{" "}
          <span className="text-amber-600">Abdoul Aziz Diallo</span> alias{" "}
          <span className="text-amber-600 text-4xl md:text-5xl font-extrabold">
            Aziz<span className="text-white">Dev</span>
          </span>
        </h1>

        <p className="text-lg font-semibold md:text-xl text-gray-200">
          Développeur Front-End passionné par React et les interfaces modernes.
        </p>

        <a
          href="#contact"
          className="bg-amber-600 text-gray-900 mt-4 px-6 py-3 rounded-full text-lg font-semibold hover:bg-amber-900 transition-colors duration-300 w-1/2 md:w-auto text-center"
        >
          Me contacter
        </a>
      </motion.div>

      {/* Image desktop seulement */}
      <motion.div
        className="hidden md:flex justify-end z-10"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src={Aziz}
          alt="Aziz"
          className="w-48 md:w-64 lg:w-80 rounded-2xl border-4 border-amber-600 shadow-xl object-cover"
        />
      </motion.div>

      {/* Background mobile seulement */}
      <div
        className="absolute top-0 left-0 w-full h-full md:hidden bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${Aziz})` }}
      />
    </section>
  );
}
