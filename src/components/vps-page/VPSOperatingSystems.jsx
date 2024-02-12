import { useLangContext } from "../../context/LangContext";
import SecondSectionCard from "../SecondSectionCard";

// Import Images
import WindowsIcon from "../../imgs/vps-page/windows-icon.png";
import UbuntuIcon from "../../imgs/vps-page/ubuntu-icon.png";
import DebianIcon from "../../imgs/vps-page/debian-icon.png";
import CentOSIcon from "../../imgs/vps-page/centos-icon.png";

// Import motion
import { motion } from "framer-motion";

const VPSOperatingSystems = () => {
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
          {lang == "en" ? "Operating System" : "انظمة التشغيل"}
        </motion.h2>
        <div
          className="grid grid-cols-4 gap-x-6 lg:gap-x-8 gap-y-4 xl:gap-12
          max-xl:grid-cols-2 max-sm:grid-cols-1"
        >
          {/* Iterate through features and display them in cards */}
          {[
            ["Windows System", "نظام ويندوز", WindowsIcon],
            ["Ubuntu System", "نظام اوبونتو", UbuntuIcon],
            ["Debian System", "نظام ديبيان", DebianIcon],
            ["CentOS System", "نظام CentOS", CentOSIcon],
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

export default VPSOperatingSystems;
