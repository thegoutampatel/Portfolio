const btn = document.getElementById("close");
const pop = document.getElementsByClassName("popup")[0];

btn.addEventListener("click", closepop);

function closepop() {
    pop.style.display = "none";
}