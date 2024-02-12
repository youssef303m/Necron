import { useLangContext } from "../../context/LangContext";
import SecondSectionCard from "../SecondSectionCard";

// Import Images
import PHPIcon from "../../imgs/webhosting-page/php-icon.png";
import HTMLIcon from "../../imgs/webhosting-page/html-icon.png";
import WordPressIcon from "../../imgs/webhosting-page/wordpress-icon.png";
import ReactIcon from "../../imgs/webhosting-page/react-icon.png";

// Import motion
import { motion } from "framer-motion";

const WebSystems = () => {
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
          {lang == "en" ? "Supported System" : "الأنظمة المدعومة"}
        </motion.h2>
        <div
          className="grid grid-cols-4 gap-x-6 lg:gap-x-8 gap-y-4 xl:gap-12
          max-xl:grid-cols-2 max-sm:grid-cols-1"
        >
          {/* Iterate through features and display them in cards */}
          {[
            ["PHP", "PHP", PHPIcon],
            ["HTML", "HTML", HTMLIcon],
            ["Wordpress", "Wordpress", WordPressIcon],
            ["React", "React", ReactIcon],
          ].map(([titleEN, titleAR, icon], index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.7,
                ease: "backInOut",
              }}
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

export default WebSystems;
