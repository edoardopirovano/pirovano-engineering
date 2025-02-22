import { FC } from "react";
import { motion } from "framer-motion";
import "./i18n";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Activities from "./components/Activities";
import About from "./components/About";
import Contact from "./components/Contact";
import ImageSlider from "./components/ImageSlider";
import Footer from "./components/Footer";

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

      <Footer />
    </div>
  );
};

export default App;
