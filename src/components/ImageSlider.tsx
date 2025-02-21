import { FC, useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

interface SlideImage {
  src: string;
  alt: string;
}

const images: SlideImage[] = [
  {
    src: "/slide/01.jpg",
    alt: "Progettazione meccanica Pirovano Engineering - Esempio di design industriale",
  },
  {
    src: "/slide/03.jpg",
    alt: "Automazione industriale - Macchinari progettati da Pirovano Engineering",
  },
  {
    src: "/slide/04.jpg",
    alt: "Consulenza tecnica - Progetti di ingegneria meccanica",
  },
  {
    src: "/slide/05.jpg",
    alt: "Design industriale - Soluzioni innovative Pirovano Engineering",
  },
  {
    src: "/slide/06.jpg",
    alt: "Progettazione meccanica - Dettaglio componenti industriali",
  },
  {
    src: "/slide/07.jpg",
    alt: "Ingegneria meccanica - Progetti realizzati da Pirovano Engineering",
  },
];

const variants: Variants = {
  enter: { opacity: 0 },
  center: { opacity: 1 },
  exit: { opacity: 0 },
};

const ImageSlider: FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesPreloaded, setImagesPreloaded] = useState(false);

  // Preload images
  useEffect(() => {
    const preloadImages = async (): Promise<void> => {
      const imagePromises = images.map((image) => {
        return new Promise<void>((resolve, reject) => {
          const img = new Image();
          img.src = image.src;
          img.onload = () => resolve();
          img.onerror = reject;
        });
      });

      try {
        await Promise.all(imagePromises);
        setImagesPreloaded(true);
      } catch (error) {
        console.error("Error preloading images:", error);
      }
    };

    preloadImages();
  }, []);

  // Start the slider only after images are preloaded
  useEffect(() => {
    if (!imagesPreloaded) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [imagesPreloaded]);

  return (
    <div className="container mx-auto relative h-[500px] overflow-hidden">
      <AnimatePresence initial={false} custom={currentIndex}>
        <motion.img
          key={currentIndex}
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          loading="eager"
          custom={currentIndex}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            opacity: { duration: 0.5 },
          }}
          className="absolute w-full h-full object-cover rounded-lg"
        />
      </AnimatePresence>
    </div>
  );
};

export default ImageSlider;
