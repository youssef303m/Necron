import ImgToText from "../ImgToText";
import TextToImg from "../TextToImg";

import ControlPanelImg1 from "../../imgs/minecraft-page/control-panel-1.png";
import ControlPanelImg2 from "../../imgs/minecraft-page/control-panel-2.png";
import ControlPanelImg3 from "../../imgs/minecraft-page/control-panel-3.png";
import { useLangContext } from "../../context/LangContext";

// Import motion
import { motion } from "framer-motion";

const MinecraftControlPanel = () => {
  const { lang } = useLangContext();
  return (
    <section className="bg-body-secondary overflow-hidden">
      <div className="container mx-auto py-12 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "backInOut" }}
          className="section-title w-fit mx-auto"
        >
          {lang == "en" ? "Control Panel Features" : "خصائص لوحة التحكم"}
        </motion.h2>
        <div className="flex flex-col gap-24">
          {/* Feature 1 */}
          <div>
            <ImgToText
              img={ControlPanelImg1}
              title={
                lang == "en"
                  ? "Custom Server Control Panel"
                  : "لوحة تحكم مخصصة للسيرفر"
              }
              description={
                lang == "en"
                  ? "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusm tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet consectetur  magna aliqua Lorem ipsum dolor sit amet consectetur"
                  : "هذا النص هو مثال لنص يمكن تعديله او استبداله في نفس المساحة وقد تم استخدامه لعرض شكل التصميم بشكل واقعي لتجربة افضل ورؤية اوضح وقت التطوير"
              }
            />
          </div>
          {/* Feature 2 */}
          <div>
            <TextToImg
              img={ControlPanelImg2}
              title={lang == "en" ? "1,000+ ModPacks" : "اكثر من 1,000 مود باك"}
              description={
                lang == "en"
                  ? "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusm tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet consectetur  magna aliqua Lorem ipsum dolor sit amet consectetur"
                  : "هذا النص هو مثال لنص يمكن تعديله او استبداله في نفس المساحة وقد تم استخدامه لعرض شكل التصميم بشكل واقعي لتجربة افضل ورؤية اوضح وقت التطوير"
              }
            />
          </div>
          {/* Feature 3 */}
          <div>
            <ImgToText
              img={ControlPanelImg3}
              title={
                lang == "en" ? "Automatic Daily Backup" : "نسخ احتياطي يومي"
              }
              description={
                lang == "en"
                  ? "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusm tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet consectetur  magna aliqua Lorem ipsum dolor sit amet consectetur"
                  : "هذا النص هو مثال لنص يمكن تعديله او استبداله في نفس المساحة وقد تم استخدامه لعرض شكل التصميم بشكل واقعي لتجربة افضل ورؤية اوضح وقت التطوير"
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinecraftControlPanel;
