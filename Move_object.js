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
