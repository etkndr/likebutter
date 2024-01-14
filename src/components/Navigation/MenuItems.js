import "./Navigation.css";
import Dropdown from "./Dropdown";
import { NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

export default function MenuItems({ items }) {
  const [dropdown, setDropdown] = useState(false);
  const [upDown, setUpDown] = useState("v");
  let ref = useRef();

  const dropClick = () => {
    if (dropdown) {
      setUpDown("∨");
      setDropdown(false);
    } else {
      setUpDown("∧");
      setDropdown(true);
    }
  };

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setUpDown("∨");
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  return (
    <li className="menu-items" ref={ref}>
      {items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={dropClick}
          >
            {items.title}{" "}
            {items.submenu && <div className="arrow">{upDown}</div>}
          </button>
          <Dropdown submenus={items.submenu} dropdown={dropdown} />
        </>
      ) : (
        <NavLink to={items.url}>{items.title}</NavLink>
      )}
    </li>
  );
}
