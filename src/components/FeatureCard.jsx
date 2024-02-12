// Import motion
import { motion } from "framer-motion";

const FeatureCard = ({ title, description, children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "backInOut" }}
      className="bg-body-primary relative text-center pt-20
    rounded-[4px] border-primary border-[2px] max-w-[368px]
    pb-10 xl:pb-16
    duration-300 hover__glow-sm hover:translate-y-[-10px]"
    >
      {/* Title */}
      <h3 className="font-bold text-[24px] md:text-[28px] px-2 xl:px-4">
        {title}
      </h3>
      {/* Description */}
      <p className="mt-6 text-[14px] text-paragraph px-4 xl:px-9">
        {description}
      </p>
      {/* Icon */}
      <div
        className="w-[112px] text-primary aspect-square bg-body-primary
        rounded-full border-primary border-[2px]
        flex justify-center items-center
        absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        {children}
      </div>
    </motion.div>
  );
};

export default FeatureCard;
