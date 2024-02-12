import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Contact() {
  return (
    <ul className="contact">
      <a href="tel:865-801-8768">
        <li>
          <FontAwesomeIcon icon="fa-solid fa-phone" className="icon" />
          <span>(865) 801-8768</span>
        </li>
      </a>
      <a
        href="https://www.instagram.com/likebutterknox/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <li>
          <FontAwesomeIcon icon="fa-brands fa-instagram" className="icon" />
        </li>
      </a>
    </ul>
  )
}
