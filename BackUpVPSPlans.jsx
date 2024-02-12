import { useLangContext } from "../../context/LangContext";

// Import Images
import GermanyFlag from "../../imgs/vps-page/germany-flag.png";
// Import Icons
import { FiCpu } from "react-icons/fi";
import { FaMemory } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa6";
import { BsFillBarChartFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";

// Import motion
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Modal from "../modal";
import Backdrop from "../backdrop";

const VPSPlans = () => {
  const { lang } = useLangContext();
  return (
    <section id="plans" className="scroll-mt-[100px]">
      <div className="container mx-auto text-center py-12 px-4">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "backInOut" }}
          className="section-title w-fit mx-auto"
        >
          {lang == "en" ? "VPS Server Plans" : "خطط الخوادم"}
        </motion.h2>
        {/* Pricing Cards */}
        <div className="grid sm:grid-cols-2 gap-8">
          <VPSPricingCard
            planName={lang == "en" ? "VPS-1" : "الخطة 1"}
            price={12.99}
            url={"https://client.necron.host/index.php?rp=/store/vps/vps1"}
            features={{
              cpu: ["4 vCore", "معالج 4vCore"],
              ram: ["4GB DDR4 RAM", "رامات 4GB DDR4"],
              storage: ["80GB NVMe Storage", "مساحة تخزين 80GB"],
              speed: ["1GB/s Internet Speed", "سرعة انترنت 1GB/s"],
              ip: ["1 Specific IP", "أي بي خاص واحد"],
            }}
            lang={lang}
          />
          <VPSPricingCard
            planName={lang == "en" ? "VPS-2" : "الخطة 2"}
            price={20.99}
            url={"https://client.necron.host/index.php?rp=/store/vps/vps-2"}
            features={{
              cpu: ["6 vCore", "معالج 6vCore"],
              ram: ["8GB DDR4 RAM", "رامات 8GB DDR4"],
              storage: ["110GB NVMe Storage", "مساحة تخزين 110GB"],
              speed: ["1GB/s Internet Speed", "سرعة انترنت 1GB/s"],
              ip: ["1 Specific IP", "أي بي خاص واحد"],
            }}
            lang={lang}
          />
          <VPSPricingCard
            planName={lang == "en" ? "VPS-3" : "الخطة 3"}
            price={27.99}
            url={"https://client.necron.host/index.php?rp=/store/vps/vps-3"}
            features={{
              cpu: ["8 vCore", "معالج 8vCore"],
              ram: ["16GB DDR4 RAM", "رامات 16GB DDR4"],
              storage: ["150GB NVMe Storage", "مساحة تخزين 150GB"],
              speed: ["1GB/s Internet Speed", "سرعة انترنت 1GB/s"],
              ip: ["1 Specific IP", "أي بي خاص واحد"],
            }}
            lang={lang}
          />
          <VPSPricingCard
            planName={lang == "en" ? "VPS-4" : "الخطة 4"}
            price={49.99}
            url={"https://client.necron.host/index.php?rp=/store/vps/vps-4"}
            features={{
              cpu: ["12 vCore", "معالج 12vCore"],
              ram: ["32GB DDR4 RAM", "رامات 32GB DDR4"],
              storage: ["230GB NVMe Storage", "مساحة تخزين 230GB"],
              speed: ["1GB/s Internet Speed", "سرعة انترنت 1GB/s"],
              ip: ["1 Specific IP", "أي بي خاص واحد"],
            }}
            lang={lang}
          />
          <VPSPricingCard
            planName={lang == "en" ? "VPS-5" : "الخطة 5"}
            price={99.99}
            url={"https://client.necron.host/index.php?rp=/store/vps/vps-5"}
            features={{
              cpu: ["16 vCore", "معالج 16vCore"],
              ram: ["64GB DDR4 RAM", "رامات 64GB DDR4"],
              storage: ["300GB NVMe Storage", "مساحة تخزين 300GB"],
              speed: ["1GB/s Internet Speed", "سرعة انترنت 1GB/s"],
              ip: ["1 Specific IP", "أي بي خاص واحد"],
            }}
            lang={lang}
          />
          <VPSPricingCard
            planName={lang == "en" ? "VPS-6" : "الخطة 6"}
            price={249.99}
            url={"https://client.necron.host/index.php?rp=/store/vps/vps-6"}
            features={{
              cpu: ["20 vCore", "معالج 20vCore"],
              ram: ["128GB DDR4 RAM", "رامات 128GB DDR4"],
              storage: ["500GB NVMe Storage", "مساحة تخزين 500GB"],
              speed: ["1GB/s Internet Speed", "سرعة انترنت 1GB/s"],
              ip: ["1 Specific IP", "أي بي خاص واحد"],
            }}
            lang={lang}
          />
        </div>
      </div>
    </section>
  );
};

