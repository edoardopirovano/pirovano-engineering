import { FC } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

interface ContactInfoProps {
  icon: string;
  text: string;
}

const ContactInfo: FC<ContactInfoProps> = ({ icon, text }) => (
  <div className="flex items-center space-x-3 p-2">
    <div className="text-2xl text-primary-red">{icon}</div>
    {text.includes("@") ? (
      <a
        href={`mailto:${text}`}
        className="text-lg text-primary-blue hover:text-primary-red transition-colors duration-200"
      >
        {text}
      </a>
    ) : (
      <p className="text-lg">{text}</p>
    )}
  </div>
);

const Contact: FC = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold mb-4 text-primary-red">
          {t("contact.title")}
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          className="space-y-6 md:col-start-1 h-full"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="h-full w-[90%] mx-auto">
            <iframe
              name="Google Maps"
              title="Google Maps"
              src="https://maps.google.com/maps?q=pirovano%20engineering&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "500px" }}
              allowFullScreen={true}
              loading="lazy"
              className="rounded-lg shadow-lg h-full"
            />
          </div>
        </motion.div>

        <motion.div
          className="space-y-6 md:col-start-2"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.form
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            action="https://formspree.io/f/xyzkoavb"
            method="POST"
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                {t("contactUs.email")}
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-red focus:ring-primary-red"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                {t("contactUs.message")}
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-red focus:ring-primary-red"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary-blue text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors duration-200 cursor-pointer"
            >
              {t("contactUs.submit")}
            </button>
          </motion.form>

          <motion.div
            className="space-x-8 mt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ContactInfo icon="📍" text={t("contact.address")} />
            <ContactInfo icon="📞" text={t("contact.phone")} />
            <ContactInfo icon="✉️" text={t("contact.email")} />
            <ContactInfo icon="✉️" text={t("contact.email2")} />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
