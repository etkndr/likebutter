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
                        THEM SWEET THIGHS
                    </h3>
                    <div className="item-info">
                        Grilled chicken thigh, pineapple & poblano salsa, sweet & spicy teriyaki, queso fresco
                    </div>
                </div>
                <div className="cater-menu-item">
                    <h3 className="item-title">
                        OINK OINK
                    </h3>
                    <div className="item-info">
                        Roasted pork tenderloin, pear sauerkraut, apricot & ginger reduction
                    </div>
                </div>
                <div className="cater-menu-item">
                    <h3 className="item-title">
                        QUESADILLA
                    </h3>
                    <div className="price">
                        (+$2/person)
                    </div>
                    <div className="item-info">
                        Pear sauerkraut, mozarella, spicy dijon mustard (V)
                    </div>
                </div>
                <div className="cater-menu-item">
                    <h3 className="item-title">
                        IRON CLAD
                    </h3>
                        <div className="price">(+$3/person)</div>
                    <div className="item-info">
                        Shredded beef, walnut pesto, creme friache, pickled red onion
                    </div>
                    <div className="separate">
                        ....
                    </div>
                </div>
                <div className="cater-menu-item">
                    <div className="item-title">
                        DESSERT
                    </div>
                    <div className="item-info">
                        House-made tres leches cake (+$2/person, minimum of eight servings)
                    </div>
                </div>
            </div>
    )
}