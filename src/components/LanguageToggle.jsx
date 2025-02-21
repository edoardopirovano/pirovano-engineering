import { useTranslation } from 'react-i18next'
import { useState } from 'react'

const LanguageToggle = () => {
  const { i18n } = useTranslation()
  const [currentLang, setCurrentLang] = useState(i18n.language)

  const toggleLanguage = () => {
    const newLang = currentLang === 'it' ? 'en' : 'it'
    setCurrentLang(newLang)
    i18n.changeLanguage(newLang)
  }

  return (
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
  )
}

export default LanguageToggle