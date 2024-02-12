import { useLangContext } from "../../context/LangContext";

import ReCAPTCHA from "react-google-recaptcha";

// Import Icons
import { AiFillCloseCircle } from "react-icons/ai";

// Import Images
import HeroStock from "../../imgs/contact-page/hero-stock.png";
import SectionEnd from "../../imgs/section-end.png";
import { useRef, useState } from "react";

// Import motion
import { motion } from "framer-motion";

const ContactHero = () => {
  const { lang } = useLangContext();
  // Form Validation States
  const [captcha, setCaptcha] = useState(false);

  // Name Validation
  const validateName = (userName) => {
    const regex = /[a-zA-Z\u0621-\u064A]/; // English alphabet (a-zA-Z) and Arabic alphabet (أ-ي)
    return regex.test(userName);
  };

  // Email Validation
  const validateEmail = (userEmail) => {
    const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return regex.test(userEmail);
  };

  // Form Inputs Errors & Success Refs
  const emptyName = useRef();
  const invalidName = useRef();
  const emptyEmail = useRef();
  const invalidEmail = useRef();
  const emptySubject = useRef();
  const emptyMessage = useRef();
  const invalidCaptcha = useRef();
  const formSuccess = useRef();
  const formError = useRef();

  const submitForm = async (e) => {
    // Prevent Form Submitting
    e.preventDefault();

    // FormData for the user
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData);

    // Validate Name
    if (!userData.name.length) {
      emptyName.current.style.display = "block";
    } else {
      emptyName.current.style.display = "none";
    }
    if (!validateName(userData.name) && userData.name.length) {
      invalidName.current.style.display = "block";
    } else {
      invalidName.current.style.display = "none";
    }

    // Validate Email
    if (!userData.email.length) {
      emptyEmail.current.style.display = "block";
    } else {
      emptyEmail.current.style.display = "none";
    }
    if (!validateEmail(userData.email) && userData.email.length) {
      invalidEmail.current.style.display = "block";
    } else {
      invalidEmail.current.style.display = "none";
    }

    // Validate Subject
    if (!userData.subject.length) {
      emptySubject.current.style.display = "block";
    } else {
      emptySubject.current.style.display = "none";
    }

    // Validate Message
    if (!userData.message.length) {
      emptyMessage.current.style.display = "block";
    } else {
      emptyMessage.current.style.display = "none";
    }

    // Validate reCAPTCHA
    if (!captcha) {
      invalidCaptcha.current.style.display = "block";
    } else {
      invalidCaptcha.current.style.display = "none";
    }

    // Send form and reset if everything is ok
    if (
      validateName(userData.name) &&
      validateEmail(userData.email) &&
      userData.subject.length &&
      userData.message.length
    ) {
      // Discord Webhook
      const senderName = userData.name;
      const senderEmail = userData.email;
      const senderSubject = userData.subject;
      const senderMessage = userData.message;
      const webhookBody = {
        embeds: [
          {
            title: "Contact Form Submitted",
            fields: [
              { name: "Name", value: senderName },
              { name: "Email", value: senderEmail },
              { name: "Subject", value: senderSubject },
              { name: "Message", value: senderMessage },
            ],
          },
        ],
      };
      const webhookUrl = import.meta.env.VITE_CONTACT_WEBHOOK_URL;
      e.persist(); // Keep the event object available
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(webhookBody),
      });
      if (response.ok) {
        // Show that form has been sent
        formSuccess.current.style.display = "flex";
        window.setTimeout(() => {
          formSuccess.current.style.display = "none";
        }, 5000);
      } else {
        // Show that there was an error
        formError.current.style.display = "flex";
        window.setTimeout(() => {
          formError.current.style.display = "none";
        }, 5000);
      }
      // Reset Form
      e.target.reset();
    }
  };
  return (
    <main
      className="pt-[110px] sm:pt-[125px] min-h-screen relative flex overflow-hidden pb-[30px]
    flex items-center"
    >
      {/* Section */}
      <div className="container mx-auto px-4">
        {/* Success Message */}
        <div
          className="bg-success py-3 px-5 font-bold justify-between items-center rounded-[4px] hidden"
          ref={formSuccess}
        >
          <div>
            {lang == "en"
              ? "Your message has been sent successfully."
              : "تم ارسال رسالتك بنجاح."}
          </div>
          <AiFillCloseCircle
            className="text-[22px] cursor-pointer"
            onClick={() => (formSuccess.current.style.display = "none")}
          />
        </div>
        {/* Error Message */}
        <div
          className="bg-error py-3 px-5 font-bold justify-between items-center rounded-[4px] hidden"
          ref={formError}
        >
          <div>
            {lang == "en"
              ? "An error occurred, please try again later."
              : "حدث خطأ, برجاء التجربة في وقت لاحق"}
          </div>
          <AiFillCloseCircle
            className="text-[22px] cursor-pointer"
            onClick={() => (formError.current.style.display = "none")}
          />
        </div>
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "backInOut" }}
          className="section-title w-fit mx-auto"
        >
          {lang == "en" ? "Get In Touch" : "تواصل معنا"}
        </motion.h2>
        {/* Section Content */}
        <div className="flex justify-between items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: lang == "en" ? -100 : 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "backInOut" }}
            className="flex-1 max-lg:hidden"
          >
            <motion.img
              src={HeroStock}
              alt="Contact us"
              className="mx-auto object-contain duration-700 hover:scale-105 hover__glow-png-2"
            />
          </motion.div>
          {/* Form */}
          <div className="flex-1 max-lg:flex max-lg:flex-col max-lg:items-center max-lg:text-center">
            <motion.form
              initial={{ opacity: 0, x: lang == "en" ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "backInOut" }}
              className="flex flex-col max-lg:w-full"
              onSubmit={(e) => submitForm(e)}
            >
              <div className="flex w-full gap-x-4 gap-y-6 max-sm:flex-col">
                {/* Name */}
                <div className="flex-1 relative">
                  <label
                    htmlFor="name"
                    className="absolute bg-body-primary top-0 rtl:right-[20px] ltr:left-[20px] -translate-y-1/2 px-2"
                  >
                    {lang == "en" ? "Your Name" : "الاسم"}
                  </label>
                  <input
                    type="text"
                    className="contact__input w-full"
                    name="name"
                    id="name"
                  />
                  {/* Name Error Message */}
                  <span className="text-error hidden" ref={invalidName}>
                    {lang == "en" ? "Invalid Name" : "اسم غير صالح"}
                  </span>
                  <span className="text-error hidden" ref={emptyName}>
                    {lang == "en"
                      ? "Please enter your name"
                      : "برجاء ادخال اسمك"}
                  </span>
                </div>
                {/* Email */}
                <div className="flex-1 relative">
                  <label
                    htmlFor="email"
                    className="absolute bg-body-primary top-0 rtl:right-[20px] ltr:left-[20px] -translate-y-1/2 px-2"
                  >
                    {lang == "en" ? "Your Email" : "البريد الالكتروني"}
                  </label>
                  <input
                    type="text"
                    className="contact__input w-full"
                    name="email"
                    id="email"
                  />
                  {/* Email Error Message */}
                  <span className="text-error hidden" ref={invalidEmail}>
                    {lang == "en" ? "Invalid Email" : "بريد الكتروني غير صالح"}
                  </span>
                  {/* Email Error Message */}
                  <span className="text-error hidden" ref={emptyEmail}>
                    {lang == "en"
                      ? "Please enter your email"
                      : "برجاء ادخال بريدك الالكتروني"}
                  </span>
                </div>
              </div>
              {/* Subject */}
              <div className="mt-6 relative">
                <label
                  htmlFor="subject"
                  className="absolute bg-body-primary top-0 rtl:right-[20px] ltr:left-[20px] -translate-y-1/2 px-2"
                >
                  {lang == "en" ? "Subject" : "الموضوع"}
                </label>
                <input
                  type="text"
                  className="contact__input w-full"
                  name="subject"
                  id="subject"
                />
                {/* Subject Error Message */}
                <span className="text-error hidden" ref={emptySubject}>
                  {lang == "en"
                    ? "Please enter a subject"
                    : "برجاء ادخال عنوان لرسالتك"}
                </span>
              </div>
              {/* Message */}
              <div className="mt-6 relative">
                <label
                  htmlFor="message"
                  className="absolute bg-body-primary top-0 rtl:right-[20px] ltr:left-[20px] -translate-y-1/2 px-2"
                >
                  {lang == "en" ? "Message" : "الرسالة"}
                </label>
                <textarea
                  rows="6"
                  className="contact__input resize-none w-full"
                  name="message"
                  id="message"
                />
                {/* Message Error Message */}
                <span className="text-error hidden" ref={emptyMessage}>
                  {lang == "en"
                    ? "Please enter the message"
                    : "برجاء ادخال رسالتك"}
                </span>
              </div>
              {/* CTA */}
              <div className="flex max-sm:flex-col gap-y-8 items-center justify-evenly mt-12">
                <div>
                  <ReCAPTCHA
                    sitekey={import.meta.env.VITE_RECAPTCHA_KEY}
                    onChange={() => setCaptcha((prev) => !prev)}
                  />
                  {/* Message Error Message */}
                  <span className="text-error hidden" ref={invalidCaptcha}>
                    {lang == "en"
                      ? "Solve reCAPTCHA, help use prevent spam"
                      : "برجاء اثبات انك لست روبوتاً"}
                  </span>
                </div>
                <button
                  type="submit"
                  href="#plans"
                  className="text-[20px] font-semibold inline-block py-[14px] px-[42px] bg-body-primary
                rounded-[4px] border-[1px] border-primary
              hover:bg-primary duration-300 hover__glow"
                >
                  {lang == "en" ? "Submit" : "ارسال"}
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </div>
      {/* Section End */}
      <motion.img
        loading="lazy"
        src={SectionEnd}
        alt=""
        className="absolute bottom-0 z-[-1]"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.7, ease: "backInOut" }}
      />
    </main>
  );
};

export default ContactHero;
