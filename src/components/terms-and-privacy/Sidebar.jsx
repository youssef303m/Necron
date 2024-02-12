const Sidebar = ({ items, currentTermId }) => {
  return (
    <aside
      className="bg-body-secondary p-5 ltr:border-l-[1px] rtl:border-r-[1px] border-primary max-md:w-full
    md:sticky top-[128px] rounded-[4px]"
    >
      <ol className="text-start list-none">
        {items.map(([item], index) => (
          <li key={index}>
            <a
              href={`#${index + 1}`}
              className={`font-bold text-[18px] text-paragraph block py-2 hover:text-white duration-300 relative ${
                currentTermId == index && "text-primary hover:!text-primary"
              }`}
            >
              {index + 1}. {item}
            </a>
          </li>
        ))}
      </ol>
    </aside>
  );
};
export default Sidebar;
