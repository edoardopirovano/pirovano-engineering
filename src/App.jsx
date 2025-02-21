import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import './i18n'

// Components
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Activities from './components/Activities'
import About from './components/About'
import Contact from './components/Contact'
import ImageSlider from './components/ImageSlider'

function App() {
  const { i18n } = useTranslation()
  const [currentLang, setCurrentLang] = useState('it')

  const toggleLanguage = () => {
    const newLang = currentLang === 'it' ? 'en' : 'it'
    setCurrentLang(newLang)
    i18n.changeLanguage(newLang)
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar currentLang={currentLang} toggleLanguage={toggleLanguage} />
      
      <main>
        <Hero />
        
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="section py-16"
          id="activities"
        >
          <Activities />
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="section bg-gray-50 py-16"
          id="about"
        >
          <About />
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="section py-16"
          id="contact"
        >
          <Contact />
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="section bg-gray-50 py-16"
        >
          <ImageSlider />
        </motion.section>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container text-center">
          <p>© {new Date().getFullYear()} Pirovano Engineering srl - P.Iva 07607810962</p>
        </div>
      </footer>
    </div>
  )
}

export default App