export default VPSPlans;

const VPSPricingCard = ({ planName, price, url, features, lang }) => {
  const [isModalOpen, SetIsModalOpen] = useState(false);

  const closeModal = () => SetIsModalOpen(false);
  const openModal = () => SetIsModalOpen(true);
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "backInOut" }}
      className="bg-body-secondary p-7 flex items-center rounded-[4px]
      border-[2px] border-transparent
      hover__glow-sm duration-300 hover:border-primary
      max-xl:flex-col"
    >
      {/* First Section */}
      <div className="max-xl:w-full">
        {/* Title */}
        <div className="flex items-center gap-4">
          <img src={GermanyFlag} alt="Germany" className="object-contain" />
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
        <button
          className="block bg-primary mt-6 w-[240px] rounded-[4px] text-[20px] py-2 font-bold hover__glow-sm duration-300
          max-xl:w-full"
          onClick={() => (isModalOpen ? closeModal() : openModal())}
        >
          {lang == "en" ? "Buy Now" : "اشتر الآن"}
        </button>
        <AnimatePresence mode="wait">
          {isModalOpen && (
            <Modal handleClose={closeModal}>
              <h4 className="font-bold text-[24px] md:text-[32px]">
                {lang == "en"
                  ? "Enter a name for your VPS"
                  : "ادخل اسم للخادم الخاص بك"}
              </h4>
              <form className="w-full mt-8">
                <input
                  type="text"
                  required
                  placeholder={lang == "en" ? "VPS Name" : "اسم الخادم"}
                  className="r w-full bg-transparent outline-none focus:outline-none py-2 px-4 rounded-[4px]
                  border-[2px] border-primary border-opacity-25 focus:border-opacity-100 duration-300"
                />
                <motion.button
                  type="submit"
                  className="mt-4 bg-primary py-3 px-8 font-bold text-[18px] md:text-[24px] rounded-[4px]"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {lang == "en" ? "Get it now" : "احصل عليه الان"}
                </motion.button>
              </form>
            </Modal>
          )}
        </AnimatePresence>
        {/* <a
          href={url}
          className="block bg-primary mt-6 w-[240px] rounded-[4px] text-[20px] py-2 font-bold hover__glow-sm duration-300
          max-xl:w-full"
        >
          {lang == "en" ? "Buy Now" : "اشتر الآن"}
        </a> */}
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
        {features?.cpu && (
          <div className="flex items-center gap-4">
            <FiCpu className="text-primary text-[18px] sm:text-[24px]" />
            <span>{lang == "en" ? features.cpu[0] : features.cpu[1]}</span>
          </div>
        )}
        {features?.ram && (
          <div className="flex items-center gap-4">
            <FaMemory className="text-primary text-[18px] sm:text-[24px]" />
            <span>{lang == "en" ? features.ram[0] : features.ram[1]}</span>
          </div>
        )}
        {features?.storage && (
          <div className="flex items-center gap-4">
            <FaDatabase className="text-primary text-[18px] sm:text-[24px]" />
            <span>
              {lang == "en" ? features.storage[0] : features.storage[1]}
            </span>
          </div>
        )}
        {features?.speed && (
          <div className="flex items-center gap-4">
            <BsFillBarChartFill className="text-primary text-[18px] sm:text-[24px]" />
            <span>{lang == "en" ? features.speed[0] : features.speed[1]}</span>
          </div>
        )}
        {features?.ip && (
          <div className="flex items-center gap-4">
            <FaLocationDot className="text-primary text-[18px] sm:text-[24px]" />
            <span>{lang == "en" ? features.ip[0] : features.ip[1]}</span>
          </div>
        )}
      </div>
    </motion.div>
  );
};
