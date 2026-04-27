const noButton = document.getElementById("no-button");
const yesButton = document.getElementById("yes-button");

yesButton.addEventListener("mouseover", () => {
    const padding = 80;

    const maxX = window.innerWidth - yesButton.offsetWidth - padding;
    const maxY = window.innerHeight - yesButton.offsetHeight - padding;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    yesButton.style.left = x + "px";
    yesButton.style.top = y + "px";
});

noButton.addEventListener("click", () => {
    noButton.style.backgroundColor = "red";
    noButton.style.opacity = "0";

    setTimeout(() => {
        noButton.style.display = "none";
    }, 500);
});
