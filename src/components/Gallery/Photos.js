const images = importAll(require.context('../../assets/gallery', false, /\.(png|jpe?g|svg|JPG)$/));

function importAll(r) {
	let images = [];
  r.keys().forEach((item, index) => images.push(r(item)))
	return images
}

const unsplashPhotos = []
images.forEach((pic) => {
    const img = new Image()
    img.src = pic
    const imgObj = {
        url: pic,
        width: img.naturalWidth,
        height: img.naturalHeight
    }
    unsplashPhotos.push(imgObj)
})

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const photos = unsplashPhotos.map((photo) => {
    return {
    src: photo.url,
    width: photo.width,
    height: photo.height,
    srcSet: breakpoints.map((breakpoint) => {
        const height = Math.round((photo.height / photo.width) * breakpoint);
        return {
            src: photo.url,
            width: breakpoint,
            height,
        };
    }),
}});

export default photos;
