import {
  MinecraftFeatures,
  MinecraftHero,
  MinecraftFAQs,
  MinecraftPlans,
  MinecraftControlPanel,
} from "../components/minecraft-page";

import { Helmet } from "react-helmet-async";

const Minecraft = () => {
  return (
    <div>
      <Helmet>
        <title>Necron | Minecraft</title>
        <meta
          name="keywords"
          content="Necron, خوادم, بوتات, استضافة, VPS, في بي اس, استضافة بوتات ديسكورد, استضافة بوتات, استضافة ديسكورد, نيكرون هوست, Necron Host, host, Minecraft, Minecraft Servers, ماينكرافت, سيرفرات ماينكرافت, سيرفر, Minecraft Mutliplayer"
        />
        <meta name="title" content="Necron | Minecraft" />
        <meta
          name="description"
          content="Get your Minecraft server with our special prices"
        />
      </Helmet>
      <MinecraftHero />
      <MinecraftFeatures />
      <MinecraftPlans />
      <MinecraftControlPanel />
      <MinecraftFAQs />
    </div>
  );
};

export default Minecraft;
