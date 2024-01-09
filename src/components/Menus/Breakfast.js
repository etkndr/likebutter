import { useEffect, useState } from "react";
import "./Menus.css";

export default function Breakfast() {
  const [breakfastMenu, setBreakfastMenu] = useState();

  useEffect(() => {
    const menuFetch = async () =>
      await fetch("https://likebutterknox.com/menus/breakfast.json")
        .then((res) => res.json())
        .then((res) => setBreakfastMenu(res));

    menuFetch();
  }, []);

  if (breakfastMenu) {
    const { menuTitle, price, choice, items } = breakfastMenu;
    return (
      <div className="cater-menu">
        <h1 className="menu-title">{menuTitle}</h1>
        <div className="price">{price}</div>
        <div className="choose-one">{choice}</div>
        {items[0]?.map((item, idx) => {
          return (
            <div className="cater-menu-item" key={`item-${idx}`}>
              <div className="item-title" key={`title-${idx}`}>
                {item.title}
              </div>
              <div className="item-info" key={`info-${idx}`}>
                {item.description}
              </div>
            </div>
          );
        })}
        <div className="separate">...</div>
        {items[1]?.map((item, idx) => {
          return (
            <div className="cater-menu-item" key={`item-${idx}`}>
              <div className="item-title" key={`title-${idx}`}>
                {item.title}
              </div>
              <div className="item-info" key={`info-${idx}`}>
                {item.description}
              </div>
            </div>
          );
        })}
        {/* 
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
            })} */}
      </div>
    );
  }
}
