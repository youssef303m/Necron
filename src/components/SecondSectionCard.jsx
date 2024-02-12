const SecondSectionCard = ({ titleEN, titleAR, icon, lang }) => {
  return (
    <div className="rounded-[4px] flex gap-4 py-4 px-5 bg-[#030B15] min-w-full sm:min-w-[280px] group sm:hover:scale-110 duration-300">
      <img
        loading="lazy"
        src={icon}
        alt="Discord Icon"
        className="object-contain"
      />
      <h3 className="text-[18px] group-hover:text-primary duration-300">
        {lang == "en" ? titleEN : titleAR}
      </h3>
    </div>
  );
};

export default SecondSectionCard;
