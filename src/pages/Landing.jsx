import {
  FAQsSection,
  HeroSection,
  PlansSection,
  WhatWeProvideSection,
  WhyUsSection,
} from "../components/landing-page";

import { Helmet } from "react-helmet-async";

const Landing = () => {
  return (
    <div>
      <Helmet>
        <title>Necron</title>
        <meta
          name="keywords"
          content="Necron, خوادم, بوتات, استضافة, VPS, في بي اس, استضافة بوتات ديسكورد, استضافة بوتات, استضافة ديسكورد, نيكرون هوست, Necron Host, host"
        />
        <meta name="title" content="Necron" />
        <meta
          name="description"
          content="Necron | Cloud services in a new way and at the best prices"
        />
      </Helmet>
      <HeroSection />
      <WhatWeProvideSection />
      <PlansSection />
      <WhyUsSection />
      <FAQsSection />
    </div>
  );
};

export default Landing;
