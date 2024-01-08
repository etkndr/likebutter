import { useEffect, useState } from "react"

export default function Southern() {
    const [southernMenu, setSouthernMenu] = useState()
    
    useEffect(() => {
        const menuFetch = async () => await fetch("https://likebutterknox.com/menus/southern.json")
        .then((res) => res.json())
        .then((res) => setSouthernMenu(res))
        
        menuFetch()
    },[])
    
    if (southernMenu) {
    const {menuTitle, price, choice, items} = southernMenu
    return (
        <div className="cater-menu">
            <h1 className="menu-title">
                {menuTitle}
            </h1>
            <div className="price">
                {price}
            </div>
            <div className="choose-one">
                {choice[0]}
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
                <div className="choose-one">
                    {choice[1]}
                </div>
                {items[1].map((item, idx) => {
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
                <div className="cater-menu-item">
                    <div className="item-title">
                        INCLUDED:
                    </div>
                {items[2][0].description.map((item, idx) => {
                return (
                        <div className="item-info" key={`info-${idx}`}>
                            {item}
                        </div>
                )
            })}
                </div>
            </div>
    )}
}