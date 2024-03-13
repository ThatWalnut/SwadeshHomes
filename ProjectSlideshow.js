const family1 = document.querySelector("#family1");
const family2 = document.querySelector("#family2");
const family3 = document.querySelector("#family3");
const family4 = document.querySelector("#family4");
const family5 = document.querySelector("#family5");
const family6 = document.querySelector("#family6");
const display = document.querySelector("#slideNumber");
const imgURLs = ["Images/Family1.jpg","Images/Family2.jpg","Images/Family3.jpg","Images/Family4.jpg","Images/Family5.jpg","Images/Family6.jpg"]
const slideShowCaption = document.querySelector("#slideshow-caption");
const slideShow = document.querySelector("#prjct-slideshow");

family1.onclick = function() {
    slideShow.style.backgroundImage = `url('${imgURLs[0]}')`;
    slideShowCaption.innerText = "Saroj and Shyamsundar"
};
family2.onclick = function() {
    slideShow.style.backgroundImage = `url('${imgURLs[1]}')`;
};
family3.onclick = function() {
    slideShow.style.backgroundImage = `url('${imgURLs[2]}')`;
};
family4.onclick = function() {
    slideShow.style.backgroundImage = `url('${imgURLs[3]}')`;
};
family5.onclick = function() {
    slideShow.style.backgroundImage = `url('${imgURLs[4]}')`;;
};
family6.onclick = function() {
    slideShow.style.backgroundImage = `url('${imgURLs[5]}')`;
};