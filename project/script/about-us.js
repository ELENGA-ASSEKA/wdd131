const year = new Date().getFullYear();
document.getElementById("year").innerHTML = `&copy; ${year}`;
document.getElementById("lastModified").textContent= `lastModification: ${document.lastModified}`;

let functionLink = document.getElementById("showhide");

let swichedSection = document.getElementById("main");

functionLink.addEventListener("click", () => {
    swichedSection.classList.toggle("swiched")
})