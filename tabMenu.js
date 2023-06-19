const ulTag = document.getElementsByClassName("ul")[0];
const sliderTag = document.querySelector(".slider");

const tabs = ["home", "services", "about us", "contact us", "login"];

const handleTabChange = (event) => {
    const clickedTabItemId = event.target.id; //the clicked item comes into this function as event's target
    const clickedLiTag = document.getElementById(clickedTabItemId);
    const clickedLiTagWidth = clickedLiTag.offsetWidth;
    const clickedLiTagOffsetLeft = clickedLiTag.offsetLeft;
    sliderTag.style.width = clickedLiTagWidth + "px"; 
    sliderTag.style.transform = `translateX(${clickedLiTagOffsetLeft}px)`; //don't forget to add px
}

for (let i = 0; i < tabs.length; i++) {
    const liTags = document.createElement("li");
    liTags.append(tabs[i].toUpperCase());
    liTags.id = i;
    liTags.addEventListener("click", handleTabChange);
    ulTag.append(liTags);

    if (i === 0 ) {
        sliderTag.style.width = liTags.offsetWidth + "px";
    }
}


