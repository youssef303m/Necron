import { useLangContext } from "../../context/LangContext";
// Import Images
import GermanyFlag from "../../imgs/vps-page/germany-flag.png";
// Import Icons
import { FiCpu } from "react-icons/fi";
import { FaMemory } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa6";
import { BsFillBarChartFill } from "react-icons/bs";
import { FaShieldHalved } from "react-icons/fa6";
import { PiTrafficSignBold } from "react-icons/pi";
import { SiLevelsdotfyi } from "react-icons/si";
import { FaQuestionCircle } from "react-icons/fa";

// Import motion
import { motion } from "framer-motion";

const DedicatedPlanCards = ({ showingPlans }) => {
  const { lang } = useLangContext();
  return (
    <>
      {/* Ryzen Cards */}
      {showingPlans == "ryzen" && (
        <div className="grid sm:grid-cols-2 gap-8">
          <DedicatedPricingCard
            planName={lang == "en" ? "Ryzen-1" : "رايزن 1"}
            price={289.99}
            url={"https://client.necron.host/index.php?rp=/store/vps/vps1"}
            features={{
              cpu: [
                "Intel Core i9 10900K",
                "Intel Core i9 10900K",
                "10 Cores / 20 Threads, 3.7 GHz Baseclock, 5.3 GHz Turboclock",
                "10 Cores / 20 Threads, 3.7 GHz Baseclock, 5.3 GHz Turboclock",
              ],
              ram: ["4GB DDR4 RAM", "4GB DDR4 RAM"],
              storage: ["80GB NVMe Storage", "80GB NVme Storage"],
              speed: ["1GB/s Internet Speed", "سرعة انترنت 1GB/s"],
              protection: [
                "Arbor Custom DDoS Protection",
                "حماية DDoS اربور مخصصة",
              ],
              traffic: ["Unlimited Traffic", "ترافيك غير محدود"],
              upgrade: ["Easy to upgrade later", "سهولة التطوير لاحقا"],
            }}
            lang={lang}
          />
          <DedicatedPricingCard
            planName={lang == "en" ? "Ryzen-2" : "رايزن 2"}
            price={289.99}
            url={"https://client.necron.host/index.php?rp=/store/vps/vps1"}
            features={{
              cpu: [
                "Intel Core i9 10900K",
                "Intel Core i9 10900K",
                "10 Cores / 20 Threads, 3.7 GHz Baseclock, 5.3 GHz Turboclock",
                "10 Cores / 20 Threads, 3.7 GHz Baseclock, 5.3 GHz Turboclock",
              ],
              ram: ["4GB DDR4 RAM", "4GB DDR4 RAM"],
              storage: ["80GB NVMe Storage", "80GB NVme Storage"],
              speed: ["1GB/s Internet Speed", "سرعة انترنت 1GB/s"],
              protection: [
                "Arbor Custom DDoS Protection",
                "حماية DDoS اربور مخصصة",
              ],
              traffic: ["Unlimited Traffic", "ترافيك غير محدود"],
              upgrade: ["Easy to upgrade later", "سهولة التطوير لاحقا"],
            }}
            lang={lang}
          />
          <DedicatedPricingCard
            planName={lang == "en" ? "Ryzen-3" : "رايزن 3"}
            price={289.99}
            url={"https://client.necron.host/index.php?rp=/store/vps/vps1"}
            features={{
              cpu: [
                "Intel Core i9 10900K",
                "Intel Core i9 10900K",
                "10 Cores / 20 Threads, 3.7 GHz Baseclock, 5.3 GHz Turboclock",
                "10 Cores / 20 Threads, 3.7 GHz Baseclock, 5.3 GHz Turboclock",
              ],
              ram: ["4GB DDR4 RAM", "4GB DDR4 RAM"],
              storage: ["80GB NVMe Storage", "80GB NVme Storage"],
              speed: ["1GB/s Internet Speed", "سرعة انترنت 1GB/s"],
              protection: [
                "Arbor Custom DDoS Protection",
                "حماية DDoS اربور مخصصة",
              ],
              traffic: ["Unlimited Traffic", "ترافيك غير محدود"],
              upgrade: ["Easy to upgrade later", "سهولة التطوير لاحقا"],
            }}
            lang={lang}
          />
          <DedicatedPricingCard
            planName={lang == "en" ? "Ryzen-4" : "رايزن 4"}
            price={289.99}
            url={"https://client.necron.host/index.php?rp=/store/vps/vps1"}
            features={{
              cpu: [
                "Intel Core i9 10900K",
                "Intel Core i9 10900K",
                "10 Cores / 20 Threads, 3.7 GHz Baseclock, 5.3 GHz Turboclock",
                "10 Cores / 20 Threads, 3.7 GHz Baseclock, 5.3 GHz Turboclock",
              ],
              ram: ["4GB DDR4 RAM", "4GB DDR4 RAM"],
              storage: ["80GB NVMe Storage", "80GB NVme Storage"],
              speed: ["1GB/s Internet Speed", "سرعة انترنت 1GB/s"],
              protection: [
                "Arbor Custom DDoS Protection",
                "حماية DDoS اربور مخصصة",
              ],
              traffic: ["Unlimited Traffic", "ترافيك غير محدود"],
              upgrade: ["Easy to upgrade later", "سهولة التطوير لاحقا"],
            }}
            lang={lang}
          />
        </div>
      )}
      {/* Core Cards */}
      {showingPlans == "core" && (
        <div className="grid sm:grid-cols-2 gap-8">
          <DedicatedPricingCard
            planName={lang == "en" ? "Inter Core-1" : "انتل كور 1"}
            price={289.99}
            url={"https://client.necron.host/index.php?rp=/store/vps/vps1"}
            features={{
              cpu: [
                "Intel Core i9 10900K",
                "Intel Core i9 10900K",
                "10 Cores / 20 Threads, 3.7 GHz Baseclock, 5.3 GHz Turboclock",
                "10 Cores / 20 Threads, 3.7 GHz Baseclock, 5.3 GHz Turboclock",
              ],
              ram: ["4GB DDR4 RAM", "4GB DDR4 RAM"],
              storage: ["80GB NVMe Storage", "80GB NVme Storage"],
              speed: ["1GB/s Internet Speed", "سرعة انترنت 1GB/s"],
              protection: [
                "Arbor Custom DDoS Protection",
                "حماية DDoS اربور مخصصة",
              ],
              traffic: ["Unlimited Traffic", "ترافيك غير محدود"],
              upgrade: ["Easy to upgrade later", "سهولة التطوير لاحقا"],
            }}
            lang={lang}
          />
          <DedicatedPricingCard
            planName={lang == "en" ? "Inter Core-2" : "انتل كور 2"}
            price={289.99}
            url={"https://client.necron.host/index.php?rp=/store/vps/vps1"}
            features={{
              cpu: [
                "Intel Core i9 10900K",
                "Intel Core i9 10900K",
                "10 Cores / 20 Threads, 3.7 GHz Baseclock, 5.3 GHz Turboclock",
                "10 Cores / 20 Threads, 3.7 GHz Baseclock, 5.3 GHz Turboclock",
              ],
              ram: ["4GB DDR4 RAM", "4GB DDR4 RAM"],
              storage: ["80GB NVMe Storage", "80GB NVme Storage"],
              speed: ["1GB/s Internet Speed", "سرعة انترنت 1GB/s"],
              protection: [
                "Arbor Custom DDoS Protection",
                "حماية DDoS اربور مخصصة",
              ],
              traffic: ["Unlimited Traffic", "ترافيك غير محدود"],
              upgrade: ["Easy to upgrade later", "سهولة التطوير لاحقا"],
            }}
            lang={lang}
          />
          <DedicatedPricingCard
            planName={lang == "en" ? "Intel Core-3" : "انتل كور 3"}
            price={289.99}
            url={"https://client.necron.host/index.php?rp=/store/vps/vps1"}
            features={{
              cpu: [
                "Intel Core i9 10900K",
                "Intel Core i9 10900K",
                "10 Cores / 20 Threads, 3.7 GHz Baseclock, 5.3 GHz Turboclock",
                "10 Cores / 20 Threads, 3.7 GHz Baseclock, 5.3 GHz Turboclock",
              ],
              ram: ["4GB DDR4 RAM", "4GB DDR4 RAM"],
              storage: ["80GB NVMe Storage", "80GB NVme Storage"],
              speed: ["1GB/s Internet Speed", "سرعة انترنت 1GB/s"],
              protection: [
                "Arbor Custom DDoS Protection",
                "حماية DDoS اربور مخصصة",
              ],
              traffic: ["Unlimited Traffic", "ترافيك غير محدود"],
              upgrade: ["Easy to upgrade later", "سهولة التطوير لاحقا"],
            }}
            lang={lang}
          />
          <DedicatedPricingCard
            planName={lang == "en" ? "Intel core-4" : "انتل كور 4"}
            price={289.99}
            url={"https://client.necron.host/index.php?rp=/store/vps/vps1"}
            features={{
              cpu: [
                "Intel Core i9 10900K",
                "Intel Core i9 10900K",
                "10 Cores / 20 Threads, 3.7 GHz Baseclock, 5.3 GHz Turboclock",
                "10 Cores / 20 Threads, 3.7 GHz Baseclock, 5.3 GHz Turboclock",
              ],
              ram: ["4GB DDR4 RAM", "4GB DDR4 RAM"],
              storage: ["80GB NVMe Storage", "80GB NVme Storage"],
              speed: ["1GB/s Internet Speed", "سرعة انترنت 1GB/s"],
              protection: [
                "Arbor Custom DDoS Protection",
                "حماية DDoS اربور مخصصة",
              ],
              traffic: ["Unlimited Traffic", "ترافيك غير محدود"],
              upgrade: ["Easy to upgrade later", "سهولة التطوير لاحقا"],
            }}
            lang={lang}
          />
        </div>
      )}
      {/* Xeon Cards */}
      {showingPlans == "xeon" && (
        <div className="grid sm:grid-cols-2 gap-8">
          <DedicatedPricingCard
            planName={lang == "en" ? "Xeon-1" : "زيون 1"}
            price={289.99}
            url={"https://client.necron.host/index.php?rp=/store/vps/vps1"}
            features={{
              cpu: [
                "Intel Core i9 10900K",
                "Intel Core i9 10900K",
                "10 Cores / 20 Threads, 3.7 GHz Baseclock, 5.3 GHz Turboclock",
                "10 Cores / 20 Threads, 3.7 GHz Baseclock, 5.3 GHz Turboclock",
              ],
              ram: ["4GB DDR4 RAM", "4GB DDR4 RAM"],
              storage: ["80GB NVMe Storage", "80GB NVme Storage"],
              speed: ["1GB/s Internet Speed", "سرعة انترنت 1GB/s"],
              protection: [
                "Arbor Custom DDoS Protection",
                "حماية DDoS اربور مخصصة",
              ],
              traffic: ["Unlimited Traffic", "ترافيك غير محدود"],
              upgrade: ["Easy to upgrade later", "سهولة التطوير لاحقا"],
            }}
            lang={lang}
          />
          <DedicatedPricingCard
            planName={lang == "en" ? "Xeon-2" : "زيون 2"}
            price={289.99}
            url={"https://client.necron.host/index.php?rp=/store/vps/vps1"}
            features={{
              cpu: [
                "Intel Core i9 10900K",
                "Intel Core i9 10900K",
                "10 Cores / 20 Threads, 3.7 GHz Baseclock, 5.3 GHz Turboclock",
                "10 Cores / 20 Threads, 3.7 GHz Baseclock, 5.3 GHz Turboclock",
              ],
              ram: ["4GB DDR4 RAM", "4GB DDR4 RAM"],
              storage: ["80GB NVMe Storage", "80GB NVme Storage"],
              speed: ["1GB/s Internet Speed", "سرعة انترنت 1GB/s"],
              protection: [
                "Arbor Custom DDoS Protection",
                "حماية DDoS اربور مخصصة",
              ],
              traffic: ["Unlimited Traffic", "ترافيك غير محدود"],
              upgrade: ["Easy to upgrade later", "سهولة التطوير لاحقا"],
            }}
            lang={lang}
          />
          <DedicatedPricingCard
            planName={lang == "en" ? "Xeon-3" : "زيون 3"}
            price={289.99}
            url={"https://client.necron.host/index.php?rp=/store/vps/vps1"}
            features={{
              cpu: [
                "Intel Core i9 10900K",
                "Intel Core i9 10900K",
                "10 Cores / 20 Threads, 3.7 GHz Baseclock, 5.3 GHz Turboclock",
                "10 Cores / 20 Threads, 3.7 GHz Baseclock, 5.3 GHz Turboclock",
              ],
              ram: ["4GB DDR4 RAM", "4GB DDR4 RAM"],
              storage: ["80GB NVMe Storage", "80GB NVme Storage"],
              speed: ["1GB/s Internet Speed", "سرعة انترنت 1GB/s"],
              protection: [
                "Arbor Custom DDoS Protection",
                "حماية DDoS اربور مخصصة",
              ],
              traffic: ["Unlimited Traffic", "ترافيك غير محدود"],
              upgrade: ["Easy to upgrade later", "سهولة التطوير لاحقا"],
            }}
            lang={lang}
          />
          <DedicatedPricingCard
            planName={lang == "en" ? "Xeon-4" : "زيون 4"}
            price={289.99}
            url={"https://client.necron.host/index.php?rp=/store/vps/vps1"}
            features={{
              cpu: [
                "Intel Core i9 10900K",
                "Intel Core i9 10900K",
                "10 Cores / 20 Threads, 3.7 GHz Baseclock, 5.3 GHz Turboclock",
                "10 Cores / 20 Threads, 3.7 GHz Baseclock, 5.3 GHz Turboclock",
              ],
              ram: ["4GB DDR4 RAM", "4GB DDR4 RAM"],
              storage: ["80GB NVMe Storage", "80GB NVme Storage"],
              speed: ["1GB/s Internet Speed", "سرعة انترنت 1GB/s"],
              protection: [
                "Arbor Custom DDoS Protection",
                "حماية DDoS اربور مخصصة",
              ],
              traffic: ["Unlimited Traffic", "ترافيك غير محدود"],
              upgrade: ["Easy to upgrade later", "سهولة التطوير لاحقا"],
            }}
            lang={lang}
          />
        </div>
      )}
      {/* Epyc Cards */}
      {showingPlans == "epyc" && (
        <div className="grid sm:grid-cols-2 gap-8">
          <DedicatedPricingCard
            planName={lang == "en" ? "Epyc-1" : "ايبيك 1"}
            price={289.99}
            url={"https://client.necron.host/index.php?rp=/store/vps/vps1"}
            features={{
              cpu: [
                "Intel Core i9 10900K",
                "Intel Core i9 10900K",
                "10 Cores / 20 Threads, 3.7 GHz Baseclock, 5.3 GHz Turboclock",
                "10 Cores / 20 Threads, 3.7 GHz Baseclock, 5.3 GHz Turboclock",
              ],
              ram: ["4GB DDR4 RAM", "4GB DDR4 RAM"],
              storage: ["80GB NVMe Storage", "80GB NVme Storage"],
              speed: ["1GB/s Internet Speed", "سرعة انترنت 1GB/s"],
              protection: [
                "Arbor Custom DDoS Protection",
                "حماية DDoS اربور مخصصة",
              ],
              traffic: ["Unlimited Traffic", "ترافيك غير محدود"],
              upgrade: ["Easy to upgrade later", "سهولة التطوير لاحقا"],
            }}
            lang={lang}
          />
          <DedicatedPricingCard
            planName={lang == "en" ? "Epyc-2" : "ايبيك 2"}
            price={289.99}
            url={"https://client.necron.host/index.php?rp=/store/vps/vps1"}
            features={{
              cpu: [
                "Intel Core i9 10900K",
                "Intel Core i9 10900K",
                "10 Cores / 20 Threads, 3.7 GHz Baseclock, 5.3 GHz Turboclock",
                "10 Cores / 20 Threads, 3.7 GHz Baseclock, 5.3 GHz Turboclock",
              ],
              ram: ["4GB DDR4 RAM", "4GB DDR4 RAM"],
              storage: ["80GB NVMe Storage", "80GB NVme Storage"],
              speed: ["1GB/s Internet Speed", "سرعة انترنت 1GB/s"],
              protection: [
                "Arbor Custom DDoS Protection",
                "حماية DDoS اربور مخصصة",
              ],
              traffic: ["Unlimited Traffic", "ترافيك غير محدود"],
              upgrade: ["Easy to upgrade later", "سهولة التطوير لاحقا"],
            }}
            lang={lang}
          />
          <DedicatedPricingCard
            planName={lang == "en" ? "Epyc-3" : "ايبيك 3"}
            price={289.99}
            url={"https://client.necron.host/index.php?rp=/store/vps/vps1"}
            features={{
              cpu: [
                "Intel Core i9 10900K",
                "Intel Core i9 10900K",
                "10 Cores / 20 Threads, 3.7 GHz Baseclock, 5.3 GHz Turboclock",
                "10 Cores / 20 Threads, 3.7 GHz Baseclock, 5.3 GHz Turboclock",
              ],
              ram: ["4GB DDR4 RAM", "4GB DDR4 RAM"],
              storage: ["80GB NVMe Storage", "80GB NVme Storage"],
              speed: ["1GB/s Internet Speed", "سرعة انترنت 1GB/s"],
              protection: [
                "Arbor Custom DDoS Protection",
                "حماية DDoS اربور مخصصة",
              ],
              traffic: ["Unlimited Traffic", "ترافيك غير محدود"],
              upgrade: ["Easy to upgrade later", "سهولة التطوير لاحقا"],
            }}
            lang={lang}
          />
          <DedicatedPricingCard
            planName={lang == "en" ? "Epyc-4" : "ايبيك 4"}
            price={289.99}
            url={"https://client.necron.host/index.php?rp=/store/vps/vps1"}
            features={{
              cpu: [
                "Intel Core i9 10900K",
                "Intel Core i9 10900K",
                "10 Cores / 20 Threads, 3.7 GHz Baseclock, 5.3 GHz Turboclock",
                "10 Cores / 20 Threads, 3.7 GHz Baseclock, 5.3 GHz Turboclock",
              ],
              ram: ["4GB DDR4 RAM", "4GB DDR4 RAM"],
              storage: ["80GB NVMe Storage", "80GB NVme Storage"],
              speed: ["1GB/s Internet Speed", "سرعة انترنت 1GB/s"],
              protection: [
                "Arbor Custom DDoS Protection",
                "حماية DDoS اربور مخصصة",
              ],
              traffic: ["Unlimited Traffic", "ترافيك غير محدود"],
              upgrade: ["Easy to upgrade later", "سهولة التطوير لاحقا"],
            }}
            lang={lang}
          />
        </div>
      )}
    </>
  );
};

