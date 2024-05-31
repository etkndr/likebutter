import { useState, useEffect, useRef } from "react"
import { useHistory } from "react-router-dom"
import emailjs from "@emailjs/browser"
import ReCAPTCHA from "react-google-recaptcha"
import PhoneInput from "react-phone-number-input/input"
import "./Booking.css"

export default function Booking() {
  const history = useHistory()
  const form = useRef()
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [date, setDate] = useState()
  const [size, setSize] = useState(10)
  const [visMenus, setVisMenus] = useState()
  const [menuId, setMenuId] = useState()
  const [selectedMenu, setSelectedMenu] = useState()
  const [menuItems, setMenuItems] = useState()
  const [entree, setEntree] = useState()
  const [addOns, setAddOns] = useState()
  const [comments, setComments] = useState("")
  const [phoneErr, setPhoneErr] = useState("")
  const [emailErr, setEmailErr] = useState("")
  const [sizeErr, setSizeErr] = useState("")
  const [disabled, setDisabled] = useState(true)
  const [captcha, setCaptcha] = useState(false)
  const [menuOptions, setMenuOptions] = useState([])
  const [entreeText, setEntreeText] = useState("Select an entree")

  // get vis menus
  useEffect(() => {
    fetch("https://etkndr.pythonanywhere.com/api/menus/visible")
      .then((res) => res.json())
      .then((data) => setVisMenus(data))
  }, [])

  // ENABLE SUBMIT BUTTON
  useEffect(() => {
    if (
      firstName.length &&
      lastName.length &&
      phone.length === 12 &&
      email.length &&
      size >= 10 &&
      date &&
      selectedMenu &&
      captcha
    ) {
      setDisabled(false)
    }
  }, [
    firstName,
    lastName,
    phone,
    email,
    date,
    size,
    selectedMenu,
    entree,
    addOns,
    captcha,
  ])

  // FORM VALIDATION
  useEffect(() => {
    if (email.length && !email?.includes("@" && ".")) {
      setEmailErr("Please enter a valid email address")
    }

    if (email.length === 0 || email?.includes("@" && ".")) {
      setEmailErr("")
    }

    if (size < 10) {
      setSizeErr("Please enter a size of 10 people or more")
    } else {
      setSizeErr("")
    }

    if (phone && phone?.length !== 12) {
      setPhoneErr("Please enter a valid phone number")
    }
    if (phone && phone.length === 12) {
      setPhoneErr("")
    }
  }, [phone, email, size, phoneErr, emailErr, sizeErr])

  // MENU ITEMS
  useEffect(() => {
    if (menuId) {
      fetch(`https://etkndr.pythonanywhere.com/api/menus/${menuId}`)
        .then((res) => res.json())
        .then((data) => setSelectedMenu(data))
    }
  }, [menuId])

  useEffect(() => {
    if (selectedMenu && selectedMenu.sections) {
      const itemList = []
      for (const section in selectedMenu.sections) {
        itemList.push(selectedMenu.sections[section].items)
      }
      setMenuItems(itemList)
    }
  }, [selectedMenu])

  const submit = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        "service_fhsb7ts",
        "template_t1w5k7d",
        form.current,
        "tc24K-Tq-aR1Er5qi"
      )
      .then(() =>
        alert(
          `Thank you for your request, ${firstName}! Our booking manager will be in touch shortly to confirm. Have a great day!`
        )
      )
      .then(() => history.push("/"))
  }

  return (
    <div className="content">
      <div className="menu-title">PLACE AN ORDER</div>
      <div className="form-container">
        <form className="booking-form" ref={form} onSubmit={submit}>
          <div className="form-field">
            <label>First name</label>
            <input
              value={firstName}
              name="first-name"
              onChange={(e) => setFirstName(e.target.value)}
            ></input>
          </div>

          <div className="form-field">
            <label>Last name</label>
            <input
              value={lastName}
              name="last-name"
              onChange={(e) => setLastName(e.target.value)}
            ></input>
          </div>

          <div className="form-field">
            <label>Phone number</label>
            <PhoneInput
              country="US"
              name="phone"
              onChange={setPhone}
              value={phone}
            />
            <div className="error">{phoneErr}</div>
          </div>

          <div className="form-field">
            <label>Email address</label>
            <input
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="yourname@example.com"
            ></input>
            <div className="error">{emailErr}</div>
          </div>

          <div className="form-field">
            <label>Date of event</label>
            <input
              value={date}
              name="date"
              onChange={(e) => setDate(e.target.value)}
              type="date"
            ></input>
          </div>

          <div className="form-field">
            <label>Number of people</label>
            <input
              value={size}
              name="size"
              onChange={(e) => setSize(e.target.value)}
              type="number"
              min={10}
            ></input>
            <div className="error">{sizeErr}</div>
          </div>

          <div className="form-field">
            <label>Select a menu</label>
            <select
              name="menu"
              value={menuId}
              onChange={(e) => {
                setMenuId(e.target.value)
              }}
            >
              <option value="" selected disabled>
                Selection
              </option>
              {visMenus?.map((menu) => {
                return (
                  <option value={menu.id} key={menu.id}>
                    {menu.title}
                  </option>
                )
              })}
            </select>
          </div>

          <div className="comments">
            <label>Additional info</label>
            <textarea
              name="comments"
              value={comments}
              placeholder="Event location, menu options, questions, etc."
              onChange={(e) => setComments(e.target.value)}
            ></textarea>
          </div>

          <div className="captcha">
            <ReCAPTCHA
              sitekey="6LeFAEImAAAAAOayGyg8YvbFOl7v4gjtBsPxqxuk"
              onChange={() => setCaptcha(true)}
            />
          </div>

          <div className="submit">
            <button type="submit" disabled={disabled}>
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
