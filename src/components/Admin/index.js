import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { baseUrl } from "../../store/actions"
import { logout } from "../../store/session"
import LoginForm from "./LoginForm"
import * as menuActions from "../../store/menu"

export default function Admin() {
  const dispatch = useDispatch()
  const sessionUser = useSelector((state) => state.session.user)

  if (!sessionUser) {
    return <LoginForm />
  }

  return (
    <>
      {sessionUser.username}
      <button onClick={() => dispatch(logout())}>log out</button>
    </>
  )
}
