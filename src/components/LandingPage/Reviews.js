import "./LandingPage.css"
import { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useRef } from "react"

export default function Reviews() {
    const [reviews, setReviews] = useState([])
    const [rating, setRating] = useState([])
    const [author, setAuthor] = useState([])
    const [text, setText] = useState([])
    const [rand, setRand] = useState(0)
    const [stars, setStars] = useState([])
    const star = <FontAwesomeIcon icon="fa-solid fa-star" className="icon"/>
    const ref = useRef()
    
    const google = window.google


    
    useEffect(() => {
        setStars([])
        const map = new window.google.maps.Map(ref.current)
        let service = new google.maps.places.PlacesService(map);
        let request = {
            placeId: 'ChIJfYYmp7pJBgMRPft-XA0nNiA',
            fields: ['reviews'],
            };

        service.getDetails(request, (place, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
               setReviews(() => place?.reviews)
            }
            else {
            return
            }
        });

        
        

        setRand(Math.floor(5*(Math.random())))
        
        return (
            setStars([]), setAuthor([]), setRating([]), setText([])
        )
    }, [])

    useEffect(() => {
        reviews?.forEach((review) => {
            setAuthor((prev) => [...prev, review?.author_name])
            setRating((prev) => [...prev, review?.rating])
            setText((prev) => [...prev, review?.text])
        })
    }, [reviews])
    
    
    if (ref && reviews) {
        if (stars.length === 0) {
            for (let i = 0; i < Math.round(rating[rand]); i++) {
                    stars.push(i)
            }
        }

    return (
        <>
        <div id="map" ref={ref}>
        </div>
        <div className="reviews">
            <h1 className="review-header">Customers are saying:</h1>
            <div className="review">
                <div className="stars">
                    {stars.map((num) => {
                        return <span className="star" key={num}>{star}</span>
                    })}
                </div>
                <div className="review-text">
                    {text[rand]}
                </div>
                <div className="author">
                    {`- ${author[rand]}`}
                </div>
            </div>
            </div>
        </>
    )
    }
}