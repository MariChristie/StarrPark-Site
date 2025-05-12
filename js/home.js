const tabs = document.querySelectorAll(".container-filtro a");
const rightArrow = document.querySelector(".container-filtro .right-arrow");
const leftArrow = document.querySelector (".container-filtro .left-arrow");

const tabsList = document.querySelector(".container-filtro ul");

const removeAllActiveClasses = () => {
    tabs.forEach(tab => {
        tab.classList.remove("active");
    });
};

const showHideArrows = () => {
    const maxScrollLeft = tabsList.scrollWidth - tabsList.clientWidth;

    leftArrow.style.display = tabsList.scrollLeft > 0 ? "flex" : "none";
    rightArrow.style.display = tabsList.scrollLeft < maxScrollLeft ? "flex" : "none";
};

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        removeAllActiveClasses();
        tab.classList.add("active");
    });
});

const manageIcons = () => {
    if (tabsList.scrollLeft >= 20) {
        leftArrowContainer.classList.add("active");
        } else {
            leftArrowContainer.classList.remove("active");
    }

    let maxScrollValue = tabsList.scrollWidth - tabsList.clientWidth - 20;
    console.log("scroll width: ", tabsList.scrollWidth);
    console.log("client width: ", tabsList.clientWidth);

    if (tabsList.scrollLeft >= maxScrollValue) {
        rightArrowContainer.classList.remove("active");
    } else { 
        rightArrowContainer.classList.add("active");
    }
};

rightArrow.addEventListener("click", () => {
    tabsList.scrollLeft += 200;
setTimeout(showHideArrows, 100); 
});

leftArrow.addEventListener("click", () => {
    tabsList.scrollLeft -= 200;
setTimeout(showHideArrows, 100); 
});

tabsList.addEventListener("scroll", manageIcons);
window.addEventListener("load", showHideArrows);       
window.addEventListener("resize", showHideArrows);   

let dragging = false;

const drag = (e) => {
    if (!dragging) return;
    tabsList.classList.add("dragging");
    tabsList.scrollLeft -= e.movementX;
};

tabsList.addEventListener("mousedown", () => {
    dragging = true;
});

tabsList.addEventListener("mousemove", drag);

document.addEventListener("mouseup", () => {
    dragging = false;
    tabsList.classList.remove("dragging");
});