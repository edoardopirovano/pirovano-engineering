import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

type Language = "it" | "en";

const LanguageToggle: FC = () => {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState<Language>(
    i18n.language as Language
  );

  useEffect(() => {
    // Check if the current route matches the language
    const path = window.location.pathname;
    const expectedPath = `/${currentLang}`;
    if (path !== expectedPath) {
      window.history.pushState({}, "", expectedPath);
    }
  }, [currentLang]);

  const toggleLanguage = () => {
    const newLang: Language = currentLang === "it" ? "en" : "it";
    i18n.changeLanguage(newLang);
    setCurrentLang(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="ml-4 flex items-center space-x-1 cursor-pointer"
      aria-label={
        currentLang === "it" ? "Switch to English" : "Passa all'italiano"
      }
    >
      <span
        className={currentLang === "it" ? "text-primary-red" : "text-gray-700"}
      >
        IT
      </span>
      <span className="text-gray-400">/</span>
      <span
        className={currentLang === "en" ? "text-primary-red" : "text-gray-700"}
      >
        EN
      </span>
    </button>
  );
};

export default LanguageToggle;
