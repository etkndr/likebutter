import "./Gallery.css"
import Selected from "./Selected"
import {Suspense, useState} from "react"

const imported = importLarge(require.context('../../../public/gallery', false, /\.(png|jpe?g|svg|JPG)$/));
const importedSmall = importSmall(require.context('../../../public/gallery', false, /\.(png|jpe?g|svg|JPG)$/));

function importLarge(r) {
	let images = [];
  r.keys().forEach((item, index) => {
        if (!item.includes("Small"))
        images.push(r(item))
    })
	return images
}

function importSmall(r) {
	let images = [];
  r.keys().forEach((item, index) => {
        if (item.includes("Small"))
        images.push(r(item))
    })
	return images
}


export default function Gallery() {
    const [currImg, setCurrImg] = useState(imported[0])
    const [currSmall, setCurrSmall] = useState(importedSmall[0])

    let focus
    const grid = importedSmall.map((img, idx) => {
        if (importedSmall[idx] === currSmall) {
            focus = "img-container-focus"
        } else {
            focus = "img-container"
        }
            return (
                <div className={focus}>
                        <img src={img} alt={`image-${imported.indexOf(img)}`} onClick={(e) => {
                            setCurrSmall(importedSmall[idx]) 
                            setCurrImg(imported[idx])
                            }} key={imported.indexOf(img)} className="gallery-img"/>
                </div>
            )
    })

    return (
        <div className="gallery">
            <Suspense fallback="Loading...">
            <Selected image={currImg}/>
            <div className="row">
                {grid}
            </div>
            </Suspense>
        </div>
    )
}