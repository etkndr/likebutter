import "./Gallery.css"

export default function Selected({image}) {
    return (
        <div className="curr-img-container">
            {image && <img src={image} alt="curr-image" className="curr-img"/>}
        </div>
    )
}