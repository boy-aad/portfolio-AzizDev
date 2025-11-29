import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gray-900 text-white px-6 md:px-16"
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Contactez-moi
      </motion.h2>

      <motion.form
        className="max-w-xl mx-auto flex flex-col gap-4"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <input
          type="text"
          placeholder="Votre nom"
          required
          className="p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-amber-600"
        />
        <input
          type="email"
          placeholder="Votre email"
          required
          className="p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-amber-600"
        />
        <textarea
          placeholder="Votre message"
          required
          className="p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-amber-600"
        ></textarea>
        <button
          type="submit"
          className="bg-amber-600 text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-amber-900 transition-colors duration-300"
        >
          Envoyer
        </button>

        {sent && (
          <p className="text-green-400 text-center mt-3">
            Merci de m'avoir contacté 😊
          </p>
        )}
      </motion.form>
    </section>
  );
}
