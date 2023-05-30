export default function Taco() {
    return (
        <div className="cater-menu">
            <h1 className="menu-title">
                TACO BAR
            </h1>
            <div className="price">
                ($14/person)
            </div>
            <div className="choose-one">
                Choose one of the following tacos:
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
                        Thick-cut bacon, egg, cheddar, hashbrown, served as a burrito
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
                        ....
                    </div>
                </div>
                <div className="cater-menu-item">
                    <div className="includes">
                        Includes the following sides:
                    </div>
                    <div className="item-title">
                        WARM FRUIT BOWL
                    </div>
                    <div className="item-info">
                        w/ sweet vanilla glaze and granola
                    </div>
                </div>
                <div className="cater-menu-item">
                    <div className="item-title">
                        CREAMY CHEESE GRITS
                    </div>
                    <div className="item-info">
                        w/ aged cheddar and roasted garlic
                    </div>
                <div className="separate">
                    ....
                </div>
                </div>
                <div className="cater-menu-item">
                    <div className="item-title">
                        DRINKS
                    </div>
                    <div className="item-info">
                        Add Honeybee coffee and OJ for $2/person
                    </div>
                </div>
            </div>
    )
}