import { useLangContext } from "../../context/LangContext";
import SecondSectionCard from "../SecondSectionCard";

// Import Images
import OSIcon from "../../imgs/dedicated-page/windows-icon.png";
import InfrastructureIcon from "../../imgs/dedicated-page/infrastructure-icon.png";
import ScalabilityIcon from "../../imgs/dedicated-page/scalability-icon.png";
import DeploymentIcon from "../../imgs/dedicated-page/deployment-icon.png";

// Import motion
import { motion } from "framer-motion";

const DedicatedFeatures = () => {
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
          {lang == "en" ? "Dedicated Features" : "مزايا السيرفرات المخصصة"}
        </motion.h2>
        <div
          className="grid grid-cols-4 gap-x-6 lg:gap-x-8 gap-y-4 xl:gap-12
    max-xl:grid-cols-2 max-sm:grid-cols-1"
        >
          {/* Iterate through features and display them in cards */}
          {[
            ["Large OS selection", "العديد من أنظمة التشغيل", OSIcon],
            ["Redundant Infrastructure", "بنية تحتية قوية", InfrastructureIcon],
            ["Full Scalability", "قابلية كاملة للتوسع", ScalabilityIcon],
            ["Fast Deployment", "سرعة النشر", DeploymentIcon],
          ].map(([titleEN, titleAR, icon], index) => (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.7,
                ease: "backInOut",
              }}
              key={index}
            >
              <SecondSectionCard
                titleEN={titleEN}
                titleAR={titleAR}
                icon={icon}
                lang={lang}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DedicatedFeatures;
