import { useLangContext } from "../../context/LangContext";
import LandingPricingCard from "../landing-page/LandingPricingCard";

// Import Images
import WoodenBlock from "../../imgs/minecraft-page/plan-1.png";
import IronBlock from "../../imgs/minecraft-page/plan-2.png";
import GoldBlock from "../../imgs/minecraft-page/plan-3.png";
import MagmaBlock from "../../imgs/minecraft-page/plan-4.png";

// Import motion
import { motion } from "framer-motion";

const MinecraftPlans = () => {
  const { lang } = useLangContext();
  return (
    <section id="plans" className="scroll-mt-[100px]">
      <div className="container mx-auto py-12 px-4">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "backInOut" }}
          className="section-title w-fit mx-auto"
        >
          {lang == "en" ? "Minecraft Plans" : "خطط ماينكرافت"}
        </motion.h2>
        {/* Cards */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {/* Plan 1 */}
          <LandingPricingCard
            title={lang == "en" ? "Plan 1" : "الخطة 1"}
            icon={WoodenBlock}
            startingPrice={2.99}
            features={[
              ["Control panel for your server", "لوحة تحكم لسيرفرك"],
              ["Multiple server specifications", "مواصفات متعددة للسيرفر"],
              ["High quality", "جودة عالية"],
              ["Quick automatic delivery", "توصيل سريع و تلقائي"],
              ["Technical Support", "دعم فني"],
              ["Full 24-hour control", "تحكم كامل 24 ساعة"],
              ["Exceptional internet speed", "انترنت بسرعة استثنائية"],
              ["Multiple operating systems", "انظمة تشغيل متعددة"],
              ["DDoS attack protection", "حماية ضد هجمات الديدوس"],
              ["Unlimited network connection", "اتصال غير محدود بالشبكة"],
            ]}
            url={"#"}
            specialStyles={
              lang == "en"
                ? "xl:border-l-[1px] border-l-primary border-opacity-90"
                : "xl:border-r-[1px] border-r-primary border-opacity-90"
            }
            isFixedPrice={true}
          />
          {/* Plan 2 */}
          <LandingPricingCard
            title={lang == "en" ? "Plan 2" : "الخطة 2"}
            icon={IronBlock}
            startingPrice={4.99}
            features={[
              ["Control panel", "لوحة تحكم"],
              ["Multiple running specifications", "مواصفات متعددة للتشغيل"],
              ["Unlimited players", "عدد لاعبين غير محدود"],
              ["DDoS attack protection", "حماية ضد هجمات الديدوس"],
              ["Ability to create databases", "امكانية عمل قواعد بيانات"],
              ["Perform backups for your server", "نسخ احتياطي دوري لسيرفرك"],
              ["API usage permissions", "اذونات استخدام الAPI"],
              ["Quick automatic delivery", "توصيل سريع وتلقائي"],
              ["Full 24-hour control", "تحكم كامل 24 ساعة"],
              ["Plugin installer", "مثبت بلوقنات"],
            ]}
            url={"#"}
            isFixedPrice={true}
          />
          {/* Plan 3 */}
          <LandingPricingCard
            title={lang == "en" ? "Plan 3" : "الخطة 3"}
            icon={GoldBlock}
            startingPrice={6.99}
            features={[
              [
                "Ability to host multiple websites",
                "امكانية استضافة مواقع متعددة",
              ],
              ["Control panel", "لوحة تحكم"],
              ["NVMe devices", "اجهزة NVMe"],
              ["Unlimited network connection", "اتصال غير محدود بالشبكة"],
              ["Free SSL encryption", "تشفير SSL مجاني"],
              ["Unlimited SSL encryption", "تشفير SSL غير محدود"],
              ["Scanner for malware", "فحص للفيروسات"],
              ["Full 24-hour control", "تحكم كامل 24 ساعة"],
              ["Quick and automatic delivery", "توصيل سريع وتلقائي"],
              ["Special prices", "اسعار مميزة"],
            ]}
            url={"#"}
            isFixedPrice={true}
          />
          {/* Plan 4 */}
          <LandingPricingCard
            title={lang == "en" ? "Plan 4" : "الخطة 4"}
            icon={MagmaBlock}
            startingPrice={8.99}
            features={[
              ["Control panel for your bots", "لوحة تحكم لبوتاتك"],
              ["Run Discord.js bots", "تشغيل بوتات Discord.js"],
              ["Run Discord.py bots", "تشغيل بوتات Discord.py"],
              ["Run Discord.java bots", "تشغيل بوتات Discord.java"],
              ["Run multiple bots together", "تشغيل بوتات متعددة معاً"],
              ["Full 24-hour control", "تحكم كامل 24 ساعة"],
              ["Live console for your bot", "وحدة تحكم مباشرة لبوتك"],
              ["Bot usage report", "تقرير استهلاك البوت"],
              ["Perform backups for bots", "نسخ احتياطي للبوتات"],
              ["API usage permissions", "اذونات استخدام الAPI"],
            ]}
            url={"#"}
            specialStyles={
              lang == "en"
                ? "xl:border-r-[1px] border-r-primary border-opacity-90"
                : "xl:border-l-[1px] border-l-primary border-opacity-90"
            }
            isFixedPrice={true}
          />
        </div>
      </div>
    </section>
  );
};

export default MinecraftPlans;
