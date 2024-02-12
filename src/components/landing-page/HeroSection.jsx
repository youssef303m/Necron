import { useLangContext } from "../../context/LangContext";
// Import Images
import Logo3D from "../../imgs/necron-3d.png";
import SectionEnd from "../../imgs/section-end.png";

// Import motion
import { motion } from "framer-motion";

const HeroSection = () => {
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
            {lang == "en" ? "NECRON" : "نيكرون"}
          </span>
          {/* Title */}
          <h1 className="font-bold text-[9vw] sm:text-[42px] md:text-[50px] leading-[120%] max-w-[399px]">
            {lang == "en"
              ? "Cloud services in a new way"
              : "خدمات سحابية بطريقة جديدة"}
          </h1>
          {/* Paragraph */}
          <p className="mt-6 leading-[140%] text-paragraph text-[14px] sm:text-[16px] md:text-[18px] max-w-[619px] select-text">
            {lang == "en"
              ? `Necron provides you with many cloud services with the best possible quality, with our private protected network, advanced protection systems to always protect you from DDoS attacks and more. Our professional team always aims to provide you with the best, so our services and servers feature the best internet speeds, daily backups of all your files, and more, to provide you with the convenience of an integrated cloud platform, designed for you.`
              : `نيكرون توفر لك العديد من الخدمات السحابية بأفضل جودة ممكنة، مع شبكتنا المحمية الخاصة، ووسائل الحماية المتقدمة لحمايتك دائمًا من هجمات DDoS والمزيد. يهدف فريقنا المحترف دائمًا إلى تقديم الأفضل لك، لذلك تتميز خدماتنا وخوادمنا بأفضل سرعات الإنترنت، ونسخ احتياطية يومية لجميع ملفاتك، واكثر، لتوفر لك الراحة كمنصة سحابية متكاملة، مصممة لك.`}
          </p>
          {/* CTA */}
          <a
            href="#plans"
            className="text-[20px] font-semibold inline-block mt-12 py-[14px] px-[42px] bg-body-primary
          rounded-[4px] border-[1px] border-primary
          hover:bg-primary duration-300 hover__glow hover:tracking-[1px]"
          >
            {lang == "en" ? "Get Started" : "البدء الان"}
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
            src={Logo3D}
            alt="Logo"
            className="mx-auto object-contain duration-700 hover:scale-105 hover__glow-png-2
            lg:w-[450px] xl:w-[600px]"
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
    </main>
  );
};

export default HeroSection;
