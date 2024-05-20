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
  const [menu, setMenu] = useState()
  const [entree, setEntree] = useState()
  const [addOns, setAddOns] = useState()
  const [option1, setOption1] = useState()
  const [option2, setOption2] = useState()
  const [option3, setOption3] = useState()
  const [option4, setOption4] = useState()
  const [option5, setOption5] = useState()
  const [comments, setComments] = useState("")
  const [phoneErr, setPhoneErr] = useState("")
  const [emailErr, setEmailErr] = useState("")
  const [sizeErr, setSizeErr] = useState("")
  const [disabled, setDisabled] = useState(true)
  const [captcha, setCaptcha] = useState(false)
  const [menuOptions, setMenuOptions] = useState([])
  const [entreeText, setEntreeText] = useState("Select an entree")

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

  // ENABLE SUBMIT BUTTON
  useEffect(() => {
    if (
      firstName.length &&
      lastName.length &&
      phone.length === 12 &&
      email.length &&
      size >= 10 &&
      date &&
      menu &&
      entree &&
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
    menu,
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
    if (menu === "Small bites") {
      setEntreeText("Select number of options")
    } else {
      setEntreeText("Select an entree")
    }
  }, [menu])

  useEffect(() => {
    if (menu === "Breakfast") {
      setMenuOptions([
        ["Sexy Sausage", "McButter", "Steak Explosion"],
        ["Add coffee & OJ ($2/person)"],
      ])
    }

    if (menu === "Sandwich") {
      setMenuOptions([
        ["Chicken Philly", "Ham 'n' More", "Cubano", "Flying V"],
        [
          "Caesar potato salad",
          "Kettle chips",
          "Pasta salad",
          "Red lettuce salad",
        ],
      ])
    }

    if (menu === "Taco") {
      setMenuOptions([
        [
          "Sweet Thighs",
          "Oink Oink",
          "Iron Clad (+$3/person)",
          "Quesadilla (+$2/person)",
        ],
        ["Add tres leches cake ($3/person)"],
      ])
    }

    if (menu === "Southern") {
      setMenuOptions([
        ["Braised beef", "Ham 'n' gravy"],
        ["Caesar potato salad", "Cheesy noods"],
      ])
    }

    if (menu === "Small bites") {
      setMenuOptions([
        ["Pick 3 ($10/person)", "Pick 5 ($15/person)"],
        [
          "Bruschetta",
          "Bison meatballs",
          "Caesar salad boats",
          "Salmon croquettes",
          "Stuffed mushrooms",
          "Grilled shrimp skewers",
          "Veggie platter",
          "Carrot mousse",
          "Chocolate ganache balls",
          "House-made cookies",
        ],
      ])
    }
  }, [menu])

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

          {/* <div className="form-field">
                        <select name="menu" value={menu} onChange={(e) => {
                                setMenu(e.target.value)
                                setEntree("")
                                setAddOns("")
                                setOption1("")
                                setOption2("")
                                setOption3("")
                                setOption4("")
                                setOption5("")}}>
                            <option value="" disabled selected>Select a menu</option>
                            <option value="Breakfast">Breakfast bar</option>
                            <option value="Taco">Taco bar</option>
                            <option value="Sandwich">Sandwich bar</option>
                            <option value="Southern">Southern Comfort</option>
                            <option value="Small bites">Small bites</option>
                        </select>
                    </div>

                    <div className="form-field">
                        <select name="entree" value={entree} onChange={(e) => setEntree(e.target.value)}>
                            <option value="" disabled defaultValue>{entreeText}</option>
                            {menuOptions[0]?.map((entree, idx) => {
                                return <option value={entree} key={idx}>{entree}</option>
                            })}
                        </select>
                    </div>

                    {menu !== "Small bites" && 
                    <div className="form-field">
                            <select name="add-ons" value={addOns} onChange={(e) => setAddOns(e.target.value)}>
                                <option value="" disabled defaultValue>Select a side/add-on</option>
                                {menuOptions[1]?.map((addOn, idx) => {
                                    return <option value={addOn} key={idx}>{addOn}</option>
                                })}
                            </select>
                            </div>
                    }

                    {entree === "Pick 3 ($10/person)" &&
                        <div className="small-bites">
                            <select name="option1" value={option1} onChange={(e) => setOption1(e.target.value)}>
                                <option value="" disabled defaultValue>Option 1</option>
                                {menuOptions[1]?.map((addOn, idx) => {
                                    return <option value={addOn} key={idx}>{addOn}</option>
                                })}
                            </select>
                            <select name="option2" value={option2} onChange={(e) => setOption2(e.target.value)}>
                            <option value="" disabled defaultValue>Option 2</option>
                            {menuOptions[1]?.map((addOn, idx) => {
                                return <option value={addOn} key={idx}>{addOn}</option>
                            })}
                            </select>
                            <select name="option3" value={option3} onChange={(e) => setOption3(e.target.value)}>
                            <option value="" disabled defaultValue>Option 3</option>
                            {menuOptions[1]?.map((addOn, idx) => {
                                return <option value={addOn} key={idx}>{addOn}</option>
                            })}
                            </select>
                        </div>
                    }

                    {entree === "Pick 5 ($15/person)" &&
                        <div className="small-bites">
                            <select name="option1" value={option1} onChange={(e) => setOption1(e.target.value)}>
                                <option value="" disabled defaultValue>Option 1</option>
                                {menuOptions[1]?.map((addOn, idx) => {
                                    return <option value={addOn} key={idx}>{addOn}</option>
                                })}
                            </select>
                            <select name="option2" value={option2} onChange={(e) => setOption2(e.target.value)}>
                            <option value="" disabled defaultValue>Option 2</option>
                            {menuOptions[1]?.map((addOn, idx) => {
                                return <option value={addOn} key={idx}>{addOn}</option>
                            })}
                            </select>
                            <select name="option3" value={option3} onChange={(e) => setOption3(e.target.value)}>
                            <option value="" disabled defaultValue>Option 3</option>
                            {menuOptions[1]?.map((addOn, idx) => {
                                return <option value={addOn} key={idx}>{addOn}</option>
                            })}
                            </select>
                            <select name="option4" value={option4} onChange={(e) => setOption4(e.target.value)}>
                            <option value="" disabled defaultValue>Option 4</option>
                            {menuOptions[1]?.map((addOn, idx) => {
                                return <option value={addOn} key={idx}>{addOn}</option>
                            })}
                            </select>
                            <select name="option5" value={option5} onChange={(e) => setOption5(e.target.value)}>
                            <option value="" disabled defaultValue>Option 5</option>
                            {menuOptions[1]?.map((addOn, idx) => {
                                return <option value={addOn} key={idx}>{addOn}</option>
                            })}
                            </select>
                        </div>
                    } */}

          <div className="comments">
            <label>Additional info</label>
            <textarea
              name="comments"
              value={comments}
              placeholder="Event location, menu selection, questions, etc."
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
