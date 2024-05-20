import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { useForm } from "react-hook-form"
import emailjs from "@emailjs/browser"

export default function Booking() {
  const history = useHistory()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, firstName },
  } = useForm()

  function onSubmit(form) {
    emailjs
      .sendForm(
        "service_fhsb7ts",
        "template_t1w5k7d",
        form,
        "tc24K-Tq-aR1Er5qi"
      )
      .then(() =>
        alert(
          `Thank you for your request, ${form.firstName}! Our booking manager will be in touch shortly to confirm. Have a great day!`
        )
      )
      .then(() => history.push("/"))
  }

  return (
    <form>
      <input {...register("firstName", { required: true })} />
      <button type="submit">submit</button>
    </form>
  )
}
