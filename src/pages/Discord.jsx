import { Helmet } from "react-helmet-async";
import {
  DiscordBotLanguages,
  DiscordFAQs,
  DiscordFeatures,
  DiscordHero,
  DiscordPlans,
} from "../components/discord-page";

const Discord = () => {
  return (
    <div>
      <Helmet>
        <title>Necron | Discord</title>
        <meta
          name="keywords"
          content="Necron, خوادم, بوتات, استضافة, VPS, في بي اس, استضافة بوتات ديسكورد, استضافة بوتات, استضافة ديسكورد, نيكرون هوست, Necron Host, host, Discord, Discord Bots, ديسكورد, بوت, بوتات,دسكورد"
        />
        <meta name="title" content="Necron | Discord" />
        <meta
          name="description"
          content="Get your Discord services in a faster way"
        />
      </Helmet>
      <DiscordHero />
      <DiscordBotLanguages />
      <DiscordPlans />
      <DiscordFeatures />
      <DiscordFAQs />
    </div>
  );
};

export default Discord;
