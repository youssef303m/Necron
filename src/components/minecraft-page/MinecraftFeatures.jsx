import { useLangContext } from "../../context/LangContext";

// Import Icons
import { FaJava } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { LuDatabase } from "react-icons/lu";
import { AiOutlineControl } from "react-icons/ai";

// Import motion
import { motion } from "framer-motion";

const MinecraftFeatures = () => {
  const { lang } = useLangContext();
  return (
    <section className="bg-body-secondary overflow-hidden">
      <div className="container mx-auto text-center py-12 px-4 flex justify-between max-lg:flex-col items-center gap-16">
        {/* Title and Description */}
        <motion.div
          initial={{ opacity: 0, x: lang == "en" ? -100 : 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "backInOut" }}
        >
          {/* Section Title */}
          <h2 className="section-title-2 w-fit max-lg:mx-auto">
            {lang == "en" ? "Minecraft Features" : "مميزات ماينكرافت"}
          </h2>
          {/* Section Description */}
          <p className="text-paragraph lg:text-start max-w-[516px]">
            {lang == "en"
              ? `Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusm
            tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor
            sit amet consectetur magna aliqua Lorem ipsum dolor sit amet
            consectetur`
              : `هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.`}
          </p>
        </motion.div>
        {/* Features */}
        <motion.div
          initial={{ opacity: 0, x: lang == "en" ? 100 : -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "backInOut" }}
          className="grid md:grid-cols-2 items-center center lg:w-[90%] xl:w-[60%] gap-x-12 gap-y-8"
        >
          {/* Support Java and Bedrock */}
          <SingleFeature
            title={
              lang == "en" ? "Support Java and Bedrock" : "دعم جافا وبيدروك"
            }
            description={
              lang == "en"
                ? "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusm tempor"
                : "هذا النص هو مثال لنص يمكن ان يعدل او يستبدل في نفس المساحة وتم استخدامه لعرض التصميم بشكل لائق"
            }
          >
            {/* Feature Icon */}
            <FaJava className="text-[64px] md:text-[86px] text-primary" />
          </SingleFeature>
          {/* 24/7 Technical Support */}
          <SingleFeature
            title={lang == "en" ? "24/7 Technical Support" : "دعم فني 24/7"}
            description={
              lang == "en"
                ? "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusm tempor"
                : "هذا النص هو مثال لنص يمكن ان يعدل او يستبدل في نفس المساحة وتم استخدامه لعرض التصميم بشكل لائق"
            }
          >
            {/* Feature Icon */}
            <BiSupport className="text-[64px] md:text-[86px] text-primary" />
          </SingleFeature>
          {/* Unlimited Storage */}
          <SingleFeature
            title={lang == "en" ? "Unlimited Storage" : "مساحة غير محدودة"}
            description={
              lang == "en"
                ? "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusm tempor"
                : "هذا النص هو مثال لنص يمكن ان يعدل او يستبدل في نفس المساحة وتم استخدامه لعرض التصميم بشكل لائق"
            }
          >
            {/* Feature Icon */}
            <LuDatabase className="text-[64px] md:text-[86px] text-primary" />
          </SingleFeature>
          {/* Customized Control Panel */}
          <SingleFeature
            title={
              lang == "en" ? "Customized Control Panel" : "لوحة تحكم مخصصة"
            }
            description={
              lang == "en"
                ? "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusm tempor"
                : "هذا النص هو مثال لنص يمكن ان يعدل او يستبدل في نفس المساحة وتم استخدامه لعرض التصميم بشكل لائق"
            }
          >
            {/* Feature Icon */}
            <AiOutlineControl className="text-[64px] md:text-[86px] text-primary" />
          </SingleFeature>
        </motion.div>
      </div>
    </section>
  );
};

const SingleFeature = ({ title, description, children }) => {
  return (
    <div className="flex justify-center gap-6 max-md:flex-col max-md:items-center">
      {/* Feature Icon */}
      {children}
      {/* Feature Info */}
      <div className="text-start">
        <h3 className="text-[20px] xl:text-[22px] font-bold max-md:text-center select-text">
          {title}
        </h3>
        <p className="text-paragraph max-xl:text-[14px] max-md:text-center select-text max-w-[516px]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default MinecraftFeatures;