export default DedicatedPlanCards;

const DedicatedPricingCard = ({ planName, price, url, features, lang }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="bg-body-secondary p-7 flex items-center rounded-[4px]
    border-[2px] border-transparent
    hover__glow-sm duration-300 hover:border-primary
    max-xl:flex-col"
    >
      {/* First Section */}
      <div className="max-xl:w-full">
        {/* Title */}
        <div className="flex items-center gap-4">
          {/* <img src={GermanyFlag} alt="Germany" className="object-contain" /> */}
          <h3 className="font-bold text-[22px]">{planName}</h3>
        </div>
        {/* Price */}
        <div className="text-primary text-[15px] text-start mt-7">
          {lang == "en" ? "Only with" : "فقط بسعر"}
        </div>
        <div className="font-bold text-[32px] sm:text-[38px] text-start">
          {lang == "en" ? `$${price}` : `${price} دولار`}
        </div>
        {/* Buy Button */}
        <a
          href={url}
          className="block bg-primary mt-6 w-[240px] rounded-[4px] text-[20px] py-2 font-bold hover__glow-sm duration-300
        max-xl:w-full"
        >
          {lang == "en" ? "Buy Now" : "اشتر الآن"}
        </a>
      </div>
      {/* Separator */}
      <div
        className="w-[2px] h-full bg-primary opacity-25 mx-7
    max-xl:w-full max-xl:h-[2px] max-xl:my-7 max-xl:mx-0"
      />
      {/* Features Section */}
      <div
        className="flex flex-col gap-2 sm:gap-3 text-paragraph sm:text-[18px]
    max-xl:w-full"
      >
        {/* CPU */}
        {features?.cpu && (
          <div className="flex items-center gap-4 text-start">
            <FiCpu className="text-primary text-[18px] sm:text-[22px]" />
            <span>{lang == "en" ? features.cpu[0] : features.cpu[1]}</span>
            {features.cpu[2] && features.cpu[3] && (
              <span className="text-primary relative">
                <FaQuestionCircle
                  className={`${
                    lang == "ar"
                      ? "plan-question-mark-rtl"
                      : "plan-question-mark"
                  }`}
                />
                <div>{lang == "en" ? features.cpu[2] : features.cpu[3]}</div>
              </span>
            )}
          </div>
        )}
        {/* RAM */}
        {features?.ram && (
          <div className="flex items-center gap-4 text-start">
            <FaMemory className="text-primary text-[18px] sm:text-[22px]" />
            <span>{lang == "en" ? features.ram[0] : features.ram[1]}</span>
            {features.ram[2] && features.ram[3] && (
              <span className="text-primary relative">
                <FaQuestionCircle
                  className={`${
                    lang == "ar"
                      ? "plan-question-mark-rtl"
                      : "plan-question-mark"
                  }`}
                />
                <div>{lang == "en" ? features.ram[2] : features.ram[3]}</div>
              </span>
            )}
          </div>
        )}
        {/* Storage */}
        {features?.storage && (
          <div className="flex items-center gap-4 text-start">
            <FaDatabase className="text-primary text-[18px] sm:text-[22px]" />
            <span>
              {lang == "en" ? features.storage[0] : features.storage[1]}
            </span>
            {features.storage[2] && features.storage[3] && (
              <span className="text-primary relative">
                <FaQuestionCircle
                  className={`${
                    lang == "ar"
                      ? "plan-question-mark-rtl"
                      : "plan-question-mark"
                  }`}
                />
                <div>
                  {lang == "en" ? features.storage[2] : features.storage[3]}
                </div>
              </span>
            )}
          </div>
        )}
        {/* Speed */}
        {features?.speed && (
          <div className="flex items-center gap-4 text-start">
            <BsFillBarChartFill className="text-primary text-[18px] sm:text-[22px]" />
            <span>{lang == "en" ? features.speed[0] : features.speed[1]}</span>
            {features.speed[2] && features.speed[3] && (
              <span className="text-primary relative">
                <FaQuestionCircle
                  className={`${
                    lang == "ar"
                      ? "plan-question-mark-rtl"
                      : "plan-question-mark"
                  }`}
                />
                <div>
                  {lang == "en" ? features.speed[2] : features.speed[3]}
                </div>
              </span>
            )}
          </div>
        )}
        {/* Protection */}
        {features?.protection && (
          <div className="flex items-center gap-4 text-start">
            <FaShieldHalved className="text-primary text-[18px] sm:text-[22px]" />
            <span>
              {lang == "en" ? features.protection[0] : features.protection[1]}
            </span>
            {features.protection[2] && features.protection[3] && (
              <span className="text-primary relative">
                <FaQuestionCircle
                  className={`${
                    lang == "ar"
                      ? "plan-question-mark-rtl"
                      : "plan-question-mark"
                  }`}
                />
                <div>
                  {lang == "en"
                    ? features.protection[2]
                    : features.protection[3]}
                </div>
              </span>
            )}
          </div>
        )}
        {/* Traffic */}
        {features?.traffic && (
          <div className="flex items-center gap-4 text-start">
            <PiTrafficSignBold className="text-primary text-[18px] sm:text-[22px]" />
            <span>
              {lang == "en" ? features.traffic[0] : features.traffic[1]}
            </span>
            {features.traffic[2] && features.traffic[3] && (
              <span className="text-primary relative">
                <FaQuestionCircle
                  className={`${
                    lang == "ar"
                      ? "plan-question-mark-rtl"
                      : "plan-question-mark"
                  }`}
                />
                <div>
                  {lang == "en" ? features.traffic[2] : features.traffic[3]}
                </div>
              </span>
            )}
          </div>
        )}
        {/* Upgrade */}
        {features?.upgrade && (
          <div className="flex items-center gap-4 text-start">
            <SiLevelsdotfyi className="text-primary text-[18px] sm:text-[22px]" />
            <span>
              {lang == "en" ? features.upgrade[0] : features.upgrade[1]}
            </span>
            {features.upgrade[2] && features.upgrade[3] && (
              <span className="text-primary relative">
                <FaQuestionCircle
                  className={`${
                    lang == "ar"
                      ? "plan-question-mark-rtl"
                      : "plan-question-mark"
                  }`}
                />
                <div>
                  {lang == "en" ? features.upgrade[2] : features.upgrade[3]}
                </div>
              </span>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};
