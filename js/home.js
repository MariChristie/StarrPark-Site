const tabs = document.querySelectorAll(".container-filtro a");
const rightArrow = document.querySelector(
    ".container-filtro .right-arrow svg"
);
const tabsList = document.querySelector(".container-filtro ul");

const removeAllActiveClasses = () => {
    tabs.forEach(tab => {
        tab.classList.remove("active");
    });
};

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        removeAllActiveClasses();
        tab.classList.add("active");
    });
});

rightArrow.addEventListener("click", () => {
    tabsList.scrollLeft += 200;

})