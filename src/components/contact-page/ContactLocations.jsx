import { useLangContext } from "../../context/LangContext";

// Import Map
import MapImg from "../../imgs/contact-page/map.png";

// Import Icons
import { CgDatabase } from "react-icons/cg";
import { TiLocation } from "react-icons/ti";

// Import motion
import { motion } from "framer-motion";

const ContactLocations = () => {
  const { lang } = useLangContext();
  return (
    <section className="bg-body-secondary">
      <div className="container mx-auto py-12 px-4 lg:px-12">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "backInOut" }}
          className="section-title w-fit mx-auto"
        >
          {lang == "en" ? "Our Locations" : "اماكننا"}
        </motion.h2>
        {/* Content */}
        <div
          className="flex justify-between items-between
        max-lg:flex-col-reverse max-lg:items-center max-lg:gap-8"
        >
          {/* Locations */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "backInOut" }}
            className="flex flex-col justify-around gap-4 max-lg:flex-row max-sm:flex-col"
          >
            {/* Data Location */}
            <LocationCard
              title={lang == "en" ? "Our Data Location" : "مكان بيناتنا"}
              list={[
                ["At Necron, we always aim to", "في نيكرون نهدف الى"],
                ["At Necron, we always aim to", "في نيكرون نهدف الى"],
                ["At Necron, we always aim to", "في نيكرون نهدف الى"],
              ]}
              lang={lang}
            >
              <CgDatabase className="text-[32px] text-primary" />
            </LocationCard>
            {/* Company Location */}
            <LocationCard
              title={lang == "en" ? "Company Location" : "مكان الشركة"}
              list={[
                ["At Necron, we always aim to", "في نيكرون نهدف الى"],
                ["At Necron, we always aim to", "في نيكرون نهدف الى"],
                ["At Necron, we always aim to", "في نيكرون نهدف الى"],
              ]}
              lang={lang}
            >
              <TiLocation className="text-[32px] text-primary" />
            </LocationCard>
          </motion.div>
          {/* Map */}
          <motion.img
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "backInOut" }}
            loading="lazy"
            src={MapImg}
            alt="Map"
            className="object-contain max-2xl:w-[700px] max-xl:w-[500px]"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactLocations;

const LocationCard = ({ children, title, list, lang }) => {
  return (
    <div
      className="rounded-[4px] border-[1px] border-primary p-6 md:p-8 bg-body-primary xl:min-w-[429px]
    hover__glow-sm duration-300"
    >
      {/* Title */}
      <div className="flex items-center gap-4 md:gap-8">
        <div className="border-[2px] border-primary rounded-full aspect-square p-4">
          {children}
        </div>
        <h3 className="font-bold text-[20px] md:text-[26px]">{title}</h3>
      </div>
      {/* Description */}
      <ul className="text-paragraph mt-6 md:mt-10 list__bullets pl-4">
        {list.map(([itemEN, itemAR], index) => (
          <li key={index}>{lang == "en" ? itemEN : itemAR}</li>
        ))}
      </ul>
    </div>
  );
};
