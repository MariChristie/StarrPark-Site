const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');
const menuOverlay = document.querySelector('.menu-overlay');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
    menuOverlay.classList.toggle('active');
});

menuOverlay.addEventListener('click', () => {
    hamMenu.classList.remove('active');
    offScreenMenu.classList.remove('active');
    menuOverlay.classList.remove('active');
});

document.querySelectorAll('.off-screen-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamMenu.classList.remove('active');
        offScreenMenu.classList.remove('active');
        menuOverlay.classList.remove('active');
    });
});

const tabs = document.querySelectorAll(".container-filtro a");
const rightArrow = document.querySelector(".container-filtro .right-arrow");
const leftArrow = document.querySelector(".container-filtro .left-arrow");
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

rightArrow.addEventListener("click", () => {
    tabsList.scrollLeft += 200;
    setTimeout(showHideArrows, 100); 
});

leftArrow.addEventListener("click", () => {
    tabsList.scrollLeft -= 200;
    setTimeout(showHideArrows, 100); 
});

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