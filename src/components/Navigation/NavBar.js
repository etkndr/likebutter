import "./Navigation.css"
import { menuItems } from "../../menuItems"
import { NavLink } from "react-router-dom"
import MenuItems from "./MenuItems"

export default function NavBar() {
  return (
    <nav>
      <ul className="menus">
        {menuItems?.map((menu, index) => {
          return <MenuItems items={menu} key={index} />
        })}
      </ul>
    </nav>
  )
}
