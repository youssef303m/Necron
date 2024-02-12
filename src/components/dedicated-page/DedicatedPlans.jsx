import { useState } from "react";
import { useLangContext } from "../../context/LangContext";

import DedicatedPlanCards from "./DedicatedPlanCards";

// Import motion
import { motion } from "framer-motion";

const DedicatedPlans = () => {
  const [showingPlans, setShowingPlans] = useState("ryzen");
  const { lang } = useLangContext();
  return (
    <section id="plans" className="scroll-mt-[100px] overflow-hidden">
      <div className="container mx-auto text-center py-12 px-4">
        {/* Section Title */}
        <h2 className="section-title w-fit mx-auto">
          {lang == "en" ? "Dedicated Servers" : "السيرفرات المخصصة"}
        </h2>
        {/* Plans Filter */}
        <div className="grid sm:grid-cols-4 gap-8 mb-8 items-center">
          {/* AMD Ryzen */}
          <div
            className={`bg-body-secondary py-4 rounded-[4px] text-[20px] cursor-pointer
            duration-300 hover:text-primary border-[2px] border-transparent font-bold ${
              showingPlans == "ryzen" &&
              "text-primary border-[2px] !border-primary glow-2 cursor-default"
            }`}
            onClick={() => setShowingPlans("ryzen")}
          >
            AMD Ryzen
          </div>
          {/* Intel Core */}
          <div
            className={`bg-body-secondary py-4 rounded-[4px] text-[20px] cursor-pointer
            duration-300 hover:text-primary border-[2px] border-transparent font-bold ${
              showingPlans == "core" &&
              "text-primary border-[2px] !border-primary glow-2 cursor-default"
            }`}
            onClick={() => setShowingPlans("core")}
          >
            Intel Core
          </div>
          {/* Intel Xeon */}
          <div
            className={`bg-body-secondary py-4 rounded-[4px] text-[20px] cursor-pointer
            duration-300 hover:text-primary border-[2px] border-transparent font-bold ${
              showingPlans == "xeon" &&
              "text-primary border-[2px] !border-primary glow-2 cursor-default"
            }`}
            onClick={() => setShowingPlans("xeon")}
          >
            Intel Xeon
          </div>
          {/* AMD Epyc */}
          <div
            className={`bg-body-secondary py-4 rounded-[4px] text-[20px] cursor-pointer
            duration-300 hover:text-primary border-[2px] border-transparent font-bold ${
              showingPlans == "epyc" &&
              "text-primary border-[2px] !border-primary glow-2 cursor-default"
            }`}
            onClick={() => setShowingPlans("epyc")}
          >
            AMD Epyc
          </div>
        </div>
        {/* Plans */}
        <DedicatedPlanCards showingPlans={showingPlans} />
        {/* Custom Orders */}
        <div
          className="flex justify-center items-center mt-8 gap-16
          bg-body-secondary py-6 border-l-[1px] border-l-primary border-r-[1px] border-r-primary
          max-sm:flex-col max-sm:text-center max-sm:gap-4"
        >
          {/* Title & Description */}
          <div>
            <h3 className="text-[28px] font-bold">
              {lang == "en" ? "Need a custom plan?" : "هل لديك طلب خاص؟"}
            </h3>
            <p className="text-paragraph">
              {lang == "en"
                ? "Now you can order a custom plan with competitive prices"
                : "الان يمكنك طلب خطة خاصة بأسعار منافسة"}
            </p>
          </div>
          {/* CTA */}
          <a
            href="#"
            className="bg-transparent font-bold py-2 px-4 rounded-[4px] text-[22px] border-[1px] border-primary"
          >
            {lang == "en" ? "Order now" : "اطلب الان"}
          </a>
        </div>
      </div>
    </section>
  );
};

export default DedicatedPlans;
