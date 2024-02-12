import {
  VPSHero,
  VPSOperatingSystems,
  VPSPlans,
  VPSFeatures,
  VPSFAQs,
} from "../components/vps-page";

import { Helmet } from "react-helmet-async";

const VPS = () => {
  return (
    <div>
      <Helmet>
        <title>Necron | Virtual Private Servers</title>
        <meta
          name="keywords"
          content="Necron, خوادم, بوتات, استضافة, VPS, في بي اس, استضافة بوتات ديسكورد, استضافة بوتات, استضافة ديسكورد, نيكرون هوست, Necron Host, host, VPS, Virtual, Private, Servers, Hosting, Windows, Linux, Ubuntu, CentOS, Debian"
        />
        <meta name="title" content="Necron | Virtual Private Servers" />
        <meta
          name="description"
          content="Start your business and get your vps server now with special prices from Necron Host"
        />
      </Helmet>
      <VPSHero />
      <VPSOperatingSystems />
      <VPSPlans />
      <VPSFeatures />
      <VPSFAQs />
    </div>
  );
};

export default VPS;
