import { NavLink } from "react-router-dom";
import ArrowDown from "../icons/arrow-down.svg";

import "./NavDropdown.css";
import { useLangContext } from "../context/LangContext";

const NavDropdown = ({
  name,
  display,
  items,
  dropdown,
  setDropdown,
  switchDropdown,
}) => {
  const { lang } = useLangContext();
  return (
    <li className="text-paragraph cursor-pointer select-none relative">
      <div
        className="flex items-center gap-[8px] nav__dropdown_div hover__glow-white duration-300"
        onClick={() => switchDropdown(name)}
      >
        <span>{display}</span>{" "}
        <img
          src={ArrowDown}
          alt="drop-arrow"
          className={`${dropdown == name && "rotate-180"} duration-300`}
        />
      </div>
      <div
        className={`duration-300 opacity-0 pointer-events-none
                ${dropdown == name && "opacity-100 pointer-events-auto"}
                absolute left-1/2 translate-x-[-50%] bottom-[-10px] translate-y-[100%] bg-body-secondary min-w-[200px]
                rounded-[4px] border-[1px] border-primary border-opacity-25`}
      >
        {Object.keys(items).map((item, index) => (
          <div key={index}>
            {items[item][0] == "/" ? (
              <NavLink
                to={items[item]}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? `text-primary font-bold nav__active`
                      : `text-paragraph`
                  } ${lang == "en" ? "pl-[14px]" : "pr-[14px]"}
                  py-4 hover:bg-body-primary block`
                }
                onClick={() => setDropdown(null)}
              >
                {item}
              </NavLink>
            ) : (
              <a
                href={items[item]}
                className={`${
                  lang == "en" ? "pl-[14px]" : "pr-[14px]"
                } py-4 hover:bg-body-primary block`}
                onClick={() => setDropdown(null)}
              >
                {item}
              </a>
            )}
          </div>
        ))}
      </div>
    </li>
  );
};

export default NavDropdown;
