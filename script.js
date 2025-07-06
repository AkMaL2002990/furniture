let closer = document.querySelector("#closer");

closer.onclick = () => {
    closer.style.display = "none";
    navbar.classList.remove("active");

}
let navbar = document.querySelector(".navbar");

document.querySelector("#ri-menu-line").onclick = () => {
    closer.style.display = "block";
    navbar.classList.toggle("active");  
}