import { useState } from "react";
// Import Arrow Icon
import { MdOutlineArrowDropDown } from "react-icons/md";
import { useLangContext } from "../context/LangContext";

// Import motion
import { motion } from "framer-motion";

const FAQuestion = ({ index, question, children }) => {
  const { lang } = useLangContext();
  const [isActive, setIsActive] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={`bg-body-secondary border-[1px] border-primary group mt-5
      duration-300 border-opacity-25 hover:border-opacity-100
      ${isActive && "!border-opacity-100"}`}
    >
      {/* Question */}
      <div
        className="flex justify-between p-5 items-center cursor-pointer"
        onClick={() => setIsActive((prev) => !prev)}
      >
        <h4
          className={`text-[18px] sm:text-[20px] flex gap-3 select-text
          duration-300 ${isActive && "text-primary"}`}
        >
          <span className="font-bold">
            {lang == "en" ? "Q" : "س"}
            {index}
          </span>
          {question}
        </h4>
        <MdOutlineArrowDropDown
          className={`text-[30px] duration-300 ${
            isActive ? "text-primary" : "-rotate-90"
          }`}
        />
      </div>
      {/* Answer */}
      <div
        className={`duration-300 px-5 bg-body-secondary grid border-t-primary border-t-[2px] border-opacity-0 ${
          isActive
            ? "grid-rows-[1fr] py-5 !border-opacity-25"
            : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden text-paragraph text-[14px] select-text select-text">
          {children}
        </div>
      </div>
    </motion.div>
  );
};

export default FAQuestion;
