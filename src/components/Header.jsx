// Import useState
import { useState } from "react";

// Import Images
import FullLogo from "../imgs/logo-full.webp";
import FullLogoAR from "../imgs/logo-arabic.png";
import Logo from "../icons/header-mobile-logo.svg";

// Import Link
import { NavLink } from "react-router-dom";

// Import Icons
import { BiMenu } from "react-icons/bi";
import SAFlag from "../icons/sa-flag.svg";
import USFlag from "../icons/us-flag.svg";
import Close from "../icons/close.svg";
import { BsDiscord } from "react-icons/bs";
import { BiLogoInstagramAlt, BiLogoTiktok } from "react-icons/bi";
import { RiTwitterXFill } from "react-icons/ri";

// Import Link
import { Link } from "react-router-dom";
import NavDropdown from "./NavDropdown";

// Import Context
import { useLangContext } from "../context/LangContext";

const Header = () => {
  // Handle Language Change
  const { lang } = useLangContext();
  const switchLanguage = () => {
    // setLang((lang) => (lang == "en" ? "ar" : "en"));
    // Save new language in local storage
    if (lang == "en") {
      // setLang("ar");
      localStorage.setItem("lang", "ar");
    } else if (lang == "ar") {
      // setLang("en");
      localStorage.setItem("lang", "en");
    }
    location.reload();
  };

  // Handle Nav Dropdown
  const [dropdown, setDropdown] = useState(null);
  const switchDropdown = (menuName) => {
    if (dropdown == menuName) {
      setDropdown(null);
    } else {
      setDropdown(menuName);
    }
  };

  // Mobile Nav
  const [isMobileNavShown, setIsMobileNavShown] = useState(false);
  return (
    <header className="bg-[#0C1020] fixed w-full shadow-lg z-[999]">
      <div className="container mx-auto px-[14px] sm:px-0 py-4 lg:py-8 flex justify-between items-center">
        {/* Logo */}
        <div>
          <Link to="/" className="hidden lg:block">
            <img
              src={lang == "en" ? FullLogo : FullLogoAR}
              alt="logo"
              className="h-[35px] object-contain hover__glow-png duration-300"
            />
          </Link>
          <Link to="/" className="block lg:hidden">
            <img
              src={Logo}
              alt="logo"
              className="h-[44px] sm:h-[64px] object-contain"
            />
          </Link>
        </div>
        {/* Nav */}
        <nav
          className={`${
            lang == "en" ? "xl:pl-[100px]" : "xl:pr-[100px]"
          } hidden lg:block`}
        >
          <ul className="flex text-white font-[600] gap-[28px] text-[17px]">
            {/* Home */}
            <li>
              <NavLink
                onClick={() => setDropdown(null)}
                to="/"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? `font-[700] before:w-1/2 after:w-1/2`
                      : `text-paragraph`
                  } 
                  relative duration-300
                  before:content-[""] before:absolute before:w-0 before:h-[3px] before:bg-primary before:bottom-0 before:duration-300 before:right-1/2
                  after:content-[""] after:absolute after:w-0 after:h-[3px] after:bg-primary after:bottom-0 after:duration-300 after:left-1/2
                  hover__glow-white
                  `
                }
              >
                {lang == "en" ? "Home" : "الرئيسية"}
              </NavLink>
            </li>
            {/* Services */}
            <NavDropdown
              name={"services"}
              display={lang == "en" ? "Services" : "الخدمات"}
              items={{
                [lang == "en" ? "VPS Servers" : "سيرفرات VPS"]: "/vps",
                [lang == "en" ? "Minecraft Servers" : "سيرفرات ماينكرافت"]:
                  "/minecraft",
                [lang == "en" ? "Web Hosting" : "استضافة المواقع"]: "/web",
                [lang == "en" ? "Discord Bots" : "بوتات ديسكورد"]: "/discord",
                [lang == "en" ? "Dedicated Servers" : "السيرفرات المخصصة"]:
                  "/dedicated",
              }}
              dropdown={dropdown}
              setDropdown={setDropdown}
              switchDropdown={switchDropdown}
            />
            {/* Pages */}
            <NavDropdown
              name={"pages"}
              display={lang == "en" ? "Pages" : "الصفحات"}
              items={{
                [lang == "en" ? "Report abuse" : "ابلاغ سوء الاستخدام"]:
                  "https://client.necron.host/submitticket.php",
                [lang == "en" ? "Contact us" : "تواصل معنا"]: "/contact",
                [lang == "en" ? "Terms of Service" : "شروط الخدمة"]: "/terms",
                [lang == "en" ? "Privacy Policy" : "سياسة الخصوصية"]:
                  "/privacy",
              }}
              dropdown={dropdown}
              setDropdown={setDropdown}
              switchDropdown={switchDropdown}
            />
            {/* Panels */}
            <NavDropdown
              name={"panels"}
              display={lang == "en" ? "Panels" : "اللوحات"}
              items={{
                [lang == "en" ? "Servers Panel" : "لوحة السيرفرات"]:
                  "https://panel.necron.host/",
                [lang == "en" ? "Web Hosting Panel" : "لوحة استضافة المواقع"]:
                  "https://web.necron.host/",
                [lang == "en" ? "Account Panel" : "لوحة ادارة الحساب"]:
                  "https://client.necron.host/",
              }}
              dropdown={dropdown}
              setDropdown={setDropdown}
              switchDropdown={switchDropdown}
            />
            <NavLink
              onClick={() => setDropdown(null)}
              to="/ping"
              className={({ isActive }) =>
                `${
                  isActive
                    ? `font-[700] before:w-1/2 after:w-1/2`
                    : `text-paragraph`
                } 
                  relative duration-300
                  before:content-[""] before:absolute before:w-0 before:h-[3px] before:bg-primary before:bottom-0 before:duration-300 before:right-1/2
                  after:content-[""] after:absolute after:w-0 after:h-[3px] after:bg-primary after:bottom-0 after:duration-300 after:left-1/2
                  hover__glow-white
                  `
              }
            >
              {lang == "en" ? "Ping Test" : "اختبار سرعة الاتصال"}
            </NavLink>
          </ul>
        </nav>
        {/* Controls */}
        <div className="flex items-center">
          <img
            src={lang == "en" ? SAFlag : USFlag}
            alt="SA Flag"
            className={`cursor-pointer duration-300 ${
              lang == "en"
                ? "hover__glow-sa mr-[8px] sm:mr-[32px] lg:mr-[51px]"
                : "hover__glow-us ml-[8px] sm:ml-[32px] lg:ml-[51px]"
            }`}
            onClick={() => switchLanguage()}
          />
          <a
            href="https://client.necron.host/index.php?rp=/login"
            className={`rounded-[4px] border-[2px] border-primary
            font-semibold sm:font-bold text-[14px] sm:text-[17px] text-white px-[10px] sm:px-[28px] py-[2px] sm:py-[8px]
            hover:bg-primary duration-300 hover__glow
            ${lang == "en" ? "mr-[8px]" : "ml-[8px]"}`}
          >
            {lang == "en" ? "Login" : "دخول"}
          </a>
          <a
            href="https://client.necron.host/register.php"
            className={`rounded-[4px] bg-primary border-[2px] border-primary
            font-semibold sm:font-bold text-[14px] sm:text-[17px] text-white px-[10px] sm:px-[28px] py-[2px] sm:py-[8px]
            hover__glow duration-300
            `}
          >
            {lang == "en" ? "Register" : "تسجيل"}
          </a>
          <BiMenu
            className="lg:hidden cursor-pointer text-primary text-[38px] sm:text-[48px]"
            onClick={() => setIsMobileNavShown(true)}
          />
        </div>
        {/* Mobile Nav */}
        <div
          className={`absolute bg-body-secondary w-screen h-screen top-0 left-0 duration-300 lg:hidden
        ${isMobileNavShown ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="relative w-full h-full px-6 py-2">
            {/* Header */}
            <div className="flex justify-between items-center">
              <Link to="/" onClick={() => setIsMobileNavShown(false)}>
                <img src={Logo} alt="Logo" className="h-[44px] sm:h-[50px]" />
              </Link>
              <img
                src={Close}
                alt="Close Menu"
                className="cursor-pointer sm:h-[23px]"
                onClick={() => setIsMobileNavShown(false)}
              />
            </div>

            {/* Nav Links */}
            <div className={`${lang == "en" ? "pl-2" : "pr-2"} mt-4`}>
              {/* Home */}
              <div>
                <Link
                  to="/"
                  className="font-semibold sm:text-[18px]"
                  onClick={() => setIsMobileNavShown(false)}
                >
                  {lang == "en" ? "Home" : "الرئيسية"}
                </Link>
              </div>
              {/* Services */}
              <div className="mt-3 flex flex-col gap-2">
                <h3 className="text-[14px] sm:text-[16px] text-primary font-bold">
                  {lang == "en" ? "Services" : "الخدمات"}
                </h3>
                <Link
                  to="/vps"
                  className="font-semibold sm:text-[18px]"
                  onClick={() => setIsMobileNavShown(false)}
                >
                  {lang == "en" ? "VPS Servers" : "سيرفرات VPS"}
                </Link>
                <Link
                  to="/web"
                  className="font-semibold sm:text-[18px]"
                  onClick={() => setIsMobileNavShown(false)}
                >
                  {lang == "en" ? "Web Hosting" : "استضافة المواقع"}
                </Link>
                <Link
                  to="/minecraft"
                  className="font-semibold sm:text-[18px]"
                  onClick={() => setIsMobileNavShown(false)}
                >
                  {lang == "en" ? "Minecraft Servers" : "سيرفرات ماينكرافت"}
                </Link>
                <Link
                  to="/discord"
                  className="font-semibold sm:text-[18px]"
                  onClick={() => setIsMobileNavShown(false)}
                >
                  {lang == "en" ? "Discord Bots" : "بوتات الديسكورد"}
                </Link>
                <Link
                  to="/dedicated"
                  className="font-semibold sm:text-[18px]"
                  onClick={() => setIsMobileNavShown(false)}
                >
                  {lang == "en" ? "Dedicated Servers" : "السيرفرات المخصصة"}
                </Link>
              </div>
              {/* Pages */}
              <div className="mt-3 flex flex-col gap-2">
                <h3 className="text-[14px] sm:text-[16px] text-primary font-bold">
                  {lang == "en" ? "Pages" : "الصفحات"}
                </h3>
                <a
                  href="https://client.necron.host/submitticket.php"
                  className="font-semibold sm:text-[18px]"
                >
                  {lang == "en" ? "Report Abuse" : "ابلاغ سوء الإستخدام"}
                </a>
                <Link
                  to="/contact"
                  className="font-semibold sm:text-[18px]"
                  onClick={() => setIsMobileNavShown(false)}
                >
                  {lang == "en" ? "Contact Us" : "تواصل معنا"}
                </Link>
                <Link
                  to="/terms"
                  className="font-semibold sm:text-[18px]"
                  onClick={() => setIsMobileNavShown(false)}
                >
                  {lang == "en" ? "Terms of Service" : "شروط الخدمة"}
                </Link>
                <Link
                  to="/privacy"
                  className="font-semibold sm:text-[18px]"
                  onClick={() => setIsMobileNavShown(false)}
                >
                  {lang == "en" ? "Privacy Policy" : "سياسة الخصوصية"}
                </Link>
              </div>
              {/* Panels */}
              <div className="mt-3 flex flex-col gap-2">
                <h3 className="text-[14px] sm:text-[16px] text-primary font-bold">
                  {lang == "en" ? "Panels" : "اللوحات"}
                </h3>
                <a
                  href="https://panel.necron.host/"
                  className="font-semibold sm:text-[18px]"
                >
                  {lang == "en" ? "Servers Panel" : "لوحة السيرفرات"}
                </a>
                <a
                  href="https://web.necron.host/"
                  className="font-semibold sm:text-[18px]"
                >
                  {lang == "en" ? "Web Hosting Panel" : "لوحة استضافة المواقع"}
                </a>
                <a
                  href="https://client.necron.host/"
                  className="font-semibold sm:text-[18px]"
                >
                  {lang == "en" ? "Account Panel" : "لوحة ادارة الحساب"}
                </a>
              </div>
              {/* Ping Test */}
              <div>
                <Link
                  to="/ping"
                  className="font-semibold sm:text-[18px] block mt-4"
                  onClick={() => setIsMobileNavShown(false)}
                >
                  {lang == "en" ? "Ping Test" : "اختبار سرعة الإتصال"}
                </Link>
              </div>
            </div>

            {/* Socials */}
            <div className="absolute bottom-[9.5%] left-1/2 -translate-x-1/2 flex items-center gap-4">
              <a href="https://discord.gg/nec">
                <BsDiscord size={25} />
              </a>
              <a href="https://instagram.com/necronhost">
                <BiLogoInstagramAlt size={25} />
              </a>
              <a href="https://tiktok.com/@necronhost">
                <BiLogoTiktok size={25} />
              </a>
              <a href="https://twitter.com/necronhost">
                <RiTwitterXFill size={22} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
