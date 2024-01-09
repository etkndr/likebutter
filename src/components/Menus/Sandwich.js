import { useEffect, useState } from "react"

export default function Sandwich() {
    const [sandwichMenu, setSandwichMenu] = useState()
    
    useEffect(() => {
        const menuFetch = async () => await fetch("https://likebutterknox.com/menus/sandwich.json")
        .then((res) => res.json())
        .then((res) => setSandwichMenu(res))
        
        menuFetch()
    },[])
    
    if (sandwichMenu) {
    const {menuTitle, price, choice, items} = sandwichMenu
    console.log(items[1])
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
                <div className="cater-menu-item">
                    <div className="item-title">
                        {items[1][0].title}
                    </div>
                {items[1][0].description.map((item, idx) => {
                return (
                    <div className="cater-menu-item" key={`item-${idx}`}>
                        <div className="item-info" key={`title-${idx}`}>
                            {item}
                        </div>
                    </div>
                )
            })}
                </div>
            </div>
    )}
}