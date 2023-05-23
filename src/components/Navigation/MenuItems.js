import "./Navigation.css"
import Dropdown from "./Dropdown"
import { NavLink } from "react-router-dom"
import { useState } from "react"

export default function MenuItems({items}) {
    const [dropdown, setDropdown] = useState(false)
    const [upDown, setUpDown] = useState("v")

    const dropClick = () => {
        if (dropdown) {
            setUpDown("∨")
            setDropdown(false)
        } else {
            setUpDown("∧")
            setDropdown(true)
        }
    }

    return (
        <li className="menu-items">
            {items.submenu ? (
                <>
                    <button
                        type="button"
                        aria-haspopup="menu"
                        aria-expanded={dropdown ? "true" : "false"}
                        onClick={dropClick}>
                            {items.title}{" "}{items.submenu && <span className="arrow">{upDown}</span>}
                    </button>
                    <Dropdown submenus={items.submenu} dropdown={dropdown} />
                </>
            ) : (
                <NavLink to={items.url}>{items.title}</NavLink>
            )}
        </li>
    )
}