import { FC } from "react";
import { useTranslation } from "react-i18next";
import { motion, Variants } from "framer-motion";

const About: FC = () => {
  const { t } = useTranslation();

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
  };

  return (
    <div className="container mx-auto">
      <motion.div
        className="text-center mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-4xl font-bold mb-4 text-primary-red"
          variants={textVariants}
          custom={0}
        >
          {t("about.title")}
        </motion.h2>
        <motion.p
          className="text-xl text-primary-blue max-w-3xl mx-auto"
          variants={textVariants}
          custom={1}
        >
          {t("about.description")}
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <motion.div
          className="space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p className="text-lg" variants={textVariants} custom={2}>
            {t("about.text1")}
          </motion.p>
          <motion.p className="text-lg" variants={textVariants} custom={3}>
            {t("about.text2")}
          </motion.p>
        </motion.div>

        <motion.div
          className="space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p className="text-lg" variants={textVariants} custom={4}>
            {t("about.text3")}
          </motion.p>
          <motion.p className="text-lg" variants={textVariants} custom={5}>
            {t("about.text4")}
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
