import { useEffect, useState } from "react"
import "./Menus.css"

export default function Holiday() {
    const [holidayMenu, setHolidayMenu] = useState()
    
    useEffect(() => {
        const menuFetch = async () => await fetch("https://likebutterknox.com/menus/holiday.json")
        .then((res) => res.json())
        .then((res) => setHolidayMenu(res))
        
        menuFetch()
    },[])

    
    if (holidayMenu) {
        const {menuTitle, price, choice, items} = holidayMenu
        console.log(items)
    return (
        <div className="cater-menu">
            <h1 className="menu-title">
                {menuTitle}
            </h1>
            <div className="price">
                {price}
            </div>
            <div className="choose-one">
                {choice}
            </div>
            {items[0].map((item, idx) => {
                return (
                    <div className="cater-menu-item" key={`item-${idx}`}>
                        <div className="item-title" key={`title-${idx}`}>
                            {item.title}
                        </div>
                        <div className="price" key={`price`}>
                            {item.price && item.price}
                        </div>
                        <div className="item-info" key={`info-${idx}`}>
                            {item.description}
                        </div>
                    </div>
                )
            })}
                    <div className="separate">
                        ....
                    </div>
                    {items[1].map((item, idx) => {
                return (
                    <div className="cater-menu-item" key={`item-${idx}`}>
                        <div className="item-title" key={`title-${idx}`}>
                            {item.title}
                        </div>
                        <div className="item-info" key={`info-${idx}`}>
                            {item.description}
                        </div>
                    </div>
                )
            })}
            <div className="separate">
                        ....
            </div>
            <div className="cater-menu-item">
                <div className="item-title">
                    {items[2][0].title}
                </div>
                <div className="taco-includes">
                    (Included)
                </div>
                <div className="item-info">
                    {items[2][0].description}
                </div>
            </div>
            <div className="separate">
                        ....
            </div>
            <div className="cater-menu-item">
                <div className="item-title">
                    {items[3][0].title}
                </div>
                <div className="taco-includes">
                    (+$4/person, minimum of eight servings)
                </div>
                {items[3][0].description.map((item, idx) => {
                    return <div className="item-info" key={`dessert-${idx}`}>{item}</div>
                })}
            </div>
        </div>
    )}
}