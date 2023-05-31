import "./Navigation.css"
import { NavLink } from "react-router-dom"

export default function Dropdown({submenus, dropdown}) {
    return (
        <ul className={`dropdown ${dropdown ? "show" : ""}`}>
            {submenus.map((submenu, index) => (
                <li key={index} className="submenu-items">
                    <NavLink to={submenu.url}>{submenu.title}</NavLink>
                </li>
            ))}
      </ul>
    )
}