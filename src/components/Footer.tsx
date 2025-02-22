import { FC } from "react";
import { FaLinkedin } from "react-icons/fa";

const Footer: FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <p>
            © {new Date().getFullYear()} Pirovano Engineering srl - P.Iva
            07607810962
          </p>
          <a
            href="https://www.linkedin.com/company/pirovano-engineering-srl/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-white hover:text-primary-red transition-colors duration-200"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
