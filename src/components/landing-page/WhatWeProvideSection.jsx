import ServerIcon from "../../icons/server.svg";
import PickaxeIcon from "../../icons/pickaxe.png";
import PlanetIcon from "../../icons/planet.svg";
import DiscordIcon from "../../icons/discord.svg";
import { useLangContext } from "../../context/LangContext";
import SecondSectionCard from "../SecondSectionCard";

// Import motion
import { motion } from "framer-motion";

const WhatWeProvideSection = () => {
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
          {lang == "en" ? "What we Provide?" : "ماذا نقدم؟"}
        </motion.h2>
        <div
          className="grid grid-cols-4 gap-4 lg:gap-4 xl:gap-12
        max-lg:grid-cols-2 max-sm:grid-cols-1"
        >
          {/* Iterate through features and display them in cards */}
          {[
            ["VPS Servers", "سيرفرات VPS", ServerIcon],
            ["Minecraft Servers", "سيرفرات ماينكرافت", PickaxeIcon],
            ["Website Hosting", "استضافة المواقع", PlanetIcon],
            ["Discord Bots", "بوتات ديسكورد", DiscordIcon],
          ].map(([titleEN, titleAR, icon], index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.2,
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

export default WhatWeProvideSection;
