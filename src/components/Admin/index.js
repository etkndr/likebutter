import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import LoginForm from "./LoginForm"
import * as menuActions from "../../store/menu"

export default function Admin() {
  const dispatch = useDispatch()
  const visMenus = useSelector((state) => state.menus.menuList)
  const sessionUser = useSelector((state) => state.session.user)

  useEffect(() => {
    dispatch(menuActions.getVisibleMenus())
    console.log(visMenus)
  }, [])

  if (!sessionUser) {
    return <LoginForm />
  }

  return <>{sessionUser.username}</>
}
