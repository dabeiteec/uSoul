let currentSelected;
function glowElement(element)  {  
    currentSelected.classList.remove("choice_shadow");
    element.classList.add("choice_shadow");
    currentSelected = element;
}
window.onload = () => {
    currentSelected=document.querySelector("#web_shadow");
    glowElement(document.querySelector("#web_shadow"));
    for (let child of document.querySelector(".links").children) {
        child.addEventListener("click", () => glowElement(child));
    }
    slidingUserWindow();
};

