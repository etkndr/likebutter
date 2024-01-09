import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as menuActions from "../../store/menu";

export default function Admin() {
  const dispatch = useDispatch();
  const visMenus = useSelector((state) => state.menus.menuList);

  useEffect(() => {
    dispatch(menuActions.getVisibleMenus());
  }, []);
  return (
    <>
      {visMenus?.map((menu) => {
        return menu.title;
      })}
    </>
  );
}
