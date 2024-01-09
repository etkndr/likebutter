import { useSelector, useDispatch } from "react-redux";
import { getMenuById } from "../../store/menu";
import { useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom";

export default function Menus() {
  const dispatch = useDispatch();
  const menu = useSelector((state) => state.menus.menu);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getMenuById(id));
  }, []);

  return (
    <>
      <h1>{menu?.title}</h1>
    </>
  );
}
