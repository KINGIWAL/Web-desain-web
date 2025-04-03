const horizontalB = document.getElementById("horizontalB");
const horizontalS = document.getElementById("horizontalS");
const verticalB = document.getElementById("verticalB");
const verticalS = document.getElementById("verticalS");

let scaleY = 100
let scaleX = 100

box.style.width = "" + scaleX + "px";
box.style.height = "" + scaleY + "px";

horizontalB.addEventListener("click", () => {
    scaleX += 10;
    box.style.width = "" + scaleX + "px";
});

horizontalS.addEventListener("click", () => {
    scaleX -= 10;
    box.style.width = "" + scaleX + "px";
});
verticalB.addEventListener("click", () => {
    scaleY += 10;
    box.style.height = "" + scaleY + "px";
});

verticalS.addEventListener("click", () => {
    scaleY -= 10;
    box.style.height = "" + scaleY + "px";
});
