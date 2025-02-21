import { FC } from "react";
import { motion } from "framer-motion";
import "./i18n";
import { FaLinkedin } from "react-icons/fa";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Activities from "./components/Activities";
import About from "./components/About";
import Contact from "./components/Contact";
import ImageSlider from "./components/ImageSlider";

const App: FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <Hero />

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="px-4 py-16"
          id="activities"
        >
          <Activities />
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="px-4 bg-gray-50 py-16"
          id="about"
        >
          <About />
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="px-4 py-16"
          id="contact"
        >
          <Contact />
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="px-4 bg-gray-50 py-16"
        >
          <ImageSlider />
        </motion.section>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <p>
              © {new Date().getFullYear()} Pirovano Engineering srl - P.Iva
              07607810962
            </p>
            <a
              href="https://www.linkedin.com/company/pirovano-engineering-srl/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-white hover:text-primary-red transition-colors duration-200"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
