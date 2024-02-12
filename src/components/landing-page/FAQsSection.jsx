import { Link } from "react-router-dom";
import { useLangContext } from "../../context/LangContext";
import FAQuestion from "../FAQuestion";

// Import motion
import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";

const FAQsSection = () => {
  const { lang } = useLangContext();
  return (
    <section>
      <div className="container mx-auto py-12 px-4 lg:px-12">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "backInOut" }}
          className="section-title w-fit mx-auto"
        >
          {lang == "en" ? "Frequently Asked Questions" : "الأسئلة الشائعة"}
        </motion.h2>
        <div className="flex max-lg:flex-col justify-center gap-12">
          {/* General FAQs */}
          <div className="flex-1">
            <motion.h3
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "backInOut" }}
              className="text-primary text-center text-[16px] sm:text-[18px]"
            >
              {lang == "en"
                ? "General Frequently Asked Questions"
                : "أسئلة شائعة عامة"}
            </motion.h3>
            <FAQuestion
              index={1}
              question={lang == "en" ? "What do we offer?" : "ماذا نقدم؟"}
            >
              {lang == "en"
                ? `Necron provides a variety of cloud services that benefit both individuals and organizations`
                : "تقدم نيكرون خدمات سحابية متنوعة تفيد الأفراد والمؤسسات"}
            </FAQuestion>
            <FAQuestion
              index={2}
              question={lang == "en" ? "Is Necron safe?" : "هل نيكرون آمن؟"}
            >
              {lang == "en"
                ? "Necron is safe and authorized in the Kingdom of Saudi Arabia, and registered in Maroof"
                : "نيكرون امن ومصرح في المملكة العربية السعودية ومسجل في معروف"}
            </FAQuestion>
            <FAQuestion
              index={3}
              question={
                lang == "en"
                  ? "How long does delivery take?"
                  : "كم يستغرق التسليم من الوقت؟"
              }
            >
              {lang == "en"
                ? `Orders are automatically delivered upon purchasing`
                : `يتم تسليم الطلبات تلقائيا بعد الشراء`}
            </FAQuestion>
            <FAQuestion
              index={4}
              question={
                lang == "en"
                  ? "Do you have a protection against DDoS attacks?"
                  : "هل لديكم حماية ضد هجمات الديدوس؟"
              }
            >
              {lang == "en"
                ? `Yes, we have a DDoS protection and it is customizable according to your business`
                : `نعم، لدينا حماية ديدوس وهي قابلة للتخصيص وفقًا لعملك`}
            </FAQuestion>
            {/* <FAQuestion
              index={5}
              question={
                lang == "en"
                  ? "How do I file an abuse report?"
                  : "كيف أقوم بتقديم بلاغ عن إساءة استخدام؟"
              }
            >
              {lang == "en" ? (
                <span>
                  From{" "}
                  <a
                    href="https://client.necron.host/submitticket.php"
                    className="text-primary underline"
                  >
                    Here
                  </a>
                </span>
              ) : (
                <span>
                  من{" "}
                  <a
                    href="https://client.necron.host/submitticket.php"
                    className="text-primary underline"
                  >
                    هنا
                  </a>
                </span>
              )}
            </FAQuestion>
            <FAQuestion
              index={6}
              question={
                lang == "en"
                  ? "What if there is something I do not understand?"
                  : "ماذا لو كان هناك شيء لا أفهمه؟"
              }
            >
              {lang == "en" ? (
                <span>
                  You can visit the{" "}
                  <a
                    href="https://client.necron.host/index.php?rp=/knowledgebase"
                    className="text-primary underline"
                  >
                    knowledge base
                  </a>{" "}
                  or contact our{" "}
                  <Link href="/support" className="text-primary underline">
                    customer service team
                  </Link>
                </span>
              ) : (
                <span>
                  يمكنك زيارة{" "}
                  <a
                    href="https://client.necron.host/index.php?rp=/knowledgebase"
                    className="text-primary underline"
                  >
                    مكتبة الشروحات
                  </a>{" "}
                  او التواصل مع{" "}
                  <Link to="/support" className="text-primary underline">
                    الدعم الفني
                  </Link>
                </span>
              )}
            </FAQuestion> */}
          </div>
          {/* Pricing FAQs */}
          <div className="flex-1">
            <motion.h3
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "backInOut" }}
              className="text-primary text-center text-[16px] sm:text-[18px]"
            >
              {lang == "en"
                ? "Pricing Frequently Asked Questions"
                : "أسئلة شائعة بخصوص الأسعار"}
            </motion.h3>
            <FAQuestion
              index={1}
              question={
                lang == "en"
                  ? "What are the payment methods?"
                  : "ما هي طرق الدفع المتاحة؟"
              }
            >
              {lang == "en"
                ? `You can pay using Visa, MasterCard, and Apple Pay`
                : `يمكنك الدفع باستخدام الفيزا, ماستر كارد, ابل باي`}
            </FAQuestion>
            <FAQuestion
              index={2}
              question={
                lang == "en"
                  ? "Are all your plans monthly?"
                  : "هل جميع خططكم شهرية؟"
              }
            >
              {lang == "en"
                ? `All plans are basically monthly. If you want a custom time, please contact our customer support`
                : `جميع الخطط شهرية في الأساس. إذا كنت تريد خطة بوقت مخصص، يرجى التواصل مع الدعم الفني`}
            </FAQuestion>
            <FAQuestion
              index={3}
              question={
                lang == "en"
                  ? "What is your refund policy?"
                  : "ما هي سياسة الاسترجاع لديكم؟"
              }
            >
              {lang == "en" ? (
                <span>
                  You can view it{" "}
                  <HashLink to="/terms#10" className="text-primary underline">
                    here
                  </HashLink>
                </span>
              ) : (
                <span>
                  يمكنك الاطلاع عليها{" "}
                  <HashLink to="/terms#10" className="text-primary underline">
                    من هنا
                  </HashLink>
                </span>
              )}
            </FAQuestion>
            <FAQuestion
              index={4}
              question={
                lang == "en"
                  ? "Can I upgrade my subscription later?"
                  : "هل يمكنني ترقية اشتراكي لاحقاً؟"
              }
            >
              {lang == "en" ? (
                <span>
                  Yes, through our online store{" "}
                  <a
                    href="https://client.necron.host/clientarea.php?action=services"
                    className="text-primary underline"
                  >
                    here
                  </a>
                </span>
              ) : (
                <span>
                  نعم, عبر متجرنا الالكتروني{" "}
                  <a
                    href="https://client.necron.host/clientarea.php?action=services"
                    className="text-primary underline"
                  >
                    من هنا
                  </a>
                </span>
              )}
            </FAQuestion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQsSection;
