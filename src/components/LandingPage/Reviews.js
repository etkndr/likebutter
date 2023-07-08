import "./LandingPage.css"
import { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Reviews() {
    const [reviews, setReviews] = useState({})
    const [rating, setRating] = useState()
    const [author, setAuthor] = useState()
    const [rand, setRand] = useState(0)
    const [stars, setStars] = useState([])
    const star = <FontAwesomeIcon icon="fa-solid fa-star" className="icon"/>
    const halfStar = <FontAwesomeIcon icon="fa-solid fa-star-half-stroke" className="icon"/>
    
    
    useEffect(() => {
        setStars([])
        const ratings = []
        const authors = []
        const text = []

        const getReviews = async () => {
            await fetch("https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJfYYmp7pJBgMRPft-XA0nNiA&key=AIzaSyAZ2y7dzznlJWMmWDzH9Nx9FEuQzrVupOk")
            .then((res) => {return res.json()})
            .then((res) => {
                res.result.reviews.forEach((review) => {
                    ratings.push(review.rating)
                    authors.push(review.author_name)
                    text.push(review.text)
                    
                    // let split
                    // if (review.text.includes("!")) {
                    //     split = review.text.split("!")
                    //     text.push(split[0] + "!")
                    // } else {
                    //     split = review.text.split(".")
                    //     text.push(split[0] + ".")
                    // }
                })
                setRating(ratings)
                setAuthor(authors)
                setReviews(text)
            })
        }
        getReviews()
        setRand(Math.floor(5*(Math.random())))

        return (
            setStars([])
        )
    }, [])
    
    
    if (author && rating) {
        if (stars.length === 0) {
            for (let i = 0; i < Math.round(rating[rand]); i++) {
                    stars.push(i)
            }
        }
    return (
        <div className="reviews">
            {/* <h1 className="review-header">Customers are saying:</h1> */}
            <div className="review">
                <div className="stars">
                    {stars.map((num) => {
                        return <span className="star" key={num}>{star}</span>
                    })}
                </div>
                <div className="review-text">
                    {reviews[rand]}
                </div>
                <div className="author">
                    {`- ${author[rand]}`}
                </div>
            </div>
        </div>
    )
    }
}