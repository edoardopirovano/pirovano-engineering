import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

const Hero = () => {
  const { t } = useTranslation()

  return (
    <div
      id="home"
      className="relative h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(/slide/00.jpg)'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
      
      <div className="relative h-full flex items-center justify-center text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="px-4"
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {t('hero.title')}
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl max-w-2xl mx-auto drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {t('hero.subtitle')}
          </motion.p>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero 