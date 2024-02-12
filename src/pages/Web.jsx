import { Helmet } from "react-helmet-async";
import {
  WebFAQs,
  WebFeatures,
  WebHero,
  WebPlans,
  WebSystems,
} from "../components/webhosting-page";

const Web = () => {
  return (
    <div>
      <Helmet>
        <title>Necron | Web Hosting</title>
        <meta
          name="keywords"
          content="Necron, خوادم, بوتات, استضافة, VPS, في بي اس, استضافة بوتات ديسكورد, استضافة بوتات, استضافة ديسكورد, نيكرون هوست, Necron Host, host, Web, Webhosting, استضافة المواقع, موقع, انشاء موقع, cPanel, PHP, HTML, WordPress, React"
        />
        <meta name="title" content="Necron | Web Hosting" />
        <meta
          name="description"
          content="Get your website now with best prices"
        />
      </Helmet>
      <WebHero />
      <WebSystems />
      <WebPlans />
      <WebFeatures />
      <WebFAQs />
    </div>
  );
};

export default Web;
