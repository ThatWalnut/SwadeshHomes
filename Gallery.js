const rightButton = document.querySelector("#gallery-right-button");
const leftButton = document.querySelector("#gallery-left-button");
const gallerySlide = document.querySelector("#gallery-slide");
const galleryBackground = document.querySelector("#gallery-background");
let slideNumberText = document.querySelector("#slide-number");
let slideNumber = 0;
const imgURLs = ["GalleryImages/Gallery1.jpg","GalleryImages/Gallery2.jpg","GalleryImages/Gallery3.jpg","GalleryImages/Gallery4.jpg",
"GalleryImages/Gallery5.jpg","GalleryImages/Gallery6.jpg","GalleryImages/Gallery7.jpg","GalleryImages/Gallery8.jpg",];

rightButton.onclick = function() {
    pauseInterval();
    if(slideNumber<(imgURLs.length-1)){
    slideNumber+=1;
    }else{
        slideNumber=0;     
    }
    slideChange(slideNumber);
}
leftButton.onclick = function() {
    pauseInterval();
    if(slideNumber>0){
    slideNumber-=1;
    }else{
        slideNumber=imgURLs.length-1;
    }
    slideChange(slideNumber);
}
function autoCycler(){
    if(slideNumber<(imgURLs.length-1)){
        slideNumber+=1;
    }else{
        slideNumber=0;
    }
    slideChange(slideNumber);
}
function slideChange(slide){
    gallerySlide.style.backgroundImage = `url('${imgURLs[slide]}')`;

}
let cycler = setInterval(autoCycler, 4000);

function pauseInterval() {
    clearInterval(cycler);
    setTimeout(() => {
        cycler = setInterval(autoCycler, 4000); 
    }, 4000);
}
