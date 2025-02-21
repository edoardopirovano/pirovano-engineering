import { useTranslation } from 'react-i18next'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

const Navbar = ({ currentLang, toggleLanguage }) => {
  const { t } = useTranslation()

  const navItems = [
    { id: 'home', label: t('nav.home') },
    { id: 'activities', label: t('nav.activities') },
    { id: 'about', label: t('nav.about') },
    { id: 'contact', label: t('nav.contact') }
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-white shadow-md z-50"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="/logo.png"
            alt="Pirovano Engineering - Logo aziendale"
            loading="eager"
            className="h-12 w-auto"
          />
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-primary-blue hover:text-primary-red transition-colors duration-200 cursor-pointer"
            >
              {item.label}
            </Link>
          ))}
          
          <button
            onClick={toggleLanguage}
            className="ml-4 flex items-center space-x-1 cursor-pointer"
          >
            <span className={currentLang === 'it' ? 'text-primary-red' : 'text-gray-700'}>
              IT
            </span>
            <span className="text-gray-400">/</span>
            <span className={currentLang === 'en' ? 'text-primary-red' : 'text-gray-700'}>
              EN
            </span>
          </button>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </motion.nav>
  )
}

Navbar.propTypes = {
  currentLang: PropTypes.string.isRequired,
  toggleLanguage: PropTypes.func.isRequired
}

export default Navbar 