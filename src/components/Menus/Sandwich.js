export default function Sandwich() {
    return (
        <div className="cater-menu">
            <h1 className="menu-title">
                SANDWICH BAR
            </h1>
            <div className="price">
                ($12/person)
            </div>
            <div className="choose-one">
                Choose one of the following sandwiches:
            </div>
                <div className="cater-menu-item">
                    <h3 className="item-title">
                        CHICKEN PHILLY
                    </h3>
                    <div className="item-info">
                        Seared chicken breast, roasted garlic aioli, bell pepper, onion, mushroom, hoagie roll
                    </div>
                </div>
                <div className="cater-menu-item">
                    <h3 className="item-title">
                        HAM 'N' MORE
                    </h3>
                    <div className="item-info">
                        Roasted ham, smoked gouda, poppyseed mustard, shaved pear, potato roll
                    </div>
                </div>
                <div className="cater-menu-item">
                    <h3 className="item-title">
                        CUBANO
                    </h3>
                    <div className="item-info">
                        Roasted pork tenderloin, honey ham, Genoa salami, swiss, sweet pickle, pork-infused mayo, yellow mustard, cubano roll
                    </div>
                </div>
                <div className="cater-menu-item">
                    <h3 className="item-title">
                        FLYING V
                    </h3>
                        <div className="price">(+$3/person)</div>
                    <div className="item-info">
                        Hummus, red pepper, pickled red onion, quick-pickled cucumber, shaved apple, dill, everything bagel (V)
                    </div>
                    <div className="separate">
                        ....
                    </div>
                </div>
                <div className="cater-menu-item">
                    <div className="item-title">
                        CHOOSE TWO SIDES
                    </div>
                    <div className="item-info">
                        Caesar potato salad
                    </div>
                    <div className="item-info">
                        Kettle cooked chips w/ house ranch
                    </div>
                    <div className="item-info">
                        Pasta salad
                    </div>
                    <div className="item-info">
                        Red leaf salad w/ macerated peach, walnut, shaved parmesan, sherry dressing
                    </div>
                </div>
            </div>
    )
}