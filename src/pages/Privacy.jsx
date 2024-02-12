import { useEffect, useRef, useState } from "react";
import { useLangContext } from "../context/LangContext";
import SingleTerm from "../components/terms-and-privacy/SingleTerm";
import Sidebar from "../components/terms-and-privacy/Sidebar";

const Privacy = () => {
  const { lang } = useLangContext();

  // Ref to get the container of all terms
  const termsContainer = useRef();

  // Ref to store the current index of term on screen
  // const currentTermId = useRef(0);
  const [currentTermId, setCurrentTermId] = useState(0);

  useEffect(() => {
    // Get offsetTop of the next of each term
    const list = Object.entries(termsContainer.current.children).map(
      ([index, child]) => {
        return child.offsetTop + child.offsetHeight - 125;
      }
    );
    const handleScroll = () => {
      // Find the first term that is >= window.scrollY
      let currentTerm = list.findIndex((term) => term >= window.scrollY);
      // Store the showing index in the ref to use styling the sidebar
      // currentTermId.current = currentTerm;
      setCurrentTermId(currentTerm);
    };
    window.addEventListener("scroll", handleScroll);

    // Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="pt-[76px] sm:pt-[96px] lg:pt-[110px] min-h-screen">
      <div className="container mx-auto py-12 px-4">
        {/* Section Title */}
        <h2 className="section-title w-fit mx-auto">
          {lang == "en" ? "Privacy Policy" : "سياسة الخصوصية"}
        </h2>
        {/* Content */}
        <div className="flex justify-between gap-8 lg:gap-32 items-start max-md:flex-col">
          {/* Sidebar */}
          <Sidebar
            items={[
              [lang == "en" ? "Introduction" : "مقدمة"],
              [
                lang == "en"
                  ? "Information we collect"
                  : "المعلومات التي نجمعها",
              ],
              [lang == "en" ? "Payment data" : "بيانات الدفع"],
              [lang == "en" ? "Information security" : "امان المعلومات"],
              [lang == "en" ? "Cookies" : "ملفات تعريف الإرتباط"],
            ]}
            currentTermId={currentTermId}
          />
          {/* Terms */}
          <div className="flex-1" ref={termsContainer}>
            <SingleTerm id={1} title={lang == "en" ? "Introduction" : "مقدمة"}>
              <ol className="grid gap-5">
                {lang == "en" ? (
                  <>
                    <li>
                      This Privacy Policy of Necron (where Necron may also be
                      referred to as: NecronNetworks, Necron, Khaled Al-Qahtani
                      or we), describes how and why we may collect, store, use
                      and/or share your information (“Processing”). When you use
                      our services (“Services”), such as when you visit any of
                      our websites, use any Necron services or devices in any
                      way, or engage with us in other related ways, including
                      any questions regarding sales, marketing, events or
                      Interests. Reading this Privacy Policy will help you
                      understand your privacy rights and choices. If you do not
                      agree with our policies and practices, please do not use
                      our Services. If you still have any questions or concerns,
                      please reach out to us at support@necron.host
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      تصف سياسة الخصوصية هذه الخاصة بـ Necron (حيث يمكن الإشارة
                      إلى Necron أيضًا باسم: NecronNetworks أو نيكرون أو خالد
                      القحطاني أو نحن) ، كيف ولماذا قد نقوم بجمع معلوماتك و / أو
                      تخزينها و / أو استخدامها و / أو مشاركتها ("معالجة"). عندما
                      تستخدم خدماتنا ("الخدمات") ، مثل عندما تزور أيًا من
                      مواقعنا الإلكترونية ، أو تستخدم أي من خدمات أو اجهزة
                      نيكرون بأي شكل من الأشكال ، أو تتعامل معنا بطرق أخرى ذات
                      صلة ، بما في ذلك أي أسئلة تتعلق بالمبيعات أو التسويق أو
                      الأحداث أو اهتمامات. ستساعدك قراءة سياسة الخصوصية هذه على
                      فهم حقوق وخيارات الخصوصية الخاصة بك. إذا كنت لا توافق على
                      سياساتنا وممارساتنا ، فيرجى عدم استخدام خدماتنا. إذا كان
                      لا يزال لديك أي أسئلة أو استفسارات ، فيرجى التواصل معنا
                      على support@necron.host
                    </li>
                  </>
                )}
              </ol>
            </SingleTerm>
            <SingleTerm
              id={2}
              title={
                lang == "en"
                  ? "Information we collect?"
                  : "المعلومات التي نجمعها"
              }
            >
              <ol className="grid gap-5">
                {lang == "en" ? (
                  <>
                    <li>
                      This Privacy Policy of Necron (where Necron may also be
                      referred to as: NecronNetworks, Necron, Khaled Al-Qahtani
                      or we), describes how and why we may collect, store, use
                      and/or share your information (“Processing”). When you use
                      our services (“Services”), such as when you visit any of
                      our websites, use any Necron services or devices in any
                      way, or engage with us in other related ways, including
                      any questions regarding sales, marketing, events or
                      Interests. Reading this Privacy Policy will help you
                      understand your privacy rights and choices. If you do not
                      agree with our policies and practices, please do not use
                      our Services. If you still have any questions or concerns,
                      please reach out to us at support@necron.host
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      تصف سياسة الخصوصية هذه الخاصة بـ Necron (حيث يمكن الإشارة
                      إلى Necron أيضًا باسم: NecronNetworks أو نيكرون أو خالد
                      القحطاني أو نحن) ، كيف ولماذا قد نقوم بجمع معلوماتك و / أو
                      تخزينها و / أو استخدامها و / أو مشاركتها ("معالجة"). عندما
                      تستخدم خدماتنا ("الخدمات") ، مثل عندما تزور أيًا من
                      مواقعنا الإلكترونية ، أو تستخدم أي من خدمات أو اجهزة
                      نيكرون بأي شكل من الأشكال ، أو تتعامل معنا بطرق أخرى ذات
                      صلة ، بما في ذلك أي أسئلة تتعلق بالمبيعات أو التسويق أو
                      الأحداث أو اهتمامات. ستساعدك قراءة سياسة الخصوصية هذه على
                      فهم حقوق وخيارات الخصوصية الخاصة بك. إذا كنت لا توافق على
                      سياساتنا وممارساتنا ، فيرجى عدم استخدام خدماتنا. إذا كان
                      لا يزال لديك أي أسئلة أو استفسارات ، فيرجى التواصل معنا
                      على support@necron.host
                    </li>
                  </>
                )}
              </ol>
            </SingleTerm>
            <SingleTerm
              id={3}
              title={lang == "en" ? "Payment data" : "بيانات الدفع"}
            >
              <ol className="grid gap-5">
                {lang == "en" ? (
                  <>
                    <li>
                      This Privacy Policy of Necron (where Necron may also be
                      referred to as: NecronNetworks, Necron, Khaled Al-Qahtani
                      or we), describes how and why we may collect, store, use
                      and/or share your information (“Processing”). When you use
                      our services (“Services”), such as when you visit any of
                      our websites, use any Necron services or devices in any
                      way, or engage with us in other related ways, including
                      any questions regarding sales, marketing, events or
                      Interests. Reading this Privacy Policy will help you
                      understand your privacy rights and choices. If you do not
                      agree with our policies and practices, please do not use
                      our Services. If you still have any questions or concerns,
                      please reach out to us at support@necron.host
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      تصف سياسة الخصوصية هذه الخاصة بـ Necron (حيث يمكن الإشارة
                      إلى Necron أيضًا باسم: NecronNetworks أو نيكرون أو خالد
                      القحطاني أو نحن) ، كيف ولماذا قد نقوم بجمع معلوماتك و / أو
                      تخزينها و / أو استخدامها و / أو مشاركتها ("معالجة"). عندما
                      تستخدم خدماتنا ("الخدمات") ، مثل عندما تزور أيًا من
                      مواقعنا الإلكترونية ، أو تستخدم أي من خدمات أو اجهزة
                      نيكرون بأي شكل من الأشكال ، أو تتعامل معنا بطرق أخرى ذات
                      صلة ، بما في ذلك أي أسئلة تتعلق بالمبيعات أو التسويق أو
                      الأحداث أو اهتمامات. ستساعدك قراءة سياسة الخصوصية هذه على
                      فهم حقوق وخيارات الخصوصية الخاصة بك. إذا كنت لا توافق على
                      سياساتنا وممارساتنا ، فيرجى عدم استخدام خدماتنا. إذا كان
                      لا يزال لديك أي أسئلة أو استفسارات ، فيرجى التواصل معنا
                      على support@necron.host
                    </li>
                  </>
                )}
              </ol>
            </SingleTerm>
            <SingleTerm
              id={4}
              title={lang == "en" ? "Information security" : "امان المعلومات"}
            >
              <ol className="grid gap-5">
                {lang == "en" ? (
                  <>
                    <li>
                      This Privacy Policy of Necron (where Necron may also be
                      referred to as: NecronNetworks, Necron, Khaled Al-Qahtani
                      or we), describes how and why we may collect, store, use
                      and/or share your information (“Processing”). When you use
                      our services (“Services”), such as when you visit any of
                      our websites, use any Necron services or devices in any
                      way, or engage with us in other related ways, including
                      any questions regarding sales, marketing, events or
                      Interests. Reading this Privacy Policy will help you
                      understand your privacy rights and choices. If you do not
                      agree with our policies and practices, please do not use
                      our Services. If you still have any questions or concerns,
                      please reach out to us at support@necron.host
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      تصف سياسة الخصوصية هذه الخاصة بـ Necron (حيث يمكن الإشارة
                      إلى Necron أيضًا باسم: NecronNetworks أو نيكرون أو خالد
                      القحطاني أو نحن) ، كيف ولماذا قد نقوم بجمع معلوماتك و / أو
                      تخزينها و / أو استخدامها و / أو مشاركتها ("معالجة"). عندما
                      تستخدم خدماتنا ("الخدمات") ، مثل عندما تزور أيًا من
                      مواقعنا الإلكترونية ، أو تستخدم أي من خدمات أو اجهزة
                      نيكرون بأي شكل من الأشكال ، أو تتعامل معنا بطرق أخرى ذات
                      صلة ، بما في ذلك أي أسئلة تتعلق بالمبيعات أو التسويق أو
                      الأحداث أو اهتمامات. ستساعدك قراءة سياسة الخصوصية هذه على
                      فهم حقوق وخيارات الخصوصية الخاصة بك. إذا كنت لا توافق على
                      سياساتنا وممارساتنا ، فيرجى عدم استخدام خدماتنا. إذا كان
                      لا يزال لديك أي أسئلة أو استفسارات ، فيرجى التواصل معنا
                      على support@necron.host
                    </li>
                  </>
                )}
              </ol>
            </SingleTerm>
            <SingleTerm
              id={5}
              title={lang == "en" ? "Cookies" : "ملفات تعريف الإرتباط"}
            >
              <ol className="grid gap-5">
                {lang == "en" ? (
                  <>
                    <li>
                      This Privacy Policy of Necron (where Necron may also be
                      referred to as: NecronNetworks, Necron, Khaled Al-Qahtani
                      or we), describes how and why we may collect, store, use
                      and/or share your information (“Processing”). When you use
                      our services (“Services”), such as when you visit any of
                      our websites, use any Necron services or devices in any
                      way, or engage with us in other related ways, including
                      any questions regarding sales, marketing, events or
                      Interests. Reading this Privacy Policy will help you
                      understand your privacy rights and choices. If you do not
                      agree with our policies and practices, please do not use
                      our Services. If you still have any questions or concerns,
                      please reach out to us at support@necron.host
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      تصف سياسة الخصوصية هذه الخاصة بـ Necron (حيث يمكن الإشارة
                      إلى Necron أيضًا باسم: NecronNetworks أو نيكرون أو خالد
                      القحطاني أو نحن) ، كيف ولماذا قد نقوم بجمع معلوماتك و / أو
                      تخزينها و / أو استخدامها و / أو مشاركتها ("معالجة"). عندما
                      تستخدم خدماتنا ("الخدمات") ، مثل عندما تزور أيًا من
                      مواقعنا الإلكترونية ، أو تستخدم أي من خدمات أو اجهزة
                      نيكرون بأي شكل من الأشكال ، أو تتعامل معنا بطرق أخرى ذات
                      صلة ، بما في ذلك أي أسئلة تتعلق بالمبيعات أو التسويق أو
                      الأحداث أو اهتمامات. ستساعدك قراءة سياسة الخصوصية هذه على
                      فهم حقوق وخيارات الخصوصية الخاصة بك. إذا كنت لا توافق على
                      سياساتنا وممارساتنا ، فيرجى عدم استخدام خدماتنا. إذا كان
                      لا يزال لديك أي أسئلة أو استفسارات ، فيرجى التواصل معنا
                      على support@necron.host
                    </li>
                  </>
                )}
              </ol>
            </SingleTerm>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Privacy;
