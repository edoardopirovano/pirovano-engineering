import { FC, useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "../styles/card.css";

interface ActivityCardProps {
  title: string;
  description: string;
  detailedDescription: string;
  skills: string[];
  icon: string;
  delay: number;
}

const ActivityCard: FC<ActivityCardProps> = ({
  title,
  description,
  detailedDescription,
  skills,
  icon,
  delay,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const backContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isFlipped && backContentRef.current) {
      backContentRef.current.scrollTop = 0;
    }
  }, [isFlipped]);

  return (
    <motion.div
      className="relative cursor-pointer perspective-1000 w-full h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative preserve-3d transition-transform duration-500 h-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
      >
        {/* Front of card */}
        <motion.div className="backface-hidden h-full">
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col h-full">
            <div className="text-4xl mb-4 flex justify-center">{icon}</div>
            <h3 className="text-2xl font-bold mb-3 text-primary-red">
              {title}
            </h3>
            <p className="text-lg font-medium text-primary-blue mb-4">
              {description}
            </p>
            <p className="text-gray-700 text-sm flex-grow">
              {detailedDescription}
            </p>
            <div className="flex items-center justify-end text-primary-blue mt-4">
              <FaAngleRight />
            </div>
          </div>
        </motion.div>

        {/* Back of card */}
        <motion.div
          className="backface-hidden absolute inset-0 h-full"
          style={{ transform: "rotateY(180deg)" }}
        >
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col h-full">
            <div className="flex-grow overflow-y-scroll" ref={backContentRef}>
              <h3 className="text-lg font-bold mb-2 text-primary-red">
                {title}
              </h3>
              <ul className="list-disc list-inside space-y-2 text-sm">
                {skills.map((skill, index) => (
                  <li key={index} className="text-gray-700">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center text-primary-blue mt-4 pt-2">
              <FaAngleLeft />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const Activities: FC = () => {
  const { t } = useTranslation();

  const activities: ActivityCardProps[] = [
    {
      title: t("activities.mechanical.title"),
      description: t("activities.mechanical.description"),
      detailedDescription: t("activities.mechanical.detailedDescription"),
      skills: t("activities.mechanical.skills", {
        returnObjects: true,
      }) as string[],
      icon: "⚙️",
      delay: 0,
    },
    {
      title: t("activities.design.title"),
      description: t("activities.design.description"),
      detailedDescription: t("activities.design.detailedDescription"),
      skills: t("activities.design.skills", {
        returnObjects: true,
      }) as string[],
      icon: "🎨",
      delay: 0.2,
    },
    {
      title: t("activities.consulting.title"),
      description: t("activities.consulting.description"),
      detailedDescription: t("activities.consulting.detailedDescription"),
      skills: t("activities.consulting.skills", {
        returnObjects: true,
      }) as string[],
      icon: "💡",
      delay: 0.4,
    },
  ];

  return (
    <div className="container mx-auto">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-4 text-primary-red">
          {t("activities.title")}
        </h2>
        <p className="text-xl text-primary-blue">{t("activities.subtitle")}</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 auto-rows-fr">
        {activities.map((activity, index) => (
          <ActivityCard key={index} {...activity} />
        ))}
      </div>
    </div>
  );
};

export default Activities;
