import "./LandingPage.css"
import { useState, useEffect } from "react"

export default function Reviews() {
    const [reviews, setReviews] = useState({})
    const [rating, setRating] = useState()
    const [author, setAuthor] = useState()

    
    useEffect(() => {
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
                    
                    let split
                    if (review.text.includes("!")) {
                        split = review.text.split("!")
                        text.push(split[0] + "!")
                    } else {
                        split = review.text.split(".")
                        text.push(split[0] + ".")
                    }
                })
                setRating(ratings)
                setAuthor(authors)
                setReviews(text)
            })
        }
        getReviews()
    }, [])

    console.log(reviews)

    if (author && rating) {
    return (
        <div className="reviews">
            {author.slice(0, 3).map((auth, idx) => {
                return (
                    <div className="review" key={idx}>
                        <div className="author" key={`auth-${idx}`}>{auth}</div> <div className="review-text" key={`review-${idx}`}>{reviews[idx]}</div>
                    </div>
                )
            })}
        </div>
    )
    }
}