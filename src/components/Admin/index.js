import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { baseUrl } from "../../store/actions"
import LoginForm from "./LoginForm"
import * as menuActions from "../../store/menu"

export const csrf = await fetch(`${baseUrl}/api/auth/user`, {
  method: "GET",
  mode: "cors",
  credentials: "include", // includes cookies, authorization in request headers
})
  .then((res) => res.json())
  .then((msg) => {
    console.log(msg)
    return `${msg.csrf_token}`
  })

export default function Admin() {
  const dispatch = useDispatch()
  const sessionUser = useSelector((state) => state.session.user)

  if (!sessionUser) {
    return <LoginForm />
  }

  return <>{sessionUser.username}</>
}
