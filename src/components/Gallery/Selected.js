import "./Gallery.css"

export default function Selected({image}) {
    return (
        <div className="curr-img">
            {image && <img src={image} alt="curr-image"/>}
        </div>
    )
}