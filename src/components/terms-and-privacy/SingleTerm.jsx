const SingleTerm = ({ id, title, children }) => {
  return (
    <div className="grid gap-5 mb-8">
      <h3
        id={id}
        className="text-[28px] sm:text-[32px] lg:text-[42px] font-bold scroll-mt-[100px] sm:scroll-mt-[120px]"
      >
        {id}. {title}
      </h3>
      <span
        className="text-paragraph text-[16px] lg:text-[18px] px-8 sm:px-16
      rtl:max-lg:pl-0 ltr:max-lg:pr-0"
      >
        {children}
      </span>
    </div>
  );
};

export default SingleTerm;
