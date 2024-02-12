import { useLangContext } from "../../context/LangContext";

// Import Images
import SectionEnd from "../../imgs/section-end.png";
import HeroStock from "../../imgs/minecraft-page/hero-stock.png";
import HeroBG from "../../imgs/minecraft-page/minecraft-hero-bg.png";

// Import motion
import { motion } from "framer-motion";

const MinecraftHero = () => {
  const { lang } = useLangContext();
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
            {lang == "en" ? "Minecraft" : "ماينكرافت"}
          </span>
          {/* Title */}
          <h1 className="font-bold text-[9vw] sm:text-[42px] md:text-[50px] leading-[120%] max-w-[410px]">
            {lang == "en"
              ? "Get Your Minecraft Server Now"
              : "احصل على سيرفر ماينكرافت الآن"}
          </h1>
          {/* Paragraph */}
          <p className="mt-6 leading-[140%] text-paragraph text-[14px] sm:text-[16px] md:text-[18px] max-w-[619px] select-text">
            {lang == "en"
              ? `Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusm
          tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor
          sit amet consectetur adipiscing elit sed do eiusm tempor incididunt
          ut labore et dolore magna aliqua Lorem ipsum dolor sit amet
          consectetur adipiscing elit sed do eiusm tempor incididunt ut labore
          et dolore magna aliqua.`
              : `هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
          إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.`}
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
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "backInOut" }}
          className="flex-1 max-lg:hidden"
        >
          <img
            src={HeroStock}
            alt="Logo"
            className="mx-auto object-contain duration-700 hover:scale-105 hover__glow-png-2"
          />
        </motion.div>
      </div>
      {/* Section End */}
      <motion.img
        loading="lazy"
        src={SectionEnd}
        alt=""
        className="absolute bottom-0 z-[-1]"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.7, ease: "backInOut" }}
      />
      <motion.img
        loading="lazy"
        src={HeroBG}
        alt=""
        className="absolute top-0 z-[-1] mix-blend-luminosity object-cover w-screen max-sm:hidden max-xl:pt-[96px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "backInOut" }}
      />
    </main>
  );
};

export default MinecraftHero;
