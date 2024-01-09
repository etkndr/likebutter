import { useState, useEffect } from "react"
import "./LandingPage.css"
import LikeButter from "../../assets/LikeButter.png"
import Reviews from "./Reviews"
import { Wrapper } from "@googlemaps/react-wrapper"

export default function LandingPage() {
    const key = "AIzaSyAZ2y7dzznlJWMmWDzH9Nx9FEuQzrVupOk"

    return (
        <div className="content">
            <div className="main-img">
                <img src={LikeButter} alt="like-butter-logo" />
            </div>
            <div className="slogan">
                simple food... elevated
            </div>
                <Reviews />
        </div>
    )
}