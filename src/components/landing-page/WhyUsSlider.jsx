import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { useLangContext } from "../../context/LangContext";

const WhyUsSlider = ({ children }) => {
  const { lang } = useLangContext();
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "backInOut" }}
      ref={carousel}
      whileTap={{ cursor: "grabbing" }}
      className="flex justify-start mx-auto overflow-hidden cursor-grab relative
      max-w-[1350px] 2xl:max-w-[1280px]"
    >
      <motion.div
        drag="x"
        dragConstraints={
          lang == "en" ? { right: 0, left: -width } : { right: width, left: 0 }
        }
        className="flex gap-6 px-3 py-[1px]"
      >
        {children}
      </motion.div>
      {/* Fade */}
      <div className="absolute left-[-1px] h-full w-4 bg-gradient-to-r from-body-secondary to-transparent pointer-events-none" />
      <div className="absolute right-[-1px] h-full w-4 bg-gradient-to-l from-body-secondary to-transparent pointer-events-none" />
    </motion.div>
  );
};

export default WhyUsSlider;
