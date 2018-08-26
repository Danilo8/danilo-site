var imageCount = 0;
var currentImage = 0;
var images = new Array();

images[0] = 'public/img/bg/bg-home-1e.png';
images[1] = 'public/img/bg/bg-home-2.png';

var preLoadImages = new Array();
for (var i = 0; i < images.length; i++) {
    if (images[i] == "")
        break;

    preLoadImages[i] = new Image();
    preLoadImages[i].src = images[i];
    imageCount++;
}

function startSlideShow() {
    if (document.getElementById("cover") && imageCount > 0) {
        document.getElementById("cover").style.backgroundImage = "url(" + images[currentImage] + ")";

        currentImage = currentImage + 1;
        if (currentImage > (imageCount - 1)) {
            currentImage = 0;
        }
        setTimeout('startSlideShow()', 10000);
    }
}
startSlideShow();