import { useState, useEffect } from "react"
import "./LandingPage.css"
import LikeButter from "../../assets/LikeButter.png"

export default function LandingPage() {
    const [reviews, setReviews] = useState([])
    const [avg, setAvg] = useState()

    
    useEffect(() => {
        const getReviews = async () => {
            await fetch("https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJfYYmp7pJBgMRPft-XA0nNiA&key=AIzaSyAZ2y7dzznlJWMmWDzH9Nx9FEuQzrVupOk")
            .then((res) => {return res.json()})
            .then((res) => {
                setReviews(res.result.reviews)
                setAvg(res.result.rating)
            })
        }
        getReviews()
    }, [])

    if (reviews.length) {
    return (
        <div className="content">
            <div className="main-img">
                <img src={LikeButter} alt="like-butter-logo" />
            </div>
            <div className="slogan">
                simple food... elevated
            </div>
            {/* <div className="reviews">
                {reviews.map((review) => {
                    return review.text
                })}
            </div> */}
        </div>
    )
    }
}