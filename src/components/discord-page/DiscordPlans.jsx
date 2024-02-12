import { useLangContext } from "../../context/LangContext";
import LandingPricingCard from "../landing-page/LandingPricingCard";

// Import motion
import { motion } from "framer-motion";

const DiscordPlans = () => {
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
          {lang == "en" ? "Discord Plans" : "خطط ديسكورد"}
        </motion.h2>
        {/* Cards */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {/* Plan 1 */}
          <LandingPricingCard
            title={lang == "en" ? "Plan 1" : "الخطة 1"}
            icon={""}
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
            icon={""}
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
            icon={""}
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
            icon={""}
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
        {/* Free trial */}
        <div
          className="flex justify-center items-center mt-8 gap-16
          bg-body-secondary py-6 border-l-[1px] border-l-primary border-r-[1px] border-r-primary
          max-sm:flex-col max-sm:text-center max-sm:gap-4"
        >
          {/* Title & Description */}
          <div>
            <h3 className="text-[28px] font-bold">
              {lang == "en" ? "Or try it for free!" : "او جربها مجانا!"}
            </h3>
            <p className="text-paragraph">
              {lang == "en"
                ? "Try it now, and host multiple bots (free for 4 days)"
                : "جربها الان وتمكن من استضافة اكثر من بوت لمدة 4 ايام مجانا"}
            </p>
          </div>
          {/* CTA */}
          <a
            href="#"
            className="bg-transparent font-bold py-2 px-4 rounded-[4px] text-[22px] border-[1px] border-primary"
          >
            {lang == "en" ? "Try now" : "جرب الآن"}
          </a>
        </div>
      </div>
    </section>
  );
};

export default DiscordPlans;
