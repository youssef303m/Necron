import { useLangContext } from "../../context/LangContext";
import FeatureCard from "../FeatureCard";

import { FaUser } from "react-icons/fa";
import { AiOutlineControl } from "react-icons/ai";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaShieldHalved } from "react-icons/fa6";
import { IoIosSpeedometer } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";

// Import motion
import { motion } from "framer-motion";

const WebFeatures = () => {
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
          {lang == "en" ? "Discord Features" : "مزايا ديسكورد"}
        </motion.h2>
        {/* Feature Cards */}
        <div
          className="pt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-y-20 place-content-center w-fit mx-auto
        gap-x-8 xl:gap-x-16"
        >
          {/* Feature 1 */}
          <FeatureCard
            title={lang == "en" ? "Account Management" : "ادارة الحسابات"}
            description={
              lang == "en"
                ? "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusm tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet consectetur  magna aliqua Lorem ipsum dolor sit amet consectetur Lorem ipsum"
                : "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق."
            }
          >
            <FaUser className="text-[42px]" />
          </FeatureCard>
          {/* Feature 2 */}
          <FeatureCard
            title={lang == "en" ? "Control Panel" : "لوحة التحكم"}
            description={
              lang == "en"
                ? "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusm tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet consectetur  magna aliqua Lorem ipsum dolor sit amet consectetur Lorem ipsum "
                : "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق."
            }
          >
            <AiOutlineControl className="text-[58px]" />
          </FeatureCard>
          {/* Feature 3 */}
          <FeatureCard
            title={lang == "en" ? "Support Team" : "فريق الدعم"}
            description={
              lang == "en"
                ? "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusm tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet consectetur  magna aliqua Lorem ipsum dolor sit amet consectetur Lorem ipsum "
                : "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق."
            }
          >
            <RiCustomerService2Fill className="text-[58px]" />
          </FeatureCard>
          {/* Feature 4 */}
          <FeatureCard
            title={lang == "en" ? "Protection" : "الحماية"}
            description={
              lang == "en"
                ? "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusm tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet consectetur  magna aliqua Lorem ipsum dolor sit amet consectetur Lorem ipsum "
                : "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق."
            }
          >
            <FaShieldHalved className="text-[42px]" />
          </FeatureCard>
          {/* Feature 5 */}
          <FeatureCard
            title={lang == "en" ? "Performance" : "الأداء"}
            description={
              lang == "en"
                ? "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusm tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet consectetur  magna aliqua Lorem ipsum dolor sit amet consectetur Lorem ipsum "
                : "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق."
            }
          >
            <IoIosSpeedometer className="text-[58px]" />
          </FeatureCard>
          {/* Feature 6 */}
          <FeatureCard
            title={lang == "en" ? "Fast Delivery" : "سرعة التسليم"}
            description={
              lang == "en"
                ? "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusm tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet consectetur  magna aliqua Lorem ipsum dolor sit amet consectetur Lorem ipsum "
                : "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق."
            }
          >
            <TbTruckDelivery className="text-[58px]" />
          </FeatureCard>
        </div>
      </div>
    </section>
  );
};

export default WebFeatures;
