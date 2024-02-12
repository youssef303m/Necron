import { useLangContext } from "../../context/LangContext";

// Import Icons
import { BsCheckCircleFill } from "react-icons/bs";
import { FaQuestionCircle } from "react-icons/fa";

// Import Link
import { Link } from "react-router-dom";

// Import motion
import { motion } from "framer-motion";

const LandingPricingCard = ({
  title,
  icon,
  startingPrice,
  features,
  url,
  specialStyles,
  isFixedPrice,
}) => {
  const { lang } = useLangContext();
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "backInOut" }}
      className={`p-8 rounded-[4px] bg-body-secondary flex flex-col justify-between ${specialStyles}`}
    >
      {/* Header */}
      <div className="flex justify-between items-center">
        <h3 className="text-[22px] font-semibold select-text">{title}</h3>
        <img loading="lazy" src={icon} alt="" />
      </div>
      {/* Price */}
      <div className="mt-3">
        <span className="text-primary text-[14px]">
          {isFixedPrice
            ? lang == "en"
              ? "Only with"
              : "فقط بسعر"
            : lang == "en"
            ? "Starting from"
            : "تبدأ من"}
        </span>
        <div className="text-[32px] font-bold select-text">
          {lang == "en" ? `$${startingPrice}` : `${startingPrice} دولار`}
          <span className="text-[18px] font-medium text-primary">
            {lang == "en" ? "/month" : "/شهر"}
          </span>
        </div>
      </div>
      {/* Separator */}
      <div className="h-[2px] w-full bg-primary opacity-25 my-9" />
      {/* Features */}
      <div className="flex flex-col gap-3">
        {features.map(
          ([featureEN, featureAR, featureHintEN, featureHintAR], index) => (
            <div key={index} className="flex items-center gap-2">
              <BsCheckCircleFill className="text-primary text-[18px]" />
              <span className="text-[15px] font-[400] select-text flex items-center justify-between w-full">
                {lang == "en" ? featureEN : featureAR}
                {featureHintEN && featureHintAR && (
                  <span className="text-primary relative">
                    <FaQuestionCircle
                      className={`${
                        lang == "ar"
                          ? "plan-question-mark-rtl"
                          : "plan-question-mark"
                      }`}
                    />
                    <div>{lang == "en" ? featureHintEN : featureHintAR}</div>
                  </span>
                )}
              </span>
            </div>
          )
        )}
      </div>
      {/* CTA */}
      <Link
        to={url}
        className="text-[20px] font-semibold block text-center p-3
        rounded-[4px] border-[1px] border-primary mt-8
        hover:bg-primary duration-300"
      >
        {lang == "en" ? "View More" : "معرفة المزيد"}
      </Link>
    </motion.div>
  );
};

export default LandingPricingCard;
