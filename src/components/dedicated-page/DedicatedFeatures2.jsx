import { useLangContext } from "../../context/LangContext";
import FeatureCard from "../FeatureCard";

import { MdSignalWifi4Bar } from "react-icons/md";
import { HiWifi } from "react-icons/hi2";
import { PiTrafficSignFill } from "react-icons/pi";
import { FaShield } from "react-icons/fa6";
import { FaStopwatch } from "react-icons/fa6";
import { AiOutlineFileDone } from "react-icons/ai";
import { FaShop } from "react-icons/fa6";

// Import motion
import { motion } from "framer-motion";

const DedicatedFeatures2 = () => {
  const { lang } = useLangContext();
  return (
    <section className="bg-body-secondary">
      <div className="container mx-auto text-center py-12 px-4">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "backInOut" }}
          className="section-title w-fit mx-auto"
        >
          {lang == "en" ? "Why Necron?" : "لماذا نيكرون؟"}
        </motion.h2>
        {/* Feature Cards */}
        <div
          className="pt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-y-20 place-content-center w-fit mx-auto
        gap-x-8 xl:gap-x-16"
        >
          {/* Feature 1 */}
          <FeatureCard
            title={lang == "en" ? "Fast Connectivity " : "إتصال سريع"}
            description={
              lang == "en"
                ? "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusm tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet consectetur  magna aliqua Lorem ipsum dolor sit amet consectetur Lorem ipsum"
                : "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق."
            }
          >
            <HiWifi className="text-[52px]" />
          </FeatureCard>
          {/* Feature 2 */}
          <FeatureCard
            title={lang == "en" ? "Unlimited Traffic" : "ترافيك لامحدود"}
            description={
              lang == "en"
                ? "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusm tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet consectetur  magna aliqua Lorem ipsum dolor sit amet consectetur Lorem ipsum "
                : "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق."
            }
          >
            <PiTrafficSignFill className="text-[58px]" />
          </FeatureCard>
          {/* Feature 3 */}
          <FeatureCard
            title={lang == "en" ? "Arbor DDoS-Protection" : "حماية ديدوس اربور"}
            description={
              lang == "en"
                ? "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusm tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet consectetur  magna aliqua Lorem ipsum dolor sit amet consectetur Lorem ipsum "
                : "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق."
            }
          >
            <FaShield className="text-[48px]" />
          </FeatureCard>
          {/* Feature 4 */}
          <FeatureCard
            title={lang == "en" ? "Extra fast support" : "دعم فائق السرعة"}
            description={
              lang == "en"
                ? "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusm tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet consectetur  magna aliqua Lorem ipsum dolor sit amet consectetur Lorem ipsum "
                : "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق."
            }
          >
            <FaStopwatch className="text-[48px]" />
          </FeatureCard>
          {/* Feature 5 */}
          <FeatureCard
            title={lang == "en" ? "Minimum contract time" : "الحد الادنى للعقد"}
            description={
              lang == "en"
                ? "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusm tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet consectetur  magna aliqua Lorem ipsum dolor sit amet consectetur Lorem ipsum "
                : "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق."
            }
          >
            <AiOutlineFileDone className="text-[52px]" />
          </FeatureCard>
          {/* Feature 6 */}
          <FeatureCard
            title={lang == "en" ? "Resellers Distinction" : "تمييز الموزعون"}
            description={
              lang == "en"
                ? "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusm tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet consectetur  magna aliqua Lorem ipsum dolor sit amet consectetur Lorem ipsum "
                : "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق."
            }
          >
            <FaShop className="text-[52px]" />
          </FeatureCard>
        </div>
      </div>
    </section>
  );
};

export default DedicatedFeatures2;
