import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import * as sessionActions from "../../store/session"
import { baseUrl } from "../../store/actions"
import { csrf } from "."

export default function LoginForm() {
  const dispatch = useDispatch()
  const sessionUser = useSelector((state) => state.session.user)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = await dispatch(sessionActions.login(email, password))
    // if (data) {
    //   setErrors(data)
    //   console.log(errors)
    // }
  }

  return (
    <>
      <div className="auth-form">
        <h1>Log In</h1>
        <form onSubmit={handleSubmit}>
          <ul>
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
          <label>
            Email
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <button type="submit">Log In</button>
        </form>
      </div>
    </>
  )
}
