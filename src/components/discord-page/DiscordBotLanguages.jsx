import { useLangContext } from "../../context/LangContext";
import SecondSectionCard from "../SecondSectionCard";

import DiscordPy from "../../imgs/discord-page/discord-py.png";
import DiscordJs from "../../imgs/discord-page/discord-js.png";
import DiscordJava from "../../imgs/discord-page/discord-java.png";

// Import motion
import { motion } from "framer-motion";

const DiscordBotLanguages = () => {
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
          {lang == "en" ? "Bots Languages" : "لغات البوتات"}
        </motion.h2>
        <div
          className="flex max-lg:grid grid-cols-3 place-content-center gap-4 lg:gap-4 xl:gap-12
    max-lg:grid-cols-1 px-[20px]"
        >
          {/* Iterate through features and display them in cards */}
          {[
            ["Discord.py", "Discord.py", DiscordPy],
            ["Discord.js", "Discord.js", DiscordJs],
            ["Discord.java", "Discord.java", DiscordJava],
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

export default DiscordBotLanguages;
