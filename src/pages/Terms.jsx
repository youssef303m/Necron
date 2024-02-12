import { useEffect, useRef, useState } from "react";
import { useLangContext } from "../context/LangContext";
import SingleTerm from "../components/terms-and-privacy/SingleTerm";
import Sidebar from "../components/terms-and-privacy/Sidebar";

const Terms = () => {
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
          {lang == "en" ? "Terms of Service" : "شروط الخدمة"}
        </h2>
        {/* Content */}
        <div className="flex justify-between gap-8 lg:gap-32 items-start max-md:flex-col">
          {/* Sidebar */}
          <Sidebar
            items={[
              [lang == "en" ? "Introduction" : "مقدمة"],
              [lang == "en" ? "Agree to the terms" : "الموافقة على الشروط"],
              [lang == "en" ? "User acknowledgments" : "إقرارات المستخدم"],
              [lang == "en" ? "User registration" : "تسجيل المستخدم"],
              [lang == "en" ? "Subscription expiration" : "إنتهاء الإشتراك"],
              [lang == "en" ? "Prohibited activities" : "الأنشطة المحظورة"],
              [lang == "en" ? "Limitation of liability" : "حدود المسؤولية"],
              [lang == "en" ? "Network security" : "أمن الشبكة"],
              [lang == "en" ? "Payments" : "المدفوعات"],
              [lang == "en" ? "Refund policy" : "سياسة إعادة الاموال"],
              [lang == "en" ? "Technical support" : "الدعم الفني"],
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
                      These Terms of Use constitute a legally binding agreement
                      between the two parties, and this includes the first
                      party: the user or any entity on his behalf, where the
                      first party is referred to as you, and the other party
                      includes: Necron, where the other party may be referred to
                      as Necron, NecronNetworks, Necron, or Khaled Al-Qahtani.
                      Or us, in connection with your access to or use of the
                      necron.host website or any affiliated website, affiliated
                      services, affiliated servers, mobile applications
                      otherwise associated with it, or any affiliated media.
                    </li>
                    <li>
                      Necron is affiliated with the freelancer “Khaled
                      Al-Qahtani”, and there is a freelance document registered
                      in the Kingdom of Saudi Arabia related to this field that
                      declares Necron's operations.
                    </li>
                    <li>
                      The User undertakes that he has read, understood, and
                      agrees to be bound by all of these Terms of Use before
                      using any of the Services or any of the Necron Sites.
                    </li>
                    <li>
                      Supplemental terms and conditions or documents that may be
                      posted on any Necron Site from time to time are hereby
                      expressly incorporated by reference.
                    </li>
                    <li>
                      We reserve the right, in our sole discretion, to make
                      changes or modifications to these Terms of Use from time
                      to time
                    </li>
                    <li>
                      We will notify you updating the date of this terms of use,
                      and you waive any right to receive specific notifications
                      with every such change
                    </li>
                    <li>
                      Please be sure to review the applicable terms each time
                      you use any of Necron's services or any of its sites so
                      that you understand the applicable terms
                    </li>
                    <li>
                      When the Terms of Use are modified, you will be deemed to
                      have acted in accordance with and accepted them and will
                      be subject to the changes through your continued use of
                      the Site or Necron's sites or services after the date the
                      modified Terms of Use are posted.
                    </li>
                    <li>
                      Your use of this or any Necron website and/or use of
                      Necron Services creates a contract between the user and
                      Necron under this Agreement. When the User logs in and/or
                      Users access or use the services stipulated in this
                      Agreement, it constitutes the User's acceptance of the
                      Agreements.
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      تشكل شروط الاستخدام هذه اتفاقية ملزمة قانونًا بين الطرفين
                      , وهذا يشمل الطرف الأول: المستخدم أو أي كيان ينوب عنه ,
                      حيث يُشار إلى الطرف الأول انت, ويشمل الطرف الآخر: Necron ,
                      حيث قد يشار إلى الطرف الآخر باسم Necron أو NecronNetworks
                      أو نيكرون أو خالد القحطاني أو نحن, فيما يتعلق بوصولك او
                      إستخدامك للموقع necron.host أو أي موقع تابع له أو خدمات
                      تابعه له أو خوادم تابعه له أو تطبيقات الهاتف المحمول
                      المرتبطة به بطريقة أو بأخرى, أو أي وسائط تابعه له
                    </li>
                    <li>
                      نيكرون تابعة للعامل الحر "خالد القحطاني", ويوجد وثيقة عمل
                      حر مسجلة بالمملكة العربية السعودية تابعة لهذا المجال تصرح
                      عمليات نيكرون
                    </li>
                    <li>
                      يتعهد المستخدم أنه قد قرأ وفهم ووافق على الالتزام بجميع
                      شروط الاستخدام هذه قبل استخدام أي من خدمات أو أي من مواقع
                      نيكرون
                    </li>
                    <li>
                      الشروط والأحكام التكميلية أو المستندات التي قد يتم نشرها
                      على أي من مواقع نيكرون من وقت لآخر تم تضمينها بموجب هذه
                      الوثيقة صراحةً بالإشارة إليها
                    </li>
                    <li>
                      نحتفظ بالحق , وفقًا لتقديرنا الخاص , في إجراء تغييرات أو
                      تعديلات على شروط الاستخدام هذه من وقت لآخر
                    </li>
                    <li>
                      سننبهك بأي تغييرات عن طريق تحديث تاريخ آخر تحديث لشروط
                      الاستخدام هذه , وأنت تتنازل عن أي حق في تلقي إشعار محدد
                      بكل تغيير من هذا القبيل
                    </li>
                    <li>
                      يرجى التأكد من مراجعة الشروط المعمول بها في كل مرة تستخدم
                      فيها أي من خدمات نيكرون أو أي من مواقعها حتى تفهم الشروط
                      المعمول بها
                    </li>
                    <li>
                      عندما يتم تعديل شروط الاستخدام , سيتم اعتبار أنك قد تصرفت
                      بموجبها وقبلتها وستخضع للتغييرات من خلال استمرار استخدامك
                      للموقع أو المواقع أو الخدمات التابعة لنيكرون بعد تاريخ نشر
                      شروط الاستخدام المعدلة
                    </li>
                    <li>
                      يؤدي استخدامك لهذا الموقع أو أي موقع ويب تابع لنيكرون و /
                      أو استعمال لخدمات نيكرون إلى إنشاء عقد بين المستخدم
                      ونيكرون بموجب هذه الاتفاقية. عندما يقوم المستخدم بتسجيل
                      الدخول و / أو وصول المستخدمين أو استخدامهم للخدمات المنصوص
                      عليها في هذه الاتفاقية , فإنها تشكل قبول المستخدم
                      للاتفاقيات
                    </li>
                  </>
                )}
              </ol>
            </SingleTerm>
            <SingleTerm
              id={2}
              title={
                lang == "en" ? "Agree to the terms" : "الموافقة على الشروط"
              }
            >
              <ol className="grid gap-5">
                {lang == "en" ? (
                  <>
                    <li>
                      These Terms of Use constitute a legally binding agreement
                      between the two parties, and this includes the first
                      party: the user or any entity on his behalf, where the
                      first party is referred to as you, and the other party
                      includes: Necron, where the other party may be referred to
                      as Necron, NecronNetworks, Necron, or Khaled Al-Qahtani.
                      Or us, in connection with your access to or use of the
                      necron.host website or any affiliated website, affiliated
                      services, affiliated servers, mobile applications
                      otherwise associated with it, or any affiliated media.
                    </li>
                    <li>
                      Necron is affiliated with the freelancer “Khaled
                      Al-Qahtani”, and there is a freelance document registered
                      in the Kingdom of Saudi Arabia related to this field that
                      declares Necron's operations.
                    </li>
                    <li>
                      The User undertakes that he has read, understood, and
                      agrees to be bound by all of these Terms of Use before
                      using any of the Services or any of the Necron Sites.
                    </li>
                    <li>
                      Supplemental terms and conditions or documents that may be
                      posted on any Necron Site from time to time are hereby
                      expressly incorporated by reference.
                    </li>
                    <li>
                      We reserve the right, in our sole discretion, to make
                      changes or modifications to these Terms of Use from time
                      to time
                    </li>
                    <li>
                      We will notify you updating the date of this terms of use,
                      and you waive any right to receive specific notifications
                      with every such change
                    </li>
                    <li>
                      Please be sure to review the applicable terms each time
                      you use any of Necron's services or any of its sites so
                      that you understand the applicable terms
                    </li>
                    <li>
                      When the Terms of Use are modified, you will be deemed to
                      have acted in accordance with and accepted them and will
                      be subject to the changes through your continued use of
                      the Site or Necron's sites or services after the date the
                      modified Terms of Use are posted.
                    </li>
                    <li>
                      Your use of this or any Necron website and/or use of
                      Necron Services creates a contract between the user and
                      Necron under this Agreement. When the User logs in and/or
                      Users access or use the services stipulated in this
                      Agreement, it constitutes the User's acceptance of the
                      Agreements.
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      تشكل شروط الاستخدام هذه اتفاقية ملزمة قانونًا بين الطرفين
                      , وهذا يشمل الطرف الأول: المستخدم أو أي كيان ينوب عنه ,
                      حيث يُشار إلى الطرف الأول انت, ويشمل الطرف الآخر: Necron ,
                      حيث قد يشار إلى الطرف الآخر باسم Necron أو NecronNetworks
                      أو نيكرون أو خالد القحطاني أو نحن, فيما يتعلق بوصولك او
                      إستخدامك للموقع necron.host أو أي موقع تابع له أو خدمات
                      تابعه له أو خوادم تابعه له أو تطبيقات الهاتف المحمول
                      المرتبطة به بطريقة أو بأخرى, أو أي وسائط تابعه له
                    </li>
                    <li>
                      نيكرون تابعة للعامل الحر "خالد القحطاني", ويوجد وثيقة عمل
                      حر مسجلة بالمملكة العربية السعودية تابعة لهذا المجال تصرح
                      عمليات نيكرون
                    </li>
                    <li>
                      يتعهد المستخدم أنه قد قرأ وفهم ووافق على الالتزام بجميع
                      شروط الاستخدام هذه قبل استخدام أي من خدمات أو أي من مواقع
                      نيكرون
                    </li>
                    <li>
                      الشروط والأحكام التكميلية أو المستندات التي قد يتم نشرها
                      على أي من مواقع نيكرون من وقت لآخر تم تضمينها بموجب هذه
                      الوثيقة صراحةً بالإشارة إليها
                    </li>
                    <li>
                      نحتفظ بالحق , وفقًا لتقديرنا الخاص , في إجراء تغييرات أو
                      تعديلات على شروط الاستخدام هذه من وقت لآخر
                    </li>
                    <li>
                      سننبهك بأي تغييرات عن طريق تحديث تاريخ آخر تحديث لشروط
                      الاستخدام هذه , وأنت تتنازل عن أي حق في تلقي إشعار محدد
                      بكل تغيير من هذا القبيل
                    </li>
                    <li>
                      يرجى التأكد من مراجعة الشروط المعمول بها في كل مرة تستخدم
                      فيها أي من خدمات نيكرون أو أي من مواقعها حتى تفهم الشروط
                      المعمول بها
                    </li>
                    <li>
                      عندما يتم تعديل شروط الاستخدام , سيتم اعتبار أنك قد تصرفت
                      بموجبها وقبلتها وستخضع للتغييرات من خلال استمرار استخدامك
                      للموقع أو المواقع أو الخدمات التابعة لنيكرون بعد تاريخ نشر
                      شروط الاستخدام المعدلة
                    </li>
                    <li>
                      يؤدي استخدامك لهذا الموقع أو أي موقع ويب تابع لنيكرون و /
                      أو استعمال لخدمات نيكرون إلى إنشاء عقد بين المستخدم
                      ونيكرون بموجب هذه الاتفاقية. عندما يقوم المستخدم بتسجيل
                      الدخول و / أو وصول المستخدمين أو استخدامهم للخدمات المنصوص
                      عليها في هذه الاتفاقية , فإنها تشكل قبول المستخدم
                      للاتفاقيات
                    </li>
                  </>
                )}
              </ol>
            </SingleTerm>
            <SingleTerm
              id={3}
              title={lang == "en" ? "User acknowledgments" : "إقرارات المستخدم"}
            >
              <ol className="grid gap-5">
                {lang == "en" ? (
                  <>
                    <li>
                      These Terms of Use constitute a legally binding agreement
                      between the two parties, and this includes the first
                      party: the user or any entity on his behalf, where the
                      first party is referred to as you, and the other party
                      includes: Necron, where the other party may be referred to
                      as Necron, NecronNetworks, Necron, or Khaled Al-Qahtani.
                      Or us, in connection with your access to or use of the
                      necron.host website or any affiliated website, affiliated
                      services, affiliated servers, mobile applications
                      otherwise associated with it, or any affiliated media.
                    </li>
                    <li>
                      Necron is affiliated with the freelancer “Khaled
                      Al-Qahtani”, and there is a freelance document registered
                      in the Kingdom of Saudi Arabia related to this field that
                      declares Necron's operations.
                    </li>
                    <li>
                      The User undertakes that he has read, understood, and
                      agrees to be bound by all of these Terms of Use before
                      using any of the Services or any of the Necron Sites.
                    </li>
                    <li>
                      Supplemental terms and conditions or documents that may be
                      posted on any Necron Site from time to time are hereby
                      expressly incorporated by reference.
                    </li>
                    <li>
                      We reserve the right, in our sole discretion, to make
                      changes or modifications to these Terms of Use from time
                      to time
                    </li>
                    <li>
                      We will notify you updating the date of this terms of use,
                      and you waive any right to receive specific notifications
                      with every such change
                    </li>
                    <li>
                      Please be sure to review the applicable terms each time
                      you use any of Necron's services or any of its sites so
                      that you understand the applicable terms
                    </li>
                    <li>
                      When the Terms of Use are modified, you will be deemed to
                      have acted in accordance with and accepted them and will
                      be subject to the changes through your continued use of
                      the Site or Necron's sites or services after the date the
                      modified Terms of Use are posted.
                    </li>
                    <li>
                      Your use of this or any Necron website and/or use of
                      Necron Services creates a contract between the user and
                      Necron under this Agreement. When the User logs in and/or
                      Users access or use the services stipulated in this
                      Agreement, it constitutes the User's acceptance of the
                      Agreements.
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      تشكل شروط الاستخدام هذه اتفاقية ملزمة قانونًا بين الطرفين
                      , وهذا يشمل الطرف الأول: المستخدم أو أي كيان ينوب عنه ,
                      حيث يُشار إلى الطرف الأول انت, ويشمل الطرف الآخر: Necron ,
                      حيث قد يشار إلى الطرف الآخر باسم Necron أو NecronNetworks
                      أو نيكرون أو خالد القحطاني أو نحن, فيما يتعلق بوصولك او
                      إستخدامك للموقع necron.host أو أي موقع تابع له أو خدمات
                      تابعه له أو خوادم تابعه له أو تطبيقات الهاتف المحمول
                      المرتبطة به بطريقة أو بأخرى, أو أي وسائط تابعه له
                    </li>
                    <li>
                      نيكرون تابعة للعامل الحر "خالد القحطاني", ويوجد وثيقة عمل
                      حر مسجلة بالمملكة العربية السعودية تابعة لهذا المجال تصرح
                      عمليات نيكرون
                    </li>
                    <li>
                      يتعهد المستخدم أنه قد قرأ وفهم ووافق على الالتزام بجميع
                      شروط الاستخدام هذه قبل استخدام أي من خدمات أو أي من مواقع
                      نيكرون
                    </li>
                    <li>
                      الشروط والأحكام التكميلية أو المستندات التي قد يتم نشرها
                      على أي من مواقع نيكرون من وقت لآخر تم تضمينها بموجب هذه
                      الوثيقة صراحةً بالإشارة إليها
                    </li>
                    <li>
                      نحتفظ بالحق , وفقًا لتقديرنا الخاص , في إجراء تغييرات أو
                      تعديلات على شروط الاستخدام هذه من وقت لآخر
                    </li>
                    <li>
                      سننبهك بأي تغييرات عن طريق تحديث تاريخ آخر تحديث لشروط
                      الاستخدام هذه , وأنت تتنازل عن أي حق في تلقي إشعار محدد
                      بكل تغيير من هذا القبيل
                    </li>
                    <li>
                      يرجى التأكد من مراجعة الشروط المعمول بها في كل مرة تستخدم
                      فيها أي من خدمات نيكرون أو أي من مواقعها حتى تفهم الشروط
                      المعمول بها
                    </li>
                    <li>
                      عندما يتم تعديل شروط الاستخدام , سيتم اعتبار أنك قد تصرفت
                      بموجبها وقبلتها وستخضع للتغييرات من خلال استمرار استخدامك
                      للموقع أو المواقع أو الخدمات التابعة لنيكرون بعد تاريخ نشر
                      شروط الاستخدام المعدلة
                    </li>
                    <li>
                      يؤدي استخدامك لهذا الموقع أو أي موقع ويب تابع لنيكرون و /
                      أو استعمال لخدمات نيكرون إلى إنشاء عقد بين المستخدم
                      ونيكرون بموجب هذه الاتفاقية. عندما يقوم المستخدم بتسجيل
                      الدخول و / أو وصول المستخدمين أو استخدامهم للخدمات المنصوص
                      عليها في هذه الاتفاقية , فإنها تشكل قبول المستخدم
                      للاتفاقيات
                    </li>
                  </>
                )}
              </ol>
            </SingleTerm>
            <SingleTerm
              id={4}
              title={lang == "en" ? "User registration" : "تسجيل المستخدم"}
            >
              <ol className="grid gap-5">
                {lang == "en" ? (
                  <>
                    <li>
                      These Terms of Use constitute a legally binding agreement
                      between the two parties, and this includes the first
                      party: the user or any entity on his behalf, where the
                      first party is referred to as you, and the other party
                      includes: Necron, where the other party may be referred to
                      as Necron, NecronNetworks, Necron, or Khaled Al-Qahtani.
                      Or us, in connection with your access to or use of the
                      necron.host website or any affiliated website, affiliated
                      services, affiliated servers, mobile applications
                      otherwise associated with it, or any affiliated media.
                    </li>
                    <li>
                      Necron is affiliated with the freelancer “Khaled
                      Al-Qahtani”, and there is a freelance document registered
                      in the Kingdom of Saudi Arabia related to this field that
                      declares Necron's operations.
                    </li>
                    <li>
                      The User undertakes that he has read, understood, and
                      agrees to be bound by all of these Terms of Use before
                      using any of the Services or any of the Necron Sites.
                    </li>
                    <li>
                      Supplemental terms and conditions or documents that may be
                      posted on any Necron Site from time to time are hereby
                      expressly incorporated by reference.
                    </li>
                    <li>
                      We reserve the right, in our sole discretion, to make
                      changes or modifications to these Terms of Use from time
                      to time
                    </li>
                    <li>
                      We will notify you updating the date of this terms of use,
                      and you waive any right to receive specific notifications
                      with every such change
                    </li>
                    <li>
                      Please be sure to review the applicable terms each time
                      you use any of Necron's services or any of its sites so
                      that you understand the applicable terms
                    </li>
                    <li>
                      When the Terms of Use are modified, you will be deemed to
                      have acted in accordance with and accepted them and will
                      be subject to the changes through your continued use of
                      the Site or Necron's sites or services after the date the
                      modified Terms of Use are posted.
                    </li>
                    <li>
                      Your use of this or any Necron website and/or use of
                      Necron Services creates a contract between the user and
                      Necron under this Agreement. When the User logs in and/or
                      Users access or use the services stipulated in this
                      Agreement, it constitutes the User's acceptance of the
                      Agreements.
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      تشكل شروط الاستخدام هذه اتفاقية ملزمة قانونًا بين الطرفين
                      , وهذا يشمل الطرف الأول: المستخدم أو أي كيان ينوب عنه ,
                      حيث يُشار إلى الطرف الأول انت, ويشمل الطرف الآخر: Necron ,
                      حيث قد يشار إلى الطرف الآخر باسم Necron أو NecronNetworks
                      أو نيكرون أو خالد القحطاني أو نحن, فيما يتعلق بوصولك او
                      إستخدامك للموقع necron.host أو أي موقع تابع له أو خدمات
                      تابعه له أو خوادم تابعه له أو تطبيقات الهاتف المحمول
                      المرتبطة به بطريقة أو بأخرى, أو أي وسائط تابعه له
                    </li>
                    <li>
                      نيكرون تابعة للعامل الحر "خالد القحطاني", ويوجد وثيقة عمل
                      حر مسجلة بالمملكة العربية السعودية تابعة لهذا المجال تصرح
                      عمليات نيكرون
                    </li>
                    <li>
                      يتعهد المستخدم أنه قد قرأ وفهم ووافق على الالتزام بجميع
                      شروط الاستخدام هذه قبل استخدام أي من خدمات أو أي من مواقع
                      نيكرون
                    </li>
                    <li>
                      الشروط والأحكام التكميلية أو المستندات التي قد يتم نشرها
                      على أي من مواقع نيكرون من وقت لآخر تم تضمينها بموجب هذه
                      الوثيقة صراحةً بالإشارة إليها
                    </li>
                    <li>
                      نحتفظ بالحق , وفقًا لتقديرنا الخاص , في إجراء تغييرات أو
                      تعديلات على شروط الاستخدام هذه من وقت لآخر
                    </li>
                    <li>
                      سننبهك بأي تغييرات عن طريق تحديث تاريخ آخر تحديث لشروط
                      الاستخدام هذه , وأنت تتنازل عن أي حق في تلقي إشعار محدد
                      بكل تغيير من هذا القبيل
                    </li>
                    <li>
                      يرجى التأكد من مراجعة الشروط المعمول بها في كل مرة تستخدم
                      فيها أي من خدمات نيكرون أو أي من مواقعها حتى تفهم الشروط
                      المعمول بها
                    </li>
                    <li>
                      عندما يتم تعديل شروط الاستخدام , سيتم اعتبار أنك قد تصرفت
                      بموجبها وقبلتها وستخضع للتغييرات من خلال استمرار استخدامك
                      للموقع أو المواقع أو الخدمات التابعة لنيكرون بعد تاريخ نشر
                      شروط الاستخدام المعدلة
                    </li>
                    <li>
                      يؤدي استخدامك لهذا الموقع أو أي موقع ويب تابع لنيكرون و /
                      أو استعمال لخدمات نيكرون إلى إنشاء عقد بين المستخدم
                      ونيكرون بموجب هذه الاتفاقية. عندما يقوم المستخدم بتسجيل
                      الدخول و / أو وصول المستخدمين أو استخدامهم للخدمات المنصوص
                      عليها في هذه الاتفاقية , فإنها تشكل قبول المستخدم
                      للاتفاقيات
                    </li>
                  </>
                )}
              </ol>
            </SingleTerm>
            <SingleTerm
              id={5}
              title={
                lang == "en" ? "Subscription expiration" : "إنتهاء الإشتراك"
              }
            >
              <ol className="grid gap-5">
                {lang == "en" ? (
                  <>
                    <li>
                      These Terms of Use constitute a legally binding agreement
                      between the two parties, and this includes the first
                      party: the user or any entity on his behalf, where the
                      first party is referred to as you, and the other party
                      includes: Necron, where the other party may be referred to
                      as Necron, NecronNetworks, Necron, or Khaled Al-Qahtani.
                      Or us, in connection with your access to or use of the
                      necron.host website or any affiliated website, affiliated
                      services, affiliated servers, mobile applications
                      otherwise associated with it, or any affiliated media.
                    </li>
                    <li>
                      Necron is affiliated with the freelancer “Khaled
                      Al-Qahtani”, and there is a freelance document registered
                      in the Kingdom of Saudi Arabia related to this field that
                      declares Necron's operations.
                    </li>
                    <li>
                      The User undertakes that he has read, understood, and
                      agrees to be bound by all of these Terms of Use before
                      using any of the Services or any of the Necron Sites.
                    </li>
                    <li>
                      Supplemental terms and conditions or documents that may be
                      posted on any Necron Site from time to time are hereby
                      expressly incorporated by reference.
                    </li>
                    <li>
                      We reserve the right, in our sole discretion, to make
                      changes or modifications to these Terms of Use from time
                      to time
                    </li>
                    <li>
                      We will notify you updating the date of this terms of use,
                      and you waive any right to receive specific notifications
                      with every such change
                    </li>
                    <li>
                      Please be sure to review the applicable terms each time
                      you use any of Necron's services or any of its sites so
                      that you understand the applicable terms
                    </li>
                    <li>
                      When the Terms of Use are modified, you will be deemed to
                      have acted in accordance with and accepted them and will
                      be subject to the changes through your continued use of
                      the Site or Necron's sites or services after the date the
                      modified Terms of Use are posted.
                    </li>
                    <li>
                      Your use of this or any Necron website and/or use of
                      Necron Services creates a contract between the user and
                      Necron under this Agreement. When the User logs in and/or
                      Users access or use the services stipulated in this
                      Agreement, it constitutes the User's acceptance of the
                      Agreements.
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      تشكل شروط الاستخدام هذه اتفاقية ملزمة قانونًا بين الطرفين
                      , وهذا يشمل الطرف الأول: المستخدم أو أي كيان ينوب عنه ,
                      حيث يُشار إلى الطرف الأول انت, ويشمل الطرف الآخر: Necron ,
                      حيث قد يشار إلى الطرف الآخر باسم Necron أو NecronNetworks
                      أو نيكرون أو خالد القحطاني أو نحن, فيما يتعلق بوصولك او
                      إستخدامك للموقع necron.host أو أي موقع تابع له أو خدمات
                      تابعه له أو خوادم تابعه له أو تطبيقات الهاتف المحمول
                      المرتبطة به بطريقة أو بأخرى, أو أي وسائط تابعه له
                    </li>
                    <li>
                      نيكرون تابعة للعامل الحر "خالد القحطاني", ويوجد وثيقة عمل
                      حر مسجلة بالمملكة العربية السعودية تابعة لهذا المجال تصرح
                      عمليات نيكرون
                    </li>
                    <li>
                      يتعهد المستخدم أنه قد قرأ وفهم ووافق على الالتزام بجميع
                      شروط الاستخدام هذه قبل استخدام أي من خدمات أو أي من مواقع
                      نيكرون
                    </li>
                    <li>
                      الشروط والأحكام التكميلية أو المستندات التي قد يتم نشرها
                      على أي من مواقع نيكرون من وقت لآخر تم تضمينها بموجب هذه
                      الوثيقة صراحةً بالإشارة إليها
                    </li>
                    <li>
                      نحتفظ بالحق , وفقًا لتقديرنا الخاص , في إجراء تغييرات أو
                      تعديلات على شروط الاستخدام هذه من وقت لآخر
                    </li>
                    <li>
                      سننبهك بأي تغييرات عن طريق تحديث تاريخ آخر تحديث لشروط
                      الاستخدام هذه , وأنت تتنازل عن أي حق في تلقي إشعار محدد
                      بكل تغيير من هذا القبيل
                    </li>
                    <li>
                      يرجى التأكد من مراجعة الشروط المعمول بها في كل مرة تستخدم
                      فيها أي من خدمات نيكرون أو أي من مواقعها حتى تفهم الشروط
                      المعمول بها
                    </li>
                    <li>
                      عندما يتم تعديل شروط الاستخدام , سيتم اعتبار أنك قد تصرفت
                      بموجبها وقبلتها وستخضع للتغييرات من خلال استمرار استخدامك
                      للموقع أو المواقع أو الخدمات التابعة لنيكرون بعد تاريخ نشر
                      شروط الاستخدام المعدلة
                    </li>
                    <li>
                      يؤدي استخدامك لهذا الموقع أو أي موقع ويب تابع لنيكرون و /
                      أو استعمال لخدمات نيكرون إلى إنشاء عقد بين المستخدم
                      ونيكرون بموجب هذه الاتفاقية. عندما يقوم المستخدم بتسجيل
                      الدخول و / أو وصول المستخدمين أو استخدامهم للخدمات المنصوص
                      عليها في هذه الاتفاقية , فإنها تشكل قبول المستخدم
                      للاتفاقيات
                    </li>
                  </>
                )}
              </ol>
            </SingleTerm>
            <SingleTerm
              id={6}
              title={
                lang == "en" ? "Prohibited activities" : "الأنشطة المحظورة"
              }
            >
              <ol className="grid gap-5">
                {lang == "en" ? (
                  <>
                    <li>
                      These Terms of Use constitute a legally binding agreement
                      between the two parties, and this includes the first
                      party: the user or any entity on his behalf, where the
                      first party is referred to as you, and the other party
                      includes: Necron, where the other party may be referred to
                      as Necron, NecronNetworks, Necron, or Khaled Al-Qahtani.
                      Or us, in connection with your access to or use of the
                      necron.host website or any affiliated website, affiliated
                      services, affiliated servers, mobile applications
                      otherwise associated with it, or any affiliated media.
                    </li>
                    <li>
                      Necron is affiliated with the freelancer “Khaled
                      Al-Qahtani”, and there is a freelance document registered
                      in the Kingdom of Saudi Arabia related to this field that
                      declares Necron's operations.
                    </li>
                    <li>
                      The User undertakes that he has read, understood, and
                      agrees to be bound by all of these Terms of Use before
                      using any of the Services or any of the Necron Sites.
                    </li>
                    <li>
                      Supplemental terms and conditions or documents that may be
                      posted on any Necron Site from time to time are hereby
                      expressly incorporated by reference.
                    </li>
                    <li>
                      We reserve the right, in our sole discretion, to make
                      changes or modifications to these Terms of Use from time
                      to time
                    </li>
                    <li>
                      We will notify you updating the date of this terms of use,
                      and you waive any right to receive specific notifications
                      with every such change
                    </li>
                    <li>
                      Please be sure to review the applicable terms each time
                      you use any of Necron's services or any of its sites so
                      that you understand the applicable terms
                    </li>
                    <li>
                      When the Terms of Use are modified, you will be deemed to
                      have acted in accordance with and accepted them and will
                      be subject to the changes through your continued use of
                      the Site or Necron's sites or services after the date the
                      modified Terms of Use are posted.
                    </li>
                    <li>
                      Your use of this or any Necron website and/or use of
                      Necron Services creates a contract between the user and
                      Necron under this Agreement. When the User logs in and/or
                      Users access or use the services stipulated in this
                      Agreement, it constitutes the User's acceptance of the
                      Agreements.
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      تشكل شروط الاستخدام هذه اتفاقية ملزمة قانونًا بين الطرفين
                      , وهذا يشمل الطرف الأول: المستخدم أو أي كيان ينوب عنه ,
                      حيث يُشار إلى الطرف الأول انت, ويشمل الطرف الآخر: Necron ,
                      حيث قد يشار إلى الطرف الآخر باسم Necron أو NecronNetworks
                      أو نيكرون أو خالد القحطاني أو نحن, فيما يتعلق بوصولك او
                      إستخدامك للموقع necron.host أو أي موقع تابع له أو خدمات
                      تابعه له أو خوادم تابعه له أو تطبيقات الهاتف المحمول
                      المرتبطة به بطريقة أو بأخرى, أو أي وسائط تابعه له
                    </li>
                    <li>
                      نيكرون تابعة للعامل الحر "خالد القحطاني", ويوجد وثيقة عمل
                      حر مسجلة بالمملكة العربية السعودية تابعة لهذا المجال تصرح
                      عمليات نيكرون
                    </li>
                    <li>
                      يتعهد المستخدم أنه قد قرأ وفهم ووافق على الالتزام بجميع
                      شروط الاستخدام هذه قبل استخدام أي من خدمات أو أي من مواقع
                      نيكرون
                    </li>
                    <li>
                      الشروط والأحكام التكميلية أو المستندات التي قد يتم نشرها
                      على أي من مواقع نيكرون من وقت لآخر تم تضمينها بموجب هذه
                      الوثيقة صراحةً بالإشارة إليها
                    </li>
                    <li>
                      نحتفظ بالحق , وفقًا لتقديرنا الخاص , في إجراء تغييرات أو
                      تعديلات على شروط الاستخدام هذه من وقت لآخر
                    </li>
                    <li>
                      سننبهك بأي تغييرات عن طريق تحديث تاريخ آخر تحديث لشروط
                      الاستخدام هذه , وأنت تتنازل عن أي حق في تلقي إشعار محدد
                      بكل تغيير من هذا القبيل
                    </li>
                    <li>
                      يرجى التأكد من مراجعة الشروط المعمول بها في كل مرة تستخدم
                      فيها أي من خدمات نيكرون أو أي من مواقعها حتى تفهم الشروط
                      المعمول بها
                    </li>
                    <li>
                      عندما يتم تعديل شروط الاستخدام , سيتم اعتبار أنك قد تصرفت
                      بموجبها وقبلتها وستخضع للتغييرات من خلال استمرار استخدامك
                      للموقع أو المواقع أو الخدمات التابعة لنيكرون بعد تاريخ نشر
                      شروط الاستخدام المعدلة
                    </li>
                    <li>
                      يؤدي استخدامك لهذا الموقع أو أي موقع ويب تابع لنيكرون و /
                      أو استعمال لخدمات نيكرون إلى إنشاء عقد بين المستخدم
                      ونيكرون بموجب هذه الاتفاقية. عندما يقوم المستخدم بتسجيل
                      الدخول و / أو وصول المستخدمين أو استخدامهم للخدمات المنصوص
                      عليها في هذه الاتفاقية , فإنها تشكل قبول المستخدم
                      للاتفاقيات
                    </li>
                  </>
                )}
              </ol>
            </SingleTerm>
            <SingleTerm
              id={7}
              title={
                lang == "en" ? "Limitation of liability" : "حدود المسؤولية"
              }
            >
              <ol className="grid gap-5">
                {lang == "en" ? (
                  <>
                    <li>
                      These Terms of Use constitute a legally binding agreement
                      between the two parties, and this includes the first
                      party: the user or any entity on his behalf, where the
                      first party is referred to as you, and the other party
                      includes: Necron, where the other party may be referred to
                      as Necron, NecronNetworks, Necron, or Khaled Al-Qahtani.
                      Or us, in connection with your access to or use of the
                      necron.host website or any affiliated website, affiliated
                      services, affiliated servers, mobile applications
                      otherwise associated with it, or any affiliated media.
                    </li>
                    <li>
                      Necron is affiliated with the freelancer “Khaled
                      Al-Qahtani”, and there is a freelance document registered
                      in the Kingdom of Saudi Arabia related to this field that
                      declares Necron's operations.
                    </li>
                    <li>
                      The User undertakes that he has read, understood, and
                      agrees to be bound by all of these Terms of Use before
                      using any of the Services or any of the Necron Sites.
                    </li>
                    <li>
                      Supplemental terms and conditions or documents that may be
                      posted on any Necron Site from time to time are hereby
                      expressly incorporated by reference.
                    </li>
                    <li>
                      We reserve the right, in our sole discretion, to make
                      changes or modifications to these Terms of Use from time
                      to time
                    </li>
                    <li>
                      We will notify you updating the date of this terms of use,
                      and you waive any right to receive specific notifications
                      with every such change
                    </li>
                    <li>
                      Please be sure to review the applicable terms each time
                      you use any of Necron's services or any of its sites so
                      that you understand the applicable terms
                    </li>
                    <li>
                      When the Terms of Use are modified, you will be deemed to
                      have acted in accordance with and accepted them and will
                      be subject to the changes through your continued use of
                      the Site or Necron's sites or services after the date the
                      modified Terms of Use are posted.
                    </li>
                    <li>
                      Your use of this or any Necron website and/or use of
                      Necron Services creates a contract between the user and
                      Necron under this Agreement. When the User logs in and/or
                      Users access or use the services stipulated in this
                      Agreement, it constitutes the User's acceptance of the
                      Agreements.
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      تشكل شروط الاستخدام هذه اتفاقية ملزمة قانونًا بين الطرفين
                      , وهذا يشمل الطرف الأول: المستخدم أو أي كيان ينوب عنه ,
                      حيث يُشار إلى الطرف الأول انت, ويشمل الطرف الآخر: Necron ,
                      حيث قد يشار إلى الطرف الآخر باسم Necron أو NecronNetworks
                      أو نيكرون أو خالد القحطاني أو نحن, فيما يتعلق بوصولك او
                      إستخدامك للموقع necron.host أو أي موقع تابع له أو خدمات
                      تابعه له أو خوادم تابعه له أو تطبيقات الهاتف المحمول
                      المرتبطة به بطريقة أو بأخرى, أو أي وسائط تابعه له
                    </li>
                    <li>
                      نيكرون تابعة للعامل الحر "خالد القحطاني", ويوجد وثيقة عمل
                      حر مسجلة بالمملكة العربية السعودية تابعة لهذا المجال تصرح
                      عمليات نيكرون
                    </li>
                    <li>
                      يتعهد المستخدم أنه قد قرأ وفهم ووافق على الالتزام بجميع
                      شروط الاستخدام هذه قبل استخدام أي من خدمات أو أي من مواقع
                      نيكرون
                    </li>
                    <li>
                      الشروط والأحكام التكميلية أو المستندات التي قد يتم نشرها
                      على أي من مواقع نيكرون من وقت لآخر تم تضمينها بموجب هذه
                      الوثيقة صراحةً بالإشارة إليها
                    </li>
                    <li>
                      نحتفظ بالحق , وفقًا لتقديرنا الخاص , في إجراء تغييرات أو
                      تعديلات على شروط الاستخدام هذه من وقت لآخر
                    </li>
                    <li>
                      سننبهك بأي تغييرات عن طريق تحديث تاريخ آخر تحديث لشروط
                      الاستخدام هذه , وأنت تتنازل عن أي حق في تلقي إشعار محدد
                      بكل تغيير من هذا القبيل
                    </li>
                    <li>
                      يرجى التأكد من مراجعة الشروط المعمول بها في كل مرة تستخدم
                      فيها أي من خدمات نيكرون أو أي من مواقعها حتى تفهم الشروط
                      المعمول بها
                    </li>
                    <li>
                      عندما يتم تعديل شروط الاستخدام , سيتم اعتبار أنك قد تصرفت
                      بموجبها وقبلتها وستخضع للتغييرات من خلال استمرار استخدامك
                      للموقع أو المواقع أو الخدمات التابعة لنيكرون بعد تاريخ نشر
                      شروط الاستخدام المعدلة
                    </li>
                    <li>
                      يؤدي استخدامك لهذا الموقع أو أي موقع ويب تابع لنيكرون و /
                      أو استعمال لخدمات نيكرون إلى إنشاء عقد بين المستخدم
                      ونيكرون بموجب هذه الاتفاقية. عندما يقوم المستخدم بتسجيل
                      الدخول و / أو وصول المستخدمين أو استخدامهم للخدمات المنصوص
                      عليها في هذه الاتفاقية , فإنها تشكل قبول المستخدم
                      للاتفاقيات
                    </li>
                  </>
                )}
              </ol>
            </SingleTerm>
            <SingleTerm
              id={8}
              title={lang == "en" ? "Network security" : "أمن الشبكة"}
            >
              <ol className="grid gap-5">
                {lang == "en" ? (
                  <>
                    <li>
                      These Terms of Use constitute a legally binding agreement
                      between the two parties, and this includes the first
                      party: the user or any entity on his behalf, where the
                      first party is referred to as you, and the other party
                      includes: Necron, where the other party may be referred to
                      as Necron, NecronNetworks, Necron, or Khaled Al-Qahtani.
                      Or us, in connection with your access to or use of the
                      necron.host website or any affiliated website, affiliated
                      services, affiliated servers, mobile applications
                      otherwise associated with it, or any affiliated media.
                    </li>
                    <li>
                      Necron is affiliated with the freelancer “Khaled
                      Al-Qahtani”, and there is a freelance document registered
                      in the Kingdom of Saudi Arabia related to this field that
                      declares Necron's operations.
                    </li>
                    <li>
                      The User undertakes that he has read, understood, and
                      agrees to be bound by all of these Terms of Use before
                      using any of the Services or any of the Necron Sites.
                    </li>
                    <li>
                      Supplemental terms and conditions or documents that may be
                      posted on any Necron Site from time to time are hereby
                      expressly incorporated by reference.
                    </li>
                    <li>
                      We reserve the right, in our sole discretion, to make
                      changes or modifications to these Terms of Use from time
                      to time
                    </li>
                    <li>
                      We will notify you updating the date of this terms of use,
                      and you waive any right to receive specific notifications
                      with every such change
                    </li>
                    <li>
                      Please be sure to review the applicable terms each time
                      you use any of Necron's services or any of its sites so
                      that you understand the applicable terms
                    </li>
                    <li>
                      When the Terms of Use are modified, you will be deemed to
                      have acted in accordance with and accepted them and will
                      be subject to the changes through your continued use of
                      the Site or Necron's sites or services after the date the
                      modified Terms of Use are posted.
                    </li>
                    <li>
                      Your use of this or any Necron website and/or use of
                      Necron Services creates a contract between the user and
                      Necron under this Agreement. When the User logs in and/or
                      Users access or use the services stipulated in this
                      Agreement, it constitutes the User's acceptance of the
                      Agreements.
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      تشكل شروط الاستخدام هذه اتفاقية ملزمة قانونًا بين الطرفين
                      , وهذا يشمل الطرف الأول: المستخدم أو أي كيان ينوب عنه ,
                      حيث يُشار إلى الطرف الأول انت, ويشمل الطرف الآخر: Necron ,
                      حيث قد يشار إلى الطرف الآخر باسم Necron أو NecronNetworks
                      أو نيكرون أو خالد القحطاني أو نحن, فيما يتعلق بوصولك او
                      إستخدامك للموقع necron.host أو أي موقع تابع له أو خدمات
                      تابعه له أو خوادم تابعه له أو تطبيقات الهاتف المحمول
                      المرتبطة به بطريقة أو بأخرى, أو أي وسائط تابعه له
                    </li>
                    <li>
                      نيكرون تابعة للعامل الحر "خالد القحطاني", ويوجد وثيقة عمل
                      حر مسجلة بالمملكة العربية السعودية تابعة لهذا المجال تصرح
                      عمليات نيكرون
                    </li>
                    <li>
                      يتعهد المستخدم أنه قد قرأ وفهم ووافق على الالتزام بجميع
                      شروط الاستخدام هذه قبل استخدام أي من خدمات أو أي من مواقع
                      نيكرون
                    </li>
                    <li>
                      الشروط والأحكام التكميلية أو المستندات التي قد يتم نشرها
                      على أي من مواقع نيكرون من وقت لآخر تم تضمينها بموجب هذه
                      الوثيقة صراحةً بالإشارة إليها
                    </li>
                    <li>
                      نحتفظ بالحق , وفقًا لتقديرنا الخاص , في إجراء تغييرات أو
                      تعديلات على شروط الاستخدام هذه من وقت لآخر
                    </li>
                    <li>
                      سننبهك بأي تغييرات عن طريق تحديث تاريخ آخر تحديث لشروط
                      الاستخدام هذه , وأنت تتنازل عن أي حق في تلقي إشعار محدد
                      بكل تغيير من هذا القبيل
                    </li>
                    <li>
                      يرجى التأكد من مراجعة الشروط المعمول بها في كل مرة تستخدم
                      فيها أي من خدمات نيكرون أو أي من مواقعها حتى تفهم الشروط
                      المعمول بها
                    </li>
                    <li>
                      عندما يتم تعديل شروط الاستخدام , سيتم اعتبار أنك قد تصرفت
                      بموجبها وقبلتها وستخضع للتغييرات من خلال استمرار استخدامك
                      للموقع أو المواقع أو الخدمات التابعة لنيكرون بعد تاريخ نشر
                      شروط الاستخدام المعدلة
                    </li>
                    <li>
                      يؤدي استخدامك لهذا الموقع أو أي موقع ويب تابع لنيكرون و /
                      أو استعمال لخدمات نيكرون إلى إنشاء عقد بين المستخدم
                      ونيكرون بموجب هذه الاتفاقية. عندما يقوم المستخدم بتسجيل
                      الدخول و / أو وصول المستخدمين أو استخدامهم للخدمات المنصوص
                      عليها في هذه الاتفاقية , فإنها تشكل قبول المستخدم
                      للاتفاقيات
                    </li>
                  </>
                )}
              </ol>
            </SingleTerm>
            <SingleTerm id={9} title={lang == "en" ? "Payments" : "المدفوعات"}>
              {" "}
              <ol className="grid gap-5">
                {lang == "en" ? (
                  <>
                    <li>
                      These Terms of Use constitute a legally binding agreement
                      between the two parties, and this includes the first
                      party: the user or any entity on his behalf, where the
                      first party is referred to as you, and the other party
                      includes: Necron, where the other party may be referred to
                      as Necron, NecronNetworks, Necron, or Khaled Al-Qahtani.
                      Or us, in connection with your access to or use of the
                      necron.host website or any affiliated website, affiliated
                      services, affiliated servers, mobile applications
                      otherwise associated with it, or any affiliated media.
                    </li>
                    <li>
                      Necron is affiliated with the freelancer “Khaled
                      Al-Qahtani”, and there is a freelance document registered
                      in the Kingdom of Saudi Arabia related to this field that
                      declares Necron's operations.
                    </li>
                    <li>
                      The User undertakes that he has read, understood, and
                      agrees to be bound by all of these Terms of Use before
                      using any of the Services or any of the Necron Sites.
                    </li>
                    <li>
                      Supplemental terms and conditions or documents that may be
                      posted on any Necron Site from time to time are hereby
                      expressly incorporated by reference.
                    </li>
                    <li>
                      We reserve the right, in our sole discretion, to make
                      changes or modifications to these Terms of Use from time
                      to time
                    </li>
                    <li>
                      We will notify you updating the date of this terms of use,
                      and you waive any right to receive specific notifications
                      with every such change
                    </li>
                    <li>
                      Please be sure to review the applicable terms each time
                      you use any of Necron's services or any of its sites so
                      that you understand the applicable terms
                    </li>
                    <li>
                      When the Terms of Use are modified, you will be deemed to
                      have acted in accordance with and accepted them and will
                      be subject to the changes through your continued use of
                      the Site or Necron's sites or services after the date the
                      modified Terms of Use are posted.
                    </li>
                    <li>
                      Your use of this or any Necron website and/or use of
                      Necron Services creates a contract between the user and
                      Necron under this Agreement. When the User logs in and/or
                      Users access or use the services stipulated in this
                      Agreement, it constitutes the User's acceptance of the
                      Agreements.
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      تشكل شروط الاستخدام هذه اتفاقية ملزمة قانونًا بين الطرفين
                      , وهذا يشمل الطرف الأول: المستخدم أو أي كيان ينوب عنه ,
                      حيث يُشار إلى الطرف الأول انت, ويشمل الطرف الآخر: Necron ,
                      حيث قد يشار إلى الطرف الآخر باسم Necron أو NecronNetworks
                      أو نيكرون أو خالد القحطاني أو نحن, فيما يتعلق بوصولك او
                      إستخدامك للموقع necron.host أو أي موقع تابع له أو خدمات
                      تابعه له أو خوادم تابعه له أو تطبيقات الهاتف المحمول
                      المرتبطة به بطريقة أو بأخرى, أو أي وسائط تابعه له
                    </li>
                    <li>
                      نيكرون تابعة للعامل الحر "خالد القحطاني", ويوجد وثيقة عمل
                      حر مسجلة بالمملكة العربية السعودية تابعة لهذا المجال تصرح
                      عمليات نيكرون
                    </li>
                    <li>
                      يتعهد المستخدم أنه قد قرأ وفهم ووافق على الالتزام بجميع
                      شروط الاستخدام هذه قبل استخدام أي من خدمات أو أي من مواقع
                      نيكرون
                    </li>
                    <li>
                      الشروط والأحكام التكميلية أو المستندات التي قد يتم نشرها
                      على أي من مواقع نيكرون من وقت لآخر تم تضمينها بموجب هذه
                      الوثيقة صراحةً بالإشارة إليها
                    </li>
                    <li>
                      نحتفظ بالحق , وفقًا لتقديرنا الخاص , في إجراء تغييرات أو
                      تعديلات على شروط الاستخدام هذه من وقت لآخر
                    </li>
                    <li>
                      سننبهك بأي تغييرات عن طريق تحديث تاريخ آخر تحديث لشروط
                      الاستخدام هذه , وأنت تتنازل عن أي حق في تلقي إشعار محدد
                      بكل تغيير من هذا القبيل
                    </li>
                    <li>
                      يرجى التأكد من مراجعة الشروط المعمول بها في كل مرة تستخدم
                      فيها أي من خدمات نيكرون أو أي من مواقعها حتى تفهم الشروط
                      المعمول بها
                    </li>
                    <li>
                      عندما يتم تعديل شروط الاستخدام , سيتم اعتبار أنك قد تصرفت
                      بموجبها وقبلتها وستخضع للتغييرات من خلال استمرار استخدامك
                      للموقع أو المواقع أو الخدمات التابعة لنيكرون بعد تاريخ نشر
                      شروط الاستخدام المعدلة
                    </li>
                    <li>
                      يؤدي استخدامك لهذا الموقع أو أي موقع ويب تابع لنيكرون و /
                      أو استعمال لخدمات نيكرون إلى إنشاء عقد بين المستخدم
                      ونيكرون بموجب هذه الاتفاقية. عندما يقوم المستخدم بتسجيل
                      الدخول و / أو وصول المستخدمين أو استخدامهم للخدمات المنصوص
                      عليها في هذه الاتفاقية , فإنها تشكل قبول المستخدم
                      للاتفاقيات
                    </li>
                  </>
                )}
              </ol>
            </SingleTerm>
            <SingleTerm
              id={10}
              title={lang == "en" ? "Refund policy" : "سياسة إعادة الاموال"}
            >
              <ol className="grid gap-5">
                {lang == "en" ? (
                  <>
                    <li>
                      These Terms of Use constitute a legally binding agreement
                      between the two parties, and this includes the first
                      party: the user or any entity on his behalf, where the
                      first party is referred to as you, and the other party
                      includes: Necron, where the other party may be referred to
                      as Necron, NecronNetworks, Necron, or Khaled Al-Qahtani.
                      Or us, in connection with your access to or use of the
                      necron.host website or any affiliated website, affiliated
                      services, affiliated servers, mobile applications
                      otherwise associated with it, or any affiliated media.
                    </li>
                    <li>
                      Necron is affiliated with the freelancer “Khaled
                      Al-Qahtani”, and there is a freelance document registered
                      in the Kingdom of Saudi Arabia related to this field that
                      declares Necron's operations.
                    </li>
                    <li>
                      The User undertakes that he has read, understood, and
                      agrees to be bound by all of these Terms of Use before
                      using any of the Services or any of the Necron Sites.
                    </li>
                    <li>
                      Supplemental terms and conditions or documents that may be
                      posted on any Necron Site from time to time are hereby
                      expressly incorporated by reference.
                    </li>
                    <li>
                      We reserve the right, in our sole discretion, to make
                      changes or modifications to these Terms of Use from time
                      to time
                    </li>
                    <li>
                      We will notify you updating the date of this terms of use,
                      and you waive any right to receive specific notifications
                      with every such change
                    </li>
                    <li>
                      Please be sure to review the applicable terms each time
                      you use any of Necron's services or any of its sites so
                      that you understand the applicable terms
                    </li>
                    <li>
                      When the Terms of Use are modified, you will be deemed to
                      have acted in accordance with and accepted them and will
                      be subject to the changes through your continued use of
                      the Site or Necron's sites or services after the date the
                      modified Terms of Use are posted.
                    </li>
                    <li>
                      Your use of this or any Necron website and/or use of
                      Necron Services creates a contract between the user and
                      Necron under this Agreement. When the User logs in and/or
                      Users access or use the services stipulated in this
                      Agreement, it constitutes the User's acceptance of the
                      Agreements.
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      تشكل شروط الاستخدام هذه اتفاقية ملزمة قانونًا بين الطرفين
                      , وهذا يشمل الطرف الأول: المستخدم أو أي كيان ينوب عنه ,
                      حيث يُشار إلى الطرف الأول انت, ويشمل الطرف الآخر: Necron ,
                      حيث قد يشار إلى الطرف الآخر باسم Necron أو NecronNetworks
                      أو نيكرون أو خالد القحطاني أو نحن, فيما يتعلق بوصولك او
                      إستخدامك للموقع necron.host أو أي موقع تابع له أو خدمات
                      تابعه له أو خوادم تابعه له أو تطبيقات الهاتف المحمول
                      المرتبطة به بطريقة أو بأخرى, أو أي وسائط تابعه له
                    </li>
                    <li>
                      نيكرون تابعة للعامل الحر "خالد القحطاني", ويوجد وثيقة عمل
                      حر مسجلة بالمملكة العربية السعودية تابعة لهذا المجال تصرح
                      عمليات نيكرون
                    </li>
                    <li>
                      يتعهد المستخدم أنه قد قرأ وفهم ووافق على الالتزام بجميع
                      شروط الاستخدام هذه قبل استخدام أي من خدمات أو أي من مواقع
                      نيكرون
                    </li>
                    <li>
                      الشروط والأحكام التكميلية أو المستندات التي قد يتم نشرها
                      على أي من مواقع نيكرون من وقت لآخر تم تضمينها بموجب هذه
                      الوثيقة صراحةً بالإشارة إليها
                    </li>
                    <li>
                      نحتفظ بالحق , وفقًا لتقديرنا الخاص , في إجراء تغييرات أو
                      تعديلات على شروط الاستخدام هذه من وقت لآخر
                    </li>
                    <li>
                      سننبهك بأي تغييرات عن طريق تحديث تاريخ آخر تحديث لشروط
                      الاستخدام هذه , وأنت تتنازل عن أي حق في تلقي إشعار محدد
                      بكل تغيير من هذا القبيل
                    </li>
                    <li>
                      يرجى التأكد من مراجعة الشروط المعمول بها في كل مرة تستخدم
                      فيها أي من خدمات نيكرون أو أي من مواقعها حتى تفهم الشروط
                      المعمول بها
                    </li>
                    <li>
                      عندما يتم تعديل شروط الاستخدام , سيتم اعتبار أنك قد تصرفت
                      بموجبها وقبلتها وستخضع للتغييرات من خلال استمرار استخدامك
                      للموقع أو المواقع أو الخدمات التابعة لنيكرون بعد تاريخ نشر
                      شروط الاستخدام المعدلة
                    </li>
                    <li>
                      يؤدي استخدامك لهذا الموقع أو أي موقع ويب تابع لنيكرون و /
                      أو استعمال لخدمات نيكرون إلى إنشاء عقد بين المستخدم
                      ونيكرون بموجب هذه الاتفاقية. عندما يقوم المستخدم بتسجيل
                      الدخول و / أو وصول المستخدمين أو استخدامهم للخدمات المنصوص
                      عليها في هذه الاتفاقية , فإنها تشكل قبول المستخدم
                      للاتفاقيات
                    </li>
                  </>
                )}
              </ol>
            </SingleTerm>
            <SingleTerm
              id={11}
              title={lang == "en" ? "Technical support" : "الدعم الفني"}
            >
              <ol className="grid gap-5">
                {lang == "en" ? (
                  <>
                    <li>
                      These Terms of Use constitute a legally binding agreement
                      between the two parties, and this includes the first
                      party: the user or any entity on his behalf, where the
                      first party is referred to as you, and the other party
                      includes: Necron, where the other party may be referred to
                      as Necron, NecronNetworks, Necron, or Khaled Al-Qahtani.
                      Or us, in connection with your access to or use of the
                      necron.host website or any affiliated website, affiliated
                      services, affiliated servers, mobile applications
                      otherwise associated with it, or any affiliated media.
                    </li>
                    <li>
                      Necron is affiliated with the freelancer “Khaled
                      Al-Qahtani”, and there is a freelance document registered
                      in the Kingdom of Saudi Arabia related to this field that
                      declares Necron's operations.
                    </li>
                    <li>
                      The User undertakes that he has read, understood, and
                      agrees to be bound by all of these Terms of Use before
                      using any of the Services or any of the Necron Sites.
                    </li>
                    <li>
                      Supplemental terms and conditions or documents that may be
                      posted on any Necron Site from time to time are hereby
                      expressly incorporated by reference.
                    </li>
                    <li>
                      We reserve the right, in our sole discretion, to make
                      changes or modifications to these Terms of Use from time
                      to time
                    </li>
                    <li>
                      We will notify you updating the date of this terms of use,
                      and you waive any right to receive specific notifications
                      with every such change
                    </li>
                    <li>
                      Please be sure to review the applicable terms each time
                      you use any of Necron's services or any of its sites so
                      that you understand the applicable terms
                    </li>
                    <li>
                      When the Terms of Use are modified, you will be deemed to
                      have acted in accordance with and accepted them and will
                      be subject to the changes through your continued use of
                      the Site or Necron's sites or services after the date the
                      modified Terms of Use are posted.
                    </li>
                    <li>
                      Your use of this or any Necron website and/or use of
                      Necron Services creates a contract between the user and
                      Necron under this Agreement. When the User logs in and/or
                      Users access or use the services stipulated in this
                      Agreement, it constitutes the User's acceptance of the
                      Agreements.
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      تشكل شروط الاستخدام هذه اتفاقية ملزمة قانونًا بين الطرفين
                      , وهذا يشمل الطرف الأول: المستخدم أو أي كيان ينوب عنه ,
                      حيث يُشار إلى الطرف الأول انت, ويشمل الطرف الآخر: Necron ,
                      حيث قد يشار إلى الطرف الآخر باسم Necron أو NecronNetworks
                      أو نيكرون أو خالد القحطاني أو نحن, فيما يتعلق بوصولك او
                      إستخدامك للموقع necron.host أو أي موقع تابع له أو خدمات
                      تابعه له أو خوادم تابعه له أو تطبيقات الهاتف المحمول
                      المرتبطة به بطريقة أو بأخرى, أو أي وسائط تابعه له
                    </li>
                    <li>
                      نيكرون تابعة للعامل الحر "خالد القحطاني", ويوجد وثيقة عمل
                      حر مسجلة بالمملكة العربية السعودية تابعة لهذا المجال تصرح
                      عمليات نيكرون
                    </li>
                    <li>
                      يتعهد المستخدم أنه قد قرأ وفهم ووافق على الالتزام بجميع
                      شروط الاستخدام هذه قبل استخدام أي من خدمات أو أي من مواقع
                      نيكرون
                    </li>
                    <li>
                      الشروط والأحكام التكميلية أو المستندات التي قد يتم نشرها
                      على أي من مواقع نيكرون من وقت لآخر تم تضمينها بموجب هذه
                      الوثيقة صراحةً بالإشارة إليها
                    </li>
                    <li>
                      نحتفظ بالحق , وفقًا لتقديرنا الخاص , في إجراء تغييرات أو
                      تعديلات على شروط الاستخدام هذه من وقت لآخر
                    </li>
                    <li>
                      سننبهك بأي تغييرات عن طريق تحديث تاريخ آخر تحديث لشروط
                      الاستخدام هذه , وأنت تتنازل عن أي حق في تلقي إشعار محدد
                      بكل تغيير من هذا القبيل
                    </li>
                    <li>
                      يرجى التأكد من مراجعة الشروط المعمول بها في كل مرة تستخدم
                      فيها أي من خدمات نيكرون أو أي من مواقعها حتى تفهم الشروط
                      المعمول بها
                    </li>
                    <li>
                      عندما يتم تعديل شروط الاستخدام , سيتم اعتبار أنك قد تصرفت
                      بموجبها وقبلتها وستخضع للتغييرات من خلال استمرار استخدامك
                      للموقع أو المواقع أو الخدمات التابعة لنيكرون بعد تاريخ نشر
                      شروط الاستخدام المعدلة
                    </li>
                    <li>
                      يؤدي استخدامك لهذا الموقع أو أي موقع ويب تابع لنيكرون و /
                      أو استعمال لخدمات نيكرون إلى إنشاء عقد بين المستخدم
                      ونيكرون بموجب هذه الاتفاقية. عندما يقوم المستخدم بتسجيل
                      الدخول و / أو وصول المستخدمين أو استخدامهم للخدمات المنصوص
                      عليها في هذه الاتفاقية , فإنها تشكل قبول المستخدم
                      للاتفاقيات
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

export default Terms;
