import { motion } from "framer-motion";
import { FaReact, FaPhp, FaDatabase } from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiMysql,
  SiLaravel,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    { id: 1, name: "React Js", icon: <FaReact />, color: "text-cyan-400" },
    {
      id: 2,
      name: "JavaScript",
      icon: <SiJavascript />,
      color: "text-yellow-400",
    },
    {
      id: 3,
      name: "Tailwindcss",
      icon: <SiTailwindcss />,
      color: "text-sky-400",
    },
    { id: 4, name: "Php", icon: <FaPhp />, color: "text-indigo-400" },
    { id: 5, name: "Laravel", icon: <SiLaravel />, color: "text-red-500" },
    { id: 6, name: "MySQL", icon: <SiMysql />, color: "text-blue-400" },
    {
      id: 7,
      name: "Database",
      icon: <FaDatabase />,
      color: "text-emerald-400",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800 text-white px-6 md:px-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Mes compétences
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {skills.map((skill) => (
          <motion.div
            key={skill.id}
            className="flex flex-col items-center bg-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className={`text-5xl mb-3 ${skill.color}`}>{skill.icon}</div>
            <p className="text-lg font-semibold">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
