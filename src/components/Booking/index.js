import { useState, useEffect, useRef } from "react"
import { useHistory } from "react-router-dom"
import emailjs from '@emailjs/browser'
import ReCAPTCHA from "react-google-recaptcha"
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
    const [comments, setComments] = useState("")
    const [phoneErr, setPhoneErr] = useState("")
    const [emailErr, setEmailErr] = useState("")
    const [disabled, setDisabled] = useState(true)
    const [captcha, setCaptcha] = useState(false)
    const [menuOptions, setMenuOptions] = useState([])

    const submit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_fhsb7ts', 'template_t1w5k7d', form.current, 'tc24K-Tq-aR1Er5qi')
            .then(() => alert(`Thank you for your request, ${firstName}! Our booking manager will be in touch shortly to confirm. Have a great day!`))
            .then(() => history.push("/"))
    }

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
    }, [firstName, lastName, phone, email, date, size, menu, entree, addOns, captcha])

    useEffect(() => {
        if (email.length && !email?.includes("@" && ".")) {
            setEmailErr("Please enter a valid email address")
        }

        if (email.length === 0 || email?.includes("@" && ".")) {
            setEmailErr("")
        }
        
        if (phone?.length === 12) {
            if (!phone?.includes("-")) {
                setPhoneErr("Please include dashes after area code and before last four digits of phone number")
            } else {
                phone?.split("-")?.forEach((el) => {
                    if (!Number(el)) {
                    setPhoneErr("Phone number can only include numbers and two dashes")
                }   if (Number(el)) {
                    setPhoneErr("")
                }
            }
            )}}
    
            if (phone?.length < 12 || !phone) {
                setPhoneErr("")
            }
    
            if (phone?.length > 12) {
                setPhoneErr("Phone number cannot be more than 10 digits in length")
            }
    }, [phone, email, phoneErr, emailErr])

    useEffect(() => {
        if (menu === "Breakfast") {
            setMenuOptions([["Sexy Sausage", "McButter", "Steak Explosion"], ["Add coffee & OJ ($2/person)"]])
        }

        if (menu === "Sandwich") {
            setMenuOptions([["Chicken Philly", "Ham 'n' More", "Cubano", "Flying V"], 
            ["Caesar potato salad", "Kettle chips", "Pasta salad", "Red lettuce salad"]])
        }

        if (menu === "Taco") {
            setMenuOptions([["Sweet Thighs", "Oink Oink", "Iron Clad (+$3/person)", "Quesadilla (+$2/person)"], 
            ["Add tres leches cake ($3/person)"]])
        }

        if (menu === "Southern") {
            setMenuOptions([["Braised beef", "Ham 'n' gravy"], 
            ["Caesar potato salad", "Cheesy noods"]])
        }
    }, [menu])

    return (
        <div className="content">
            <div className="menu-title">
                PLACE AN ORDER
            </div>
            <div className="form-container">
                <form className="booking-form" ref={form} onSubmit={submit}>
                    <div className="form-field">
                        <label>First name</label>
                        <input value={firstName} 
                            name="first-name"
                            onChange={(e) => setFirstName(e.target.value)}>
                        </input>
                    </div>

                    <div className="form-field">
                        <label>Last name</label>
                        <input value={lastName}
                            name="last-name"
                            onChange={(e) => setLastName(e.target.value)}>
                        </input>
                    </div>

                    <div className="form-field">
                        <label>Phone number</label>
                        <input value={phone} 
                            name="phone"
                            onChange={(e) => setPhone(e.target.value)}
                            type="tel"
                            minLength={12}
                            placeholder="###-###-####">
                        </input>
                        <div className="error">
                            {phoneErr}
                        </div>
                    </div>

                    <div className="form-field">
                        <label>Email address</label>
                        <input value={email} 
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="yourname@example.com">
                        </input>
                        <div className="error">
                            {emailErr}
                        </div>
                    </div>

                    <div className="form-field">
                        <label>Date of event</label>
                        <input value={date} 
                            name="date"
                            onChange={(e) => setDate(e.target.value)}
                            type="date">
                        </input>
                    </div>

                    <div className="form-field">
                        <label>Number of people</label>
                        <input value={size} 
                            name="size"
                            onChange={(e) => setSize(e.target.value)}
                            type="number">
                        </input>
                    </div>

                    <div className="form-field">
                        <select name="menu" value={menu} onChange={(e) => {
                                setMenu(e.target.value)
                                setEntree("")
                                setAddOns("")}}>
                            <option value="" disabled selected>Select a menu</option>
                            <option value="Breakfast">Breakfast bar</option>
                            <option value="Taco">Taco bar</option>
                            <option value="Sandwich">Sandwich bar</option>
                            <option value="Southern">Southern Comfort</option>
                        </select>
                    </div>

                    <div className="form-field">
                        <select name="entree" value={entree} onChange={(e) => setEntree(e.target.value)}>
                            <option value="" disabled defaultValue>Select an entree</option>
                            {menuOptions[0]?.map((entree, idx) => {
                                return <option value={entree} key={idx}>{entree}</option>
                            })}
                        </select>
                    </div>

                    <div className="form-field">
                        <select name="add-ons" value={addOns} onChange={(e) => setAddOns(e.target.value)}>
                            <option value="" disabled defaultValue>Select a side/add-on</option>
                            {menuOptions[1]?.map((addOn, idx) => {
                                return <option value={addOn} key={idx}>{addOn}</option>
                            })}
                        </select>
                    </div>

                    <div className="comments">
                        <label>Additional info and questions
                        <div>(If outside of Knoxville, please include location)</div>
                        </label>
                        <textarea name="comments" value={comments} 
                            placeholder="Additional info..."
                            onChange={(e) => setComments(e.target.value)}>
                        </textarea>
                    </div>

                    <div className="captcha">
                    <ReCAPTCHA
                        sitekey="6LeFAEImAAAAAOayGyg8YvbFOl7v4gjtBsPxqxuk" 
                        onChange={() => setCaptcha(true)}
                    />
                    </div>

                    <div className="submit">
                        <button type="submit" disabled={disabled}>SUBMIT</button>
                    </div>
                </form>
            </div>
        </div>
    )
}