// Import motion
import { motion } from "framer-motion";

const ImgToText = ({ img, title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "backInOut" }}
      className="flex items-center w-fit mx-auto gap-24 xl:gap-32
    max-lg:flex-col max-lg:gap-8"
    >
      <div className="flex-1">
        <img
          loading="lazy"
          src={img}
          alt={title}
          className="object-contain rounded-[4px] glow-2 hover__glow-sm duration-300
          xl:max-w-[530px]
        border-r-primary border-l-primary border-r-[2px] border-l-[2px]"
        />
      </div>
      <div className="flex-1">
        <h3 className="text-[28px] sm:text-[32px] xl:text-[40px] font-bold text-primary max-lg:text-center select-text">
          {title}
        </h3>
        <p className="text-paragraph text-[14px] sm:text-[16px] xl:text-[18px] max-w-[516px] max-lg:text-center select-text mt-3">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default ImgToText;
