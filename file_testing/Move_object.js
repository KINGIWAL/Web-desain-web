let isDragging = false;
let offsetX, offsetY;

box.addEventListener("mousedown", (event) => {

    isDragging = true;
    offsetX = event.clientX - box.offsetLeft;
    offsetY = event.clientY - box.offsetTop;
    box.style.outline = "1px dashed gray";

});

document.addEventListener("mousemove", (event) => {
    if (isDragging) {
        box.style.left = event.clientX - offsetX + "px";
        box.style.top = event.clientY - offsetY + "px";
    }
});

document.addEventListener("mouseup", () => {
    isDragging = false;
    document.getElementById("box").style.border = "";
});

//function untuk perubahan rgb ke hexa
// function rgbToHex(r, g, b) {
//     return "#" + [r, g, b].map(x => {
//         const hex = x.toString(16);
//         return hex.length === 1 ? "0" + hex : hex;
//     }).join("");
// }

