import { NavLink, useHistory } from "react-router-dom";
import {Dropdown, DropdownButton} from "react-bootstrap"
import React, { useState, useEffect, useRef } from "react";
import "./Navigation.css"

export default function Navigation() {
    const [showMenu, setShowMenu] = useState(false);
    const ulRef = useRef();
    const history = useHistory()
  
    const openMenu = () => {
        if (showMenu) {
            setShowMenu(false)
            return history.push("/");
        }
        setShowMenu(true);
      };
  
    useEffect(() => {
        if (!showMenu) return;
    
        const closeMenu = (e) => {
          if (ulRef.current && !ulRef.current.contains(e.target)) {
            setShowMenu(false);
          }
        };
    
        document.addEventListener("mousedown", closeMenu);
        document.addEventListener("touchstart", closeMenu);
    
        return () => {
          document.removeEventListener("mousedown", closeMenu);
          document.removeEventListener("touchstart", closeMenu);
        }
      }, [showMenu]);
    
    let dropDown
    if (!showMenu) {
        dropDown = "menu-item-hide"
    } else {
        dropDown = "menu-item-vis"
    }

    return (
        <div className="nav-bar">
            <div className="nav-links">
                <div className="menu-item-lb">
                <button onClick={openMenu} className="menu-btn">Like Butter</button>
                <ul className={dropDown} ref={ulRef}>
                    <div className="menu-link"><li>What we do</li></div>
                    <div className="menu-link"><li>Testimonials</li></div>
                    <div className="menu-link"><li>Meet the owners</li></div>
                </ul>
                </div>
            </div>
        </div>
    )
}