import { useEffect, useState } from "react"

export default function Taco() {
    const [tacoMenu, setTacoMenu] = useState()
    
    useEffect(() => {
        const menuFetch = async () => await fetch("https://likebutterknox.com/menus/taco.json")
        .then((res) => res.json())
        .then((res) => setTacoMenu(res))
        
        menuFetch()
    },[])
    
    if (tacoMenu) {
    const {menuTitle, price, choice, items} = tacoMenu
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
                        <div className="price" key={`price-${idx}`}>
                            {item.price && item.price}
                        </div>
                        <div className="item-info" key={`info-${idx}`}>
                            {item.description}
                        </div>
                        <div className="taco-includes" key={`includes-${idx}`}>
                            {item.addOn && item.addOn}
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
                        <div className="taco-includes" key={`price`}>
                            {item.price && item.price}
                        </div>
                        <div className="item-info" key={`info-${idx}`}>
                            {item.description}
                        </div>
                    </div>
                )
            })}
            </div>
    )}
}