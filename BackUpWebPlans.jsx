import { BsCheckCircleFill } from "react-icons/bs";
import { useLangContext } from "../../context/LangContext";

import PricingIcon from "../../imgs/webhosting-page/pricing-icon.png";

// Import motion
import { AnimatePresence, motion } from "framer-motion";
import Modal from "../modal";
import { useState } from "react";

const WebPlans = () => {
  const { lang } = useLangContext();
  return (
    <section id="plans" className="scroll-mt-[100px] overflow-hidden">
      <div className="container mx-auto text-center py-12 px-4">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "backInOut" }}
          className="section-title w-fit mx-auto"
        >
          {lang == "en" ? "Web Hosting Plans" : "خطط استضافة المواقع"}
        </motion.h2>
        {/* Pricing Cards */}
        <div className="grid gap-8 max-w-[1200px] mx-auto">
          <WebPricingCard
            planName={"Plan 1"}
            price={2.99}
            url={
              "https://client.necron.host/index.php?rp=/store/web-hosting/web-1"
            }
            features={[
              [
                "Ability to host multiple websites",
                "امكانية استضافة اكثر من موقع",
              ],
              ["Control panel", "لوحة تحكم"],
              ["NVMe devices", "اجهزة NVMe"],
              ["Unlimited network connection", "اتصال غير محدود بالشبكة"],
              ["Free SSL encryption", "تشفير SSL مجاني"],
              ["Unlimited SSL encryption", "تشفير SSL غير محدود"],
              ["Scanner for malware", "فاحص للفيروسات"],
              ["Full 24-hour control", "تحكم كامل 24 ساعة"],
              ["High quality", "جودة عالية"],
              ["Quick and automatic delivery", "توصيل سريع وتلقائي"],
            ]}
            lang={lang}
          />
          <WebPricingCard
            planName={"Plan 2"}
            price={4.99}
            url={
              "https://client.necron.host/index.php?rp=/store/web-hosting/web-2"
            }
            features={[
              [
                "Ability to host multiple websites",
                "امكانية استضافة اكثر من موقع",
              ],
              ["Control panel", "لوحة تحكم"],
              ["NVMe devices", "اجهزة NVMe"],
              ["Unlimited network connection", "اتصال غير محدود بالشبكة"],
              ["Free SSL encryption", "تشفير SSL مجاني"],
              ["Unlimited SSL encryption", "تشفير SSL غير محدود"],
              ["Scanner for malware", "فاحص للفيروسات"],
              ["Full 24-hour control", "تحكم كامل 24 ساعة"],
              ["High quality", "جودة عالية"],
              ["Quick and automatic delivery", "توصيل سريع وتلقائي"],
            ]}
            lang={lang}
          />
          <WebPricingCard
            planName={"Plan 3"}
            price={6.99}
            url={
              "https://client.necron.host/index.php?rp=/store/web-hosting/web-3"
            }
            features={[
              [
                "Ability to host multiple websites",
                "امكانية استضافة اكثر من موقع",
              ],
              ["Control panel", "لوحة تحكم"],
              ["NVMe devices", "اجهزة NVMe"],
              ["Unlimited network connection", "اتصال غير محدود بالشبكة"],
              ["Free SSL encryption", "تشفير SSL مجاني"],
              ["Unlimited SSL encryption", "تشفير SSL غير محدود"],
              ["Scanner for malware", "فاحص للفيروسات"],
              ["Full 24-hour control", "تحكم كامل 24 ساعة"],
              ["High quality", "جودة عالية"],
              ["Quick and automatic delivery", "توصيل سريع وتلقائي"],
            ]}
            lang={lang}
          />
          <WebPricingCard
            planName={"Plan 4"}
            price={14.99}
            url={
              "https://client.necron.host/index.php?rp=/store/web-hosting/web-4"
            }
            features={[
              [
                "Ability to host multiple websites",
                "امكانية استضافة اكثر من موقع",
              ],
              ["Control panel", "لوحة تحكم"],
              ["NVMe devices", "اجهزة NVMe"],
              ["Unlimited network connection", "اتصال غير محدود بالشبكة"],
              ["Free SSL encryption", "تشفير SSL مجاني"],
              ["Unlimited SSL encryption", "تشفير SSL غير محدود"],
              ["Scanner for malware", "فاحص للفيروسات"],
              ["Full 24-hour control", "تحكم كامل 24 ساعة"],
              ["High quality", "جودة عالية"],
              ["Quick and automatic delivery", "توصيل سريع وتلقائي"],
            ]}
            lang={lang}
          />
        </div>
      </div>
    </section>
  );
};

