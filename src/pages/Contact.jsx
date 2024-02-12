import { Helmet } from "react-helmet-async";

import {
  ContactHero,
  ContactLocations,
  ContactSocials,
} from "../components/contact-page";

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Necron | Contact us</title>
        <meta
          name="keywords"
          content="Necron, خوادم, بوتات, استضافة, VPS, في بي اس, استضافة بوتات ديسكورد, استضافة بوتات, استضافة ديسكورد, نيكرون هوست, Necron Host, host, Contact, تواصل, Support, Help, Assist, مساعدة, استفسار, Question"
        />
        <meta name="title" content="Necron | Contact" />
        <meta
          name="description"
          content="Necron | We listen to carefully to our customers, do not hesitate to ask any question in your mind"
        />
      </Helmet>
      <ContactHero />
      <ContactLocations />
      <ContactSocials />
    </div>
  );
};

export default Contact;
