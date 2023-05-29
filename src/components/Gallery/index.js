import "./Gallery.css"
import Selected from "./Selected"
import {useState} from "react"

const imported = importAll(require.context('../../assets/gallery', false, /\.(png|jpe?g|svg|JPG)$/));

function importAll(r) {
	let images = [];
  r.keys().forEach((item, index) => images.push(r(item)))
	return images
}


export default function Gallery() {
    const [currImg, setCurrImg] = useState("")

    const grid = imported.map((img, idx) => {
            return (
                <div className="img-container">
                        <img src={img} alt={`image-${imported.indexOf(img)}`} onClick={() => setCurrImg(img)} key={imported.indexOf(img)} className='gallery-img'/>
                </div>
            )
    })

    return (
        <div className="gallery">
            <Selected image={currImg}/>
            <div className="row">
                {grid}
            </div>
        </div>
    )
}