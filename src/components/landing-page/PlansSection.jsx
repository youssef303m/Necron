import { useLangContext } from "../../context/LangContext";
import LandingPricingCard from "./LandingPricingCard";

// Import Icons
import HostIcon from "../../icons/host.svg";
import MinecraftIcon from "../../icons/minecraft.svg";
import WebhostingIcon from "../../icons/webhosting.svg";
import DiscordBotsIcon from "../../icons/necron-discord-bots.svg";

// Import motion
import { motion } from "framer-motion";

const PlansSection = () => {
  const { lang } = useLangContext();
  return (
    <section className="overflow-hidden">
      <div className="container mx-auto py-12 px-4">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "backInOut" }}
          className="section-title w-fit mx-auto"
        >
          {lang == "en" ? "Pricing and Plans" : "الخطط والأسعار"}
          {/* Scroll to this without it being hidden under the header */}
          <span id="plans" className="w-[5px] h-[5px] absolute top-[-100px]" />
        </motion.h2>
        {/* Cards */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {/* VPS Servers */}
          <LandingPricingCard
            title={lang == "en" ? "VPS Servers" : "سيرفرات VPS"}
            icon={HostIcon}
            startingPrice={11.99}
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
            url={"/vps"}
            specialStyles={
              lang == "en"
                ? "xl:border-l-[1px] border-l-primary border-opacity-90"
                : "xl:border-r-[1px] border-r-primary border-opacity-90"
            }
            isFixedPrice={false}
          />
          {/* Minecraft Servers */}
          <LandingPricingCard
            title={lang == "en" ? "Minecraft Servers" : "سيرفرات ماينكرافت"}
            icon={MinecraftIcon}
            startingPrice={2.99}
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
            url={"/minecraft"}
            isFixedPrice={false}
          />
          {/* Website Hosting */}
          <LandingPricingCard
            title={lang == "en" ? "Website Hosting" : "استضافة المواقع"}
            icon={WebhostingIcon}
            startingPrice={2.99}
            features={[
              [
                "Ability to host multiple websites",
                "امكانية استضافة مواقع متعددة",
              ],
              ["Control panel", "لوحة تحكم"],
              [
                "NVMe devices",
                "اجهزة NVMe",
                "Your site's information is being managed on these devices, making it faster to process all the information and improves the quality and performance",
                "تتم إدارة جميع معلومات موقعك على هذه الاجهزة مما يزيد من سرعة معالجة جميع معلومات موقعك ويزيد من أدائه وجودته",
              ],
              [
                "Unlimited network connection",
                "اتصال غير محدود بالشبكة",
                "The quantity and the quality of your connections to the network can be unlimited (Bandwidth)",
                "عدد وحجم جودة اتصالات موقعك الى الانترنت والشبكة قد تصل الى لا محدود (Bandwidth)",
              ],
              [
                "Free SSL encryption",
                "تشفير SSL مجاني",
                "The encryption makes your website safe and gives it the green lock beside the URL in the top of the browser indicating how safe your website is",
                "يجعل التشفير موقعك آمناً ويمنح موقعك قفلاً أخضر في الجزء العلوي من المتصفح يوضح للناس مدى أمان موقعك وتشفيره",
              ],
              ["Unlimited SSL encryption", "تشفير SSL غير محدود"],
              ["Scanner for malware", "فحص للفيروسات"],
              ["Full 24-hour control", "تحكم كامل 24 ساعة"],
              ["Quick and automatic delivery", "توصيل سريع وتلقائي"],
              ["Special prices", "اسعار مميزة"],
            ]}
            url={"/web"}
            isFixedPrice={false}
          />
          {/* Discord Bots */}
          <LandingPricingCard
            title={lang == "en" ? "Discord Bots" : "بوتات ديسكورد"}
            icon={DiscordBotsIcon}
            startingPrice={2.99}
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
            url={"/discord"}
            specialStyles={
              lang == "en"
                ? "xl:border-r-[1px] border-r-primary border-opacity-90"
                : "xl:border-l-[1px] border-l-primary border-opacity-90"
            }
            isFixedPrice={false}
          />
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
