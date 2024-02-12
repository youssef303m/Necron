import FAQuestion from "../FAQuestion";
import { useLangContext } from "../../context/LangContext";

// Import motion
import { motion } from "framer-motion";

const MinecraftFAQs = () => {
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
              question={lang == "en" ? "What we offer?" : "ماذا نقدم؟"}
            >
              {lang == "en"
                ? `Urna vitae erat et lacus, consectetur ac nulla vestibulum
          lobortis. Nulla dapibus urna volutpat venenatis, risus faucibus.
          Urna vitae erat et lacus, consectetur ac nulla vestibulum
          lobortis. Nulla dapibus urna volutpat venenatis, risus faucibus.`
                : `هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.`}
            </FAQuestion>
            <FAQuestion
              index={2}
              question={lang == "en" ? "Is Necron safe?" : "هل نيكرون آمنة؟"}
            >
              {lang == "en"
                ? `Urna vitae erat et lacus, consectetur ac nulla vestibulum
          lobortis. Nulla dapibus urna volutpat venenatis, risus faucibus.
          Urna vitae erat et lacus, consectetur ac nulla vestibulum
          lobortis. Nulla dapibus urna volutpat venenatis, risus faucibus.`
                : `هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.`}
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
                ? `Urna vitae erat et lacus, consectetur ac nulla vestibulum
          lobortis. Nulla dapibus urna volutpat venenatis, risus faucibus.
          Urna vitae erat et lacus, consectetur ac nulla vestibulum
          lobortis. Nulla dapibus urna volutpat venenatis, risus faucibus.`
                : `هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.`}
            </FAQuestion>
            <FAQuestion
              index={4}
              question={
                lang == "en"
                  ? "How do I file an abuse report?"
                  : "كيف اقوم بعمل بلاغ سوء استخدام"
              }
            >
              {lang == "en"
                ? `Urna vitae erat et lacus, consectetur ac nulla vestibulum
          lobortis. Nulla dapibus urna volutpat venenatis, risus faucibus.
          Urna vitae erat et lacus, consectetur ac nulla vestibulum
          lobortis. Nulla dapibus urna volutpat venenatis, risus faucibus.`
                : `هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.`}
            </FAQuestion>
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
                ? `Urna vitae erat et lacus, consectetur ac nulla vestibulum
          lobortis. Nulla dapibus urna volutpat venenatis, risus faucibus.
          Urna vitae erat et lacus, consectetur ac nulla vestibulum
          lobortis. Nulla dapibus urna volutpat venenatis, risus faucibus.`
                : `هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.`}
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
                ? `Urna vitae erat et lacus, consectetur ac nulla vestibulum
          lobortis. Nulla dapibus urna volutpat venenatis, risus faucibus.
          Urna vitae erat et lacus, consectetur ac nulla vestibulum
          lobortis. Nulla dapibus urna volutpat venenatis, risus faucibus.`
                : `هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.`}
            </FAQuestion>
            <FAQuestion
              index={3}
              question={
                lang == "en"
                  ? "What is your refund policy?"
                  : "ما هي سياسة الاسترجاع لديكم؟"
              }
            >
              {lang == "en"
                ? `Urna vitae erat et lacus, consectetur ac nulla vestibulum
          lobortis. Nulla dapibus urna volutpat venenatis, risus faucibus.
          Urna vitae erat et lacus, consectetur ac nulla vestibulum
          lobortis. Nulla dapibus urna volutpat venenatis, risus faucibus.`
                : `هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.`}
            </FAQuestion>
            <FAQuestion
              index={4}
              question={
                lang == "en"
                  ? "Can I upgrade my subscription later?"
                  : "هل يمكنني ترقية اشتراكي لاحقاً؟"
              }
            >
              {lang == "en"
                ? `Urna vitae erat et lacus, consectetur ac nulla vestibulum
          lobortis. Nulla dapibus urna volutpat venenatis, risus faucibus.
          Urna vitae erat et lacus, consectetur ac nulla vestibulum
          lobortis. Nulla dapibus urna volutpat venenatis, risus faucibus.`
                : `هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.`}
            </FAQuestion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinecraftFAQs;
