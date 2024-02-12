import { useLangContext } from "../../context/LangContext";

// Import Logo
import Logo from "../../imgs/contact-page/stay-connected-logo.png";

// Import Icons
import { BsDiscord } from "react-icons/bs";
import { BiLogoTiktok, BiLogoInstagramAlt } from "react-icons/bi";
import { HiMail } from "react-icons/hi";
import { FaXTwitter } from "react-icons/fa6";

// Import motion
import { motion } from "framer-motion";

const ContactSocials = () => {
  const { lang } = useLangContext();
  return (
    <section className="pb-16">
      <div className="container mx-auto py-12 px-4 lg:px-12">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "backInOut" }}
          className="section-title w-fit mx-auto"
        >
          {lang == "en" ? (
            <div className="flex items-center">
              Stay C
              <img
                loading="lazy"
                src={Logo}
                alt="o"
                className="object-contain sm:h-[36px] md:h-[38px] h-[30px] -mb-1 sm:-mb-2"
              />
              nnected
            </div>
          ) : (
            <div className="flex items-center">
              ابقى على توا
              <img
                loading="lazy"
                src={Logo}
                alt="o"
                className="object-contain sm:h-[36px] md:h-[38px] h-[30px] -mb-2"
              />
              ـل
            </div>
          )}
        </motion.h2>
        <div className="flex justify-center items-center gap-4 sm:gap-10 xl:gap-20 max-sm:flex-col">
          {/* Discord */}
          <SocialIconButton url={"https://discord.gg/nec"}>
            <BsDiscord className="text-[32px]" />
          </SocialIconButton>
          {/* Tiktok */}
          <SocialIconButton url={"https://tiktok.com/@necronhost"}>
            <BiLogoTiktok className="text-[38px]" />
          </SocialIconButton>
          {/* Mail */}
          <SocialIconButton url={"mailto: support@necron.host"}>
            <HiMail className="text-[38px]" />
          </SocialIconButton>
          {/* Instagram */}
          <SocialIconButton url={"https://instagram.com/necronhost"}>
            <BiLogoInstagramAlt className="text-[38px]" />
          </SocialIconButton>
          {/* Twitter */}
          <SocialIconButton url={"https://twitter.com/necronhost"}>
            <FaXTwitter className="text-[32px]" />
          </SocialIconButton>
        </div>
      </div>
    </section>
  );
};

export default ContactSocials;

const SocialIconButton = ({ url, children }) => {
  return (
    <motion.a
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "backInOut" }}
      href={url}
      className="flex items-center justify-center bg-primary bg-opacity-25 w-20 aspect-square text-primary rounded-[4px]
      hover:bg-primary hover:text-white duration-300 hover__glow-sm"
    >
      {children}
    </motion.a>
  );
};