export default WebPlans;

const WebPricingCard = ({ planName, price, url, features, lang }) => {
  const [isModalOpen, SetIsModalOpen] = useState(false);

  const closeModal = () => SetIsModalOpen(false);
  const openModal = () => SetIsModalOpen(true);

  const handlePurchase = () => {
    if (!isModalOpen) {
      openModal();
    } else if (isModalOpen) {
      return;
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "backInOut" }}
      className="bg-body-secondary p-7 flex items-center rounded-[4px]
      border-[2px] border-transparent
      hover__glow-sm duration-300 hover:border-primary
      max-lg:flex-col"
    >
      {/* First Section */}
      <div className="max-lg:w-full">
        {/* Title */}
        <div className="flex items-center gap-4">
          <img src={PricingIcon} alt="Germany" className="object-contain" />
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
          onClick={handlePurchase}
        >
          {isModalOpen
            ? lang == "en"
              ? "Buy Now"
              : "اشتر الآن"
            : lang == "en"
            ? "Choose Plan"
            : "اختر الخطة"}
        </button>
        {/* <AnimatePresence mode="wait">
          {isModalOpen && (
            <Modal handleClose={closeModal}>
              <h4 className="font-bold text-[24px] md:text-[32px]">
                {lang == "en"
                  ? "Enter your domain name"
                  : "ادخل عنوان الدومين الخاص بك"}
              </h4>
              <form className="w-full mt-8">
                <input
                  type="text"
                  placeholder={lang == "en" ? "Domain Name" : "عنوان الدومين"}
                  className="r w-full bg-transparent outline-none focus:outline-none py-2 px-4 rounded-[4px]
                  border-[2px] border-primary border-opacity-25 focus:border-opacity-100 duration-300"
                />
                <p className="text-paragraph max-md:text-[14px] mt-2">
                  {lang == "en"
                    ? 'If you do not have a domain name, leave the input field empty and click "Buy Now"'
                    : 'ان كنت لا تمتلك عنوان دومين اترك الحقل فارغاً واضغط "اشتر الان"'}
                </p>
                <motion.button
                  type="submit"
                  className="mt-4 bg-primary py-3 px-8 font-bold text-[18px] md:text-[24px] rounded-[4px]"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {lang == "en" ? "Buy Now" : "اشتر الان"}
                </motion.button>
              </form>
            </Modal>
          )}
        </AnimatePresence> */}
        {/* <a
          href={url}
          className="block bg-primary mt-6 w-[240px] rounded-[4px] text-[20px] py-2 font-bold hover__glow-sm duration-300
          max-lg:w-full"
        >
          {lang == "en" ? "Buy Now" : "اشتر الآن"}
        </a> */}
      </div>
      {/* Separator */}
      <div
        className="w-[2px] h-full bg-primary opacity-25 mx-7
      max-lg:w-full max-lg:h-[2px] max-lg:my-7 max-lg:mx-0"
      />

      {isModalOpen ? (
        <motion.form
          className="w-full block"
          initial={{ opacity: 0, x: lang == "en" ? 100 : -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "backInOut" }}
        >
          <h4 className="text-start font-bold text-[22px] mb-4">
            Enter your domain name
          </h4>
          <input
            type="text"
            placeholder="Your domain name"
            className="bg-transparent border-[2px] border-primary rounded-[4px] p-4 w-full
            border-opacity-25 focus:border-opacity-100 duration-300"
          />
          <p className="text-paragraph max-md:text-[14px]">
            {lang == "en"
              ? 'If you do not have a domain name, leave the input field empty and click "Buy Now"'
              : 'ان كنت لا تمتلك عنوان دومين اترك الحقل فارغاً واضغط "اشتر الان"'}
          </p>
        </motion.form>
      ) : (
        <div className="grid sm:grid-cols-2 gap-y-4 md:gap-x-16 xl:gap-x-44 max-lg:w-full">
          {features.map(([featureEN, featureAR], index) => (
            <motion.div
              initial={{ opacity: 0, x: lang == "en" ? 100 : -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              exit={{ opacity: 0, x: lang == "en" ? -100 : 100 }}
              transition={{ duration: 0.7, ease: "backInOut" }}
              className="flex items-center gap-4"
              key={index}
            >
              {" "}
              <BsCheckCircleFill className="text-primary text-[16px] sm:text-[20px]" />
              <span className="max-sm:text-[14px] text-start">
                {lang == "en" ? featureEN : featureAR}
              </span>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
};
