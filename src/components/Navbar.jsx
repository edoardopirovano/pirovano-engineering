import { useTranslation } from 'react-i18next'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'
import LanguageToggle from './LanguageToggle'
const Navbar = () => {
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
          <LanguageToggle />
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <LanguageToggle />
        </div>
      </div>
    </motion.nav>
  )
}

Navbar.propTypes = {
  currentLang: PropTypes.string.isRequired,
  toggleLanguage: PropTypes.func.isRequired
}

export default Navbar 