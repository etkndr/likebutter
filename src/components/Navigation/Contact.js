import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Contact() {
    let phoneLink
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        phoneLink = <a href="tel:865-801-8768">(865) 801-8768</a>
    } else {
        phoneLink = "(865) 801-8768"
    }

    return (
        <ul className="contact">
            <li><FontAwesomeIcon icon="fa-solid fa-phone" className='icon' />{phoneLink}</li>
            <li><FontAwesomeIcon icon="fa-brands fa-instagram" className='icon'/>
                <a href="https://www.instagram.com/likebutterknox/" target="_blank" rel="noopener noreferrer">instagram</a>
            </li>
        </ul>
    )
}