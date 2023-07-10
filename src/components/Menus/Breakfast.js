import "./Menus.css"
import { breakfastMenu } from "https://likebutterknox.com/menus/breakfast.js"

export default function Breakfast() {
    const {menuTitle, price, choice, items} = breakfastMenu

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
                        <div className="item-info" key={`info-${idx}`}>
                            {item.description}
                        </div>
                    </div>
                )
            })}
                    <div className="separate">
                        ...
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
                    ...
                </div>
                {items[2].map((item, idx) => {
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
            </div>
    )
}