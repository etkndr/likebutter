import "./Menus.css"

export default function Breakfast() {
    return (
        <div className="cater-menu">
            <h1 className="menu-title">
                BREAKFAST BAR
            </h1>
            <div className="price">
                ($10 per person)
            </div>
            <div className="choose-one">
                Choose one of the following breakfast sandwiches:
            </div>
                <div className="cater-menu-item">
                    <h3 className="item-title">
                        THE SEXY SAUSAGE
                    </h3>
                    <div className="item-info">
                        Smoked sausage, orange marmalade, sriracha mustard, sourdough
                    </div>
                </div>
                <div className="cater-menu-item">
                    <h3 className="item-title">
                        THE MCBUTTER
                    </h3>
                    <div className="item-info">
                        Thick-cut bacon, egg, cheddar, hashbrown, english muffin
                    </div>
                </div>
                <div className="cater-menu-item">
                    <h3 className="item-title">
                        STEAK EXPLOSION
                    </h3>
                    <div className="item-info">
                        Grilled steak, pimento cheese, tomato jam, scratch-made biscuit
                    </div>
                    <div className="separate">
                        ...
                    </div>
                </div>
                <div className="cater-menu-item">
                    <div className="includes">
                        Includes the following sides:
                    </div>
                    <div className="item-title">
                        Warm fruit bowl
                    </div>
                    <div className="item-info">
                        w/ sweet glaze and granola
                    </div>
                </div>
                <div className="cater-menu-item">
                    <div className="item-title">
                        Creamy cheese grits
                    </div>
                    <div className="item-info">
                        w/ aged cheddar and roasted garlic
                    </div>
                </div>
            </div>
    )
}