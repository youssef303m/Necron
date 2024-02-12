// Import Logo
import FullLogo from "../imgs/logo-full.webp";
import FullLogoAR from "../imgs/logo-arabic.png";

// Import Link
import { Link } from "react-router-dom";

// Import Icons
import { BsDiscord } from "react-icons/bs";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useLangContext } from "../context/LangContext";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { useState } from "react";

// Import motion
import { motion } from "framer-motion";

const Footer = () => {
  const { lang } = useLangContext();
  return (
    <motion.footer
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "backInOut" }}
      className="bg-[#02060B]"
    >
      <div className="container mx-auto flex justify-between pt-14 px-4 pb-5 max-lg:flex-col max-lg:items-center">
        {/* Logo and Socials */}
        <div>
          {/* Logo */}
          <Link to="/">
            <img
              src={lang == "en" ? FullLogo : FullLogoAR}
              alt="Logo"
              className="object-contain max-h-[35px] sm:max-h-[48px] lg:max-h-[35px] max-lg:mx-auto"
            />
          </Link>
          {/* Paragraph */}
          <p className="text-paragraph leading-[120%] text-[14px] mt-7 max-w-[400px] max-lg:text-center">
            {lang == "en" ? (
              <span>
                Necron is authorized and registered in the Kingdom of Saudi
                Arabia
                <br />
                Necron's Network Autonomous System Number: AS216396
              </span>
            ) : (
              <span>
                نيكرون مصرح في المملكة العربية السعودية ومسجل في معروف
                <br />
                رقم شبكتنا الخاصة: AS216396
              </span>
            )}
          </p>

          {/* == Start Socials == */}
          <div className="flex mt-6 gap-3 max-lg:justify-center">
            {/* -- Discord -- */}
            <SocialIcon url={"https://discord.gg/nec"}>
              <BsDiscord className="text-[24px] text-primary group-hover:text-white duration-300" />
            </SocialIcon>
            {/* -- Instagram -- */}
            <SocialIcon url={"https://instagram.com/necronhost"}>
              <BiLogoInstagramAlt className="text-[24px] text-primary group-hover:text-white duration-300" />
            </SocialIcon>
            {/* -- Tiktok -- */}
            <SocialIcon url={"https://tiktok.com/@necronhost"}>
              <FaTiktok className="text-[24px] text-primary group-hover:text-white duration-300" />
            </SocialIcon>
            {/* -- Twitter -- */}
            <SocialIcon url={"https://twitter.com/necronhost"}>
              <FaXTwitter className="text-[24px] text-primary group-hover:text-white duration-300" />
            </SocialIcon>
          </div>
          {/* == End Socials == */}
        </div>
        {/* Navigation and Copyrights */}
        <div className="flex flex-col justify-between lg:gap-8 xl:gap-16 max-lg:mt-10 max-lg:w-full">
          {/* == Start Navigation == */}
          <div className="flex gap-4 lg:gap-8 xl:gap-20 max-lg:flex-col">
            {/* -- About Us -- */}
            <NavSection
              title={lang == "en" ? "About Us" : "عنَّا"}
              links={[
                [
                  "News",
                  "الأخبار",
                  "https://client.necron.host/index.php?rp=/announcements",
                ],
                ["Terms of Use", "شروط الإستخدام", "/terms"],
                ["Privacy Policy", "سياسة الخصوصية", "/privacy"],
              ]}
              lang={lang}
            />
            {/* -- Services -- */}
            <NavSection
              title={lang == "en" ? "Services" : "الخدمات"}
              links={[
                ["VPS Servers", "سيرفرات VPS", "/vps"],
                ["Minecraft Servers", "سيرفرات ماينكرافت", "/minecraft"],
                ["Website Hosting", "استضافة المواقع", "/web"],
                ["Discord Bots", "بوتات الديسكورد", "/discord"],
                ["Dedicated Servers", "سيرفرات مخصصة", "/dedicated"],
              ]}
              lang={lang}
            />
            {/* -- Control Panel -- */}
            <NavSection
              title={lang == "en" ? "Control Panels" : "لوحات التحكم"}
              links={[
                [
                  "Server Control Panel",
                  "لوحة السيرفر",
                  "https://panel.necron.host/",
                ],
                ["Account Panel", "لوحة الحساب", "https://client.necron.host/"],
                ["VPS Control Panel", "لوحة الVPS", "https://vps.necron.host/"],
                [
                  "Website Control Panels",
                  "لوحة المواقع",
                  "https://web.necron.host/",
                ],
              ]}
              lang={lang}
            />
            {/* -- Help -- */}
            <NavSection
              title={lang == "en" ? "Help" : "المساعدة"}
              links={[
                [
                  "Explanations",
                  "التوضيحات",
                  "https://client.necron.host/index.php?rp=/knowledgebase",
                ],
                ["Contact us", "تواصل معنا", "/contact"],
                [
                  "Report Abuse",
                  "ابلاغ سوء الاستخدام",
                  "https://client.necron.host/submitticket.php",
                ],
                [
                  "Network Status",
                  "حالة الشبكة",
                  "https://client.necron.host/serverstatus.php",
                ],
              ]}
              lang={lang}
            />
          </div>
          {/* == End Navigation == */}
          {/* Copyrights */}
          <div className="text-end text-primary max-lg:text-center max-sm:text-[14px] max-lg:mt-4">
            {lang == "en"
              ? "Copyright © 2023 Necron, All Rights Reserved"
              : "جميع الحقوق محفوظة © 2023 نيكرون"}
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

const SocialIcon = ({ url, children }) => {
  return (
    <a
      href={url}
      className="block bg-primary bg-opacity-25 rounded-full p-2 group hover:bg-opacity-100 duration-300 hover__glow-sm"
    >
      {children}
    </a>
  );
};

const NavSection = ({ title, links, lang }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      {/* Desktop */}
      <div className="flex flex-col gap-4 max-lg:hidden">
        <h4 className="font-semibold text-[18px]">{title}</h4>
        <div className="flex flex-col gap-2">
          {links.map(([nameEN, nameAR, url], index) => (
            <Link
              to={url}
              className="text-paragraph hover:underline"
              key={index}
            >
              {lang == "en" ? nameEN : nameAR}
            </Link>
          ))}
        </div>
      </div>
      {/* Mobile (Dropdown) */}
      <div
        className={`lg:hidden bg-body-secondary duration-300 border-[1px] border-primary
      ${!isActive && "border-opacity-25"}`}
      >
        {/* Header */}
        <div
          className="p-4 flex justify-between items-center cursor-pointer"
          onClick={() => setIsActive((prev) => !prev)}
        >
          <h4
            className={` ont-semibold text-[20px] duration-300 ${
              isActive && "text-primary"
            }`}
          >
            {title}
          </h4>
          <MdOutlineArrowDropDown
            className={`text-[30px] duration-300 ${
              isActive ? "text-primary" : "-rotate-90"
            }`}
          />
        </div>
        {/* Dropdown */}
        <div
          className={`duration-300 grid border-t-[1px] border-t-primary ${
            isActive
              ? "grid-rows-[1fr] border-opacity-25"
              : "grid-rows-[0fr] border-opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="flex flex-col">
              {links.map(([nameEN, nameAR, url], index) => (
                <a href={url} key={index} className="odd:bg-body-primary p-4">
                  {lang == "en" ? nameEN : nameAR}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
