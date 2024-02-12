import React, { Children } from "react";

const WhyUsCard = ({ children, title, description }) => {
  return (
    <div
      className="w-[240px] md:w-[275px] 2xl:w-[280px] bg-body-primary py-9 flex flex-col items-center flex-1
    rounded-[4px] border-[#061324] border-[1px] hover:border-primary duration-300 group hover__glow-sm"
    >
      {/* Icon */}
      <div className="aspect-square rounded-full p-5 border-[2px] border-[#061324] group-hover:border-primary duration-[inherit]">
        {children}
      </div>
      {/* Title */}
      <h3 className="mt-6 text-[22px] font-semibold">{title}</h3>
      {/* Description */}
      <p className="text-paragraph text-center max-w-[200px] mt-4 text-[14px]">
        {description}
      </p>
    </div>
  );
};

export default WhyUsCard;
