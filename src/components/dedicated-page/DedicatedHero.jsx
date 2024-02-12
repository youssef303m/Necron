import { useLangContext } from "../../context/LangContext";

import PageHero from "../PageHero";

// Import Images
import HeroStock from "../../imgs/dedicated-page/hero-stock.png";
import HeroBG from "../../imgs/dedicated-page/hero-bg.png";

const DedicatedHero = () => {
  const { lang } = useLangContext();
  return (
    <PageHero
      span={lang == "en" ? "DEDICATED" : "مخصص"}
      title={
        lang == "en" ? "Get Your Dedicated Server" : "احصل على سيرفرك المخصص"
      }
      description={
        lang == "en"
          ? `Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusm
      tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor
      sit amet consectetur adipiscing elit sed do eiusm tempor incididunt
      ut labore et dolore magna aliqua Lorem ipsum dolor sit amet
      consectetur adipiscing elit sed do eiusm tempor incididunt ut labore
      et dolore magna aliqua.`
          : `هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
      إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.`
      }
      img={HeroStock}
      bgImg={HeroBG}
      lang={lang}
    />
  );
};

export default DedicatedHero;
