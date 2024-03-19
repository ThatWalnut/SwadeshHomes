const P1Family1 = document.querySelector("#p1-family1");
const P1Family2 = document.querySelector("#p1-family2");
const P1Family3 = document.querySelector("#p1-family3");
const P1Family4 = document.querySelector("#p1-family4");
const P1Family5 = document.querySelector("#p1-family5");
const P1Family6 = document.querySelector("#p1-family6");

const P2Family1 = document.querySelector("#p2-family1");
const P2Family2 = document.querySelector("#p2-family2");
const P2Family3 = document.querySelector("#p2-family3");
const imgURLs = ["Images/Family1.jpg","Images/Family2.jpg","Images/Family3.jpg","Images/Family4.jpg","Images/Family5.jpg","Images/Family6.jpg"]
const P1SlideShowCaption = document.querySelector("#p1-slideshow-caption");
const P2SlideShowCaption = document.querySelector("#p2-slideshow-caption");
const P1SlideShow = document.querySelector("#p1-prjct-slideshow");
const P2SlideShow = document.querySelector("#p2-prjct-slideshow");

P1Family1.onclick = function() {
    P1SlideShow.style.backgroundImage = `url('${imgURLs[0]}')`;
    P1SlideShowCaption.innerText = "Saroj and Shyamsundar"
};
P1Family2.onclick = function() {
    P1SlideShow.style.backgroundImage = `url('${imgURLs[1]}')`;
    P1SlideShowCaption.innerText = "Rekha Devi & Lakshamn Rajbhar"
};
P1Family3.onclick = function() {
    P1SlideShow.style.backgroundImage = `url('${imgURLs[2]}')`;
    P1SlideShowCaption.innerText = "Jeeavn Lal & Rinku Devi (Rekha's Family)"
};
P1Family4.onclick = function() {
    P1SlideShow.style.backgroundImage = `url('${imgURLs[3]}')`;
    P1SlideShowCaption.innerText = "Bharat Rajbhar & Sunita Devi  (Rekha's family)"
};
P1Family5.onclick = function() {
    P1SlideShow.style.backgroundImage = `url('${imgURLs[4]}')`;;
    P1SlideShowCaption.innerText = "Arjun & Soni Dev (Rekha's family)"
};
P1Family6.onclick = function() {
    P1SlideShow.style.backgroundImage = `url('${imgURLs[5]}')`;
    P1SlideShowCaption.innerText = "Ramji Rajbhar (Rekha's family)"
};
P2Family1.onclick = function() {
    P2SlideShow.style.backgroundImage = `url('${imgURLs[2]}')`;
    P2SlideShowCaption.innerText = "Ramji Rajbhar (Rekha's family)"
};
P2Family2.onclick = function() {
    P2SlideShow.style.backgroundImage = `url('${imgURLs[3]}')`;
    P2SlideShowCaption.innerText = "asdfasdfasdf"
};
P2Family3.onclick = function() {
    P2SlideShow.style.backgroundImage = `url('${imgURLs[4]}')`;
    P2SlideShowCaption.innerText = "asdfasdfasdfasdf"
};