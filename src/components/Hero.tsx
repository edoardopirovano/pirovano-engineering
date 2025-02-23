import { FC } from "react";
import { useTranslation } from "react-i18next";

const Hero: FC = () => {
  const { t } = useTranslation();

  return (
    <div
      id="home"
      className="relative h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url(/slide/00.jpg)",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />

      <div className="relative h-full flex items-center justify-center text-white text-center">
        <div className="px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            {t("hero.title")}
          </h1>

          <p className="text-xl md:text-2xl max-w-2xl mx-auto drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            {t("hero.subtitle")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
