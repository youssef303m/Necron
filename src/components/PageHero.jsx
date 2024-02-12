// Import motion
import { motion } from "framer-motion";

const PageHero = ({ span, title, description, img, bgImg, lang }) => {
  return (
    <main className="pt-[76px] sm:pt-[96px] lg:pt-[110px] min-h-screen relative flex overflow-hidden">
      {/* Section */}
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: lang == "en" ? -100 : 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "backInOut" }}
          className="flex-1 max-lg:flex max-lg:flex-col max-lg:items-center max-lg:text-center"
        >
          <span
            className={`${
              lang == "en" && "tracking-[3px]"
            } text-primary font-normal
          max-lg:hidden`}
          >
            {span}
          </span>
          {/* Title */}
          <h1 className="font-bold text-[9vw] sm:text-[42px] md:text-[50px] leading-[120%] max-w-[560px]">
            {title}
          </h1>
          {/* Paragraph */}
          <p className="mt-6 leading-[140%] text-paragraph text-[14px] sm:text-[16px] md:text-[18px] max-w-[619px] select-text">
            {description}
          </p>
          {/* CTA */}
          <a
            href="#plans"
            className="text-[20px] font-semibold inline-block mt-12 py-[14px] px-[42px] bg-body-primary
        rounded-[4px] border-[1px] border-primary
        hover:bg-primary duration-300 hover__glow hover:tracking-[1px]"
          >
            {lang == "en" ? "View Plans" : "رؤية الخطط"}
          </a>
        </motion.div>
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: lang == "en" ? 100 : -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "backInOut" }}
          className="flex-1 max-lg:hidden"
        >
          <img
            src={img}
            alt="Logo"
            className="mx-auto object-contain duration-700 hover:scale-105 hover__glow-png-2 max-xl:max-w-[450px]"
          />
        </motion.div>
      </div>
      {/* BG Image */}
      <motion.img
        src={bgImg}
        alt=""
        className="object-cover w-screen absolute z-[-1] pointer-events-none mix-blend-luminosity min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.7 }}
      />
    </main>
  );
};

export default PageHero;
