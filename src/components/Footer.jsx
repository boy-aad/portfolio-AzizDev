import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} AzizDev. Tous droits réservés.</p>
        <div className="flex gap-6 text-2xl">
          <a
            href="https://github.com/dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-500"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/abdoul-aziz-diallo-44630726b/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-500"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:diallo.abdoulaziz0202@gmail.com"
            className="hover:text-amber-500"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}
