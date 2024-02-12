import { useLangContext } from "../../context/LangContext";

// Import Components
import WhyUsSlider from "./WhyUsSlider";
import WhyUsCard from "./WhyUsCard";

// Import Icons
import { FaUser } from "react-icons/fa";
import { PiSealCheckFill } from "react-icons/pi";
import { FaShieldAlt } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { AiOutlineTeam } from "react-icons/ai";
import { BiSolidServer } from "react-icons/bi";
import { HiLightningBolt } from "react-icons/hi";

// Import motion
import { motion } from "framer-motion";

const WhyUsSection = () => {
  const { lang } = useLangContext();
  return (
    <section className="bg-body-secondary">
      <div className="container mx-auto py-12 px-4">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "backInOut" }}
          className="section-title w-fit mx-auto"
        >
          {lang == "en" ? "Why Necron?" : "لمذا نيكرون؟"}
        </motion.h2>
        {/* Cards */}
        <WhyUsSlider>
          {/* Start Card */}
          <WhyUsCard
            title={lang == "en" ? "Account Manager" : "مدير الحسابات"}
            description={
              lang == "en"
                ? "You can easily manage your account and invoices through the account management panel"
                : "يمكنك إدارة حسابك ومنتجاتك وفواتيرك بسهولة من خلال لوحة إدارة الحساب"
            }
          >
            {/* Card Icon */}
            <FaUser className="text-[35px] text-primary" />
          </WhyUsCard>
          {/* End Card */}
          {/* Start Card */}
          <WhyUsCard
            title={lang == "en" ? "High Quality" : "جودة عالية"}
            description={
              lang == "en"
                ? "At Necron, we always aim to provide the best equipment to create the best quality of services to offer to our clients"
                : "في نيكرون ، نهدف دائمًا إلى توفير أفضل الأجهزة لإنشاء أفضل جودة من الخدمات لنقدمها لعملائنا"
            }
          >
            {/* Card Icon */}
            <PiSealCheckFill className="text-[35px] text-primary" />
          </WhyUsCard>
          {/* End Card */}
          {/* Start Card */}
          <WhyUsCard
            title={lang == "en" ? "You are protected" : "انت محمي"}
            description={
              lang == "en"
                ? "Our services have powerful DDoS protection, in addition to the 2FA that will keep your and your accounts protected"
                : "تحتوي خدماتنا على حماية ديدوس قوية ستحميك دائمًا، بالإضافة إلى التحقق الثنائي الذي سيحمي حساباتك على مواقعنا"
            }
          >
            {/* Card Icon */}
            <FaShieldAlt className="text-[35px] text-primary" />
          </WhyUsCard>
          {/* End Card */}
          {/* Start Card */}
          <WhyUsCard
            title={lang == "en" ? "Private network" : "شبكة خاصة"}
            description={
              lang == "en"
                ? "At Necron, our devices have a registered private network, which makes the Internet have better performance and privacy"
                : "في نيكرون ، تمتلك أجهزتنا شبكة خاصة مسجلة، مما يجعل الإنترنت يتمتع بأداء أفضل، وتوفير أمان وخصوصية افضل"
            }
          >
            {/* Card Icon */}
            <BsFillShieldLockFill className="text-[35px] text-primary" />
          </WhyUsCard>
          {/* End Card */}
          {/* Start Card */}
          <WhyUsCard
            title={lang == "en" ? "Customer Support" : "الدعم الفني"}
            description={
              lang == "en"
                ? "With Necron, there is a customer support crew always ready to help you if you face any issues"
                : "مع نيكرون يوجد دائما طاقم كامل من الدعم الفني لمساعدتك اذا واجهت اي مشكلة"
            }
          >
            {/* Card Icon */}
            <BiSupport className="text-[35px] text-primary" />
          </WhyUsCard>
          {/* End Card */}
          {/* Start Card */}
          <WhyUsCard
            title={lang == "en" ? "Necron's Community" : "مجتمع متكامل"}
            description={
              lang == "en"
                ? "At Necron, there is a community of experts always ready to help each other at any time"
                : "في نيكرون ، يوجد دائمًا مجتمع من الخبراء المستعدين لمساعدة بعضهم البعض في أي وقت"
            }
          >
            {/* Card Icon */}
            <AiOutlineTeam className="text-[35px] text-primary" />
          </WhyUsCard>
          {/* End Card */}
          {/* Start Card */}
          <WhyUsCard
            title={lang == "en" ? "Multiple Servers" : "خوادم عديدة"}
            description={
              lang == "en"
                ? "There are a lot of high quality dedicated servers and equipment ready to be served to you anytime"
                : "هناك العديد من الخوادم والموارد المخصصة عالية الجودة جاهزة لتقديمها لك في أي وقت"
            }
          >
            {/* Card Icon */}
            <BiSolidServer className="text-[35px] text-primary" />
          </WhyUsCard>
          {/* End Card */}
          {/* Start Card */}
          <WhyUsCard
            title={lang == "en" ? "Uptime" : "مدة التشغيل"}
            description={
              lang == "en"
                ? "With Necron, we always aim to keep our services connected, making sure all your businesses are online"
                : "مع نيكرون ، نهدف إلى جعل خدماتك متصلة دائمًا لجعل جميع أعمالك تحت التشغيل"
            }
          >
            {/* Card Icon */}
            <HiLightningBolt className="text-[35px] text-primary" />
          </WhyUsCard>
          {/* End Card */}
          {/* End Cards */}
        </WhyUsSlider>
      </div>
    </section>
  );
};

export default WhyUsSection;
