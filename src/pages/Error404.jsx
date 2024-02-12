import { Link } from "react-router-dom";
import { useLangContext } from "../context/LangContext";
// Import Image
import Error404PNG from "../imgs/error404.png";

const Error404 = () => {
  const { lang } = useLangContext();
  return (
    <main className="pt-[76px] sm:pt-[96px] lg:pt-[110px] min-h-screen relative flex overflow-hidden">
      {/* Section */}
      <div className="container mx-auto flex justify-center items-center px-4 py-4">
        {/* Content */}
        <div className="text-center max-lg:flex max-lg:flex-col max-lg:items-center max-lg:text-center">
          {/* Image */}
          <img
            src={Error404PNG}
            alt="404"
            className="object-contain max-w-[300px] sm:max-w-[500px] mb-4"
          />
          {/* Title */}
          <h1 className="font-bold text-[9vw] sm:text-[42px] md:text-[50px] leading-[120%]">
            {lang == "en" ? "Error 404" : "خطأ 404"}
          </h1>
          {/* Paragraph */}
          <p className="mt-6 leading-[140%] text-paragraph text-[14px] sm:text-[16px] md:text-[18px] select-text">
            {lang == "en"
              ? `Requested page not found, make sure of the URL and try again.`
              : `الصفحة المطلوبة غير موجودة, برجاء التأكد من الرابط والمحاولة مرة اخرى`}
          </p>
          {/* CTA */}
          <Link
            to="/"
            className="text-[20px] font-semibold inline-block mt-12 py-[14px] px-[42px] bg-body-primary
          rounded-[4px] border-[1px] border-primary
          hover:bg-primary duration-300 hover__glow hover:tracking-[1px]"
          >
            {lang == "en" ? "Go Home" : "الذهاب للرئيسية"}
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Error404;
