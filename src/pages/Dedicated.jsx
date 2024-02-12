import { Helmet } from "react-helmet-async";
import {
  DedicatedHero,
  DedicatedFeatures,
  DedicatedPlans,
  DedicatedFeatures2,
  DedicatedFAQs,
} from "../components/dedicated-page";

const Dedicated = () => {
  return (
    <div>
      <Helmet>
        <title>Necron | Dedicated Servers</title>
        <meta
          name="keywords"
          content="Necron, خوادم, بوتات, استضافة, VPS, في بي اس, استضافة بوتات ديسكورد, استضافة بوتات, استضافة ديسكورد, نيكرون هوست, Necron Host, host, dedicated, servers"
        />
        <meta name="title" content="Necron | Dedicated Servers" />
        <meta
          content="Grow up your business and get your dedicated server now with special prices from Necron Host"
          name="description"
        />
      </Helmet>
      <DedicatedHero />
      <DedicatedFeatures />
      <DedicatedPlans />
      <DedicatedFeatures2 />
      <DedicatedFAQs />
    </div>
  );
};

export default Dedicated;
