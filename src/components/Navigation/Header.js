import NavBar from "./NavBar"
import Contact from "./Contact"
import lbSmall from "../../assets/LB-small.png"
import { NavLink } from "react-router-dom"
import "./Navigation.css"

export default function Header() {
  return (
    <header>
      <NavLink to="/" className="logo">
        <div className="nav-logo">
          <img src={lbSmall} alt="nav-logo" />
        </div>
      </NavLink>
      <div className="nav-area">
        <NavBar />
        <div className="nav-contact">
          <Contact />
        </div>
      </div>
    </header>
  )
}
