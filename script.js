let ulLists = document.querySelector(".ul-list");

function toggleMenu() {
    let displayStyle = window.getComputedStyle(ulLists).display;

    if (displayStyle === "none") {
        ulLists.style.display = "block";
    } else {
        ulLists.style.display = "none";
    }
}
