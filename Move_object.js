const box = document.getElementById("box");

let isDragging = false;
let offsetX, offsetY;

box.addEventListener("mousedown", (event) => {
    isDragging = true;
    offsetX = event.clientX - box.offsetLeft;
    offsetY = event.clientY - box.offsetTop;
    box.style.outline = "1px dashed gray";
    document.getElementById("box1").innerHTML = box.offsetLeft;
    document.getElementById("box2").innerHTML = box.offsetTop;
    document.getElementById("box3").innerHTML = event.clientX;
    document.getElementById("box4").innerHTML = event.clientY;
});

document.addEventListener("mousemove", (event) => {
    if (isDragging) {
        box.style.left = event.clientX - offsetX + "px";
        box.style.top = event.clientY - offsetY + "px";
        document.getElementById("box5").innerHTML = event.clientX;
        document.getElementById("box6").innerHTML = event.clientY;
        document.getElementById("box7").innerHTML = box.style.left;
        document.getElementById("box8").innerHTML = box.style.top;
    }
});

document.addEventListener("mouseup", () => {
    isDragging = false;
    document.getElementById("box").style.border = "";
});
