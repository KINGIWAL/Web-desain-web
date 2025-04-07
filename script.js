//Tempat semua yang akan dibuat
const canvas = document.getElementById("canvas");
//Seluruh button yang berfungsi untuk melakukan tindakan
const toolbarButtons = document.querySelectorAll(".toolbar button");
//Untuk melakukan perubahan bagi elemen yang dipilih secara real time
const topInput = document.getElementById("top");
const bottomInput = document.getElementById("bottom");
const rightInput = document.getElementById("right");
const leftInput = document.getElementById("left");
const widthInput = document.getElementById("width");
const heightInput = document.getElementById("height");
const backgroundInput = document.getElementById("background");
const borderRadiusInput = document.getElementById("border-radius");
const borderWidthInput = document.getElementById("border-width");
const borderStyleInput = document.getElementById("border-style");
const borderColorInput = document.getElementById("border-color");
const fontColorInput = document.getElementById("font-color");
const fontSizeInput = document.getElementById("font-size");
const marginTopInput = document.getElementById("margin-top");
const marginBottomInput = document.getElementById("margin-bottom");
const marginRightInput = document.getElementById("margin-right");
const marginLeftInput = document.getElementById("margin-left");
const paddingTopInput = document.getElementById("padding-top");
const paddingBottomInput = document.getElementById("padding-bottom");
const paddingRightInput = document.getElementById("padding-right");
const paddingLeftInput = document.getElementById("padding-left");
const displayInput = document.getElementById("display");
const zIndexInput = document.getElementById("z-index");
// Dragging functionality
let selectedElement = null;


//yang bagian ini digunakan untuk melakukan perubahan pada properti objek yang sesuai id ketika dilakukan suatu input 
[widthInput, heightInput, backgroundInput, borderRadiusInput, borderWidthInput, borderStyleInput, borderColorInput, fontColorInput, fontSizeInput, marginTopInput, marginBottomInput, marginRightInput, marginLeftInput, paddingTopInput, paddingBottomInput, paddingRightInput, paddingLeftInput, displayInput, zIndexInput, top, bottom, right, left].forEach(input => {
    input.addEventListener("input", () => {
        if (selectedElement) {
            if (input.id === "background") selectedElement.style.backgroundColor = input.value;
            if (input.id === "border-color") selectedElement.style.borderColor = input.value;
            if (input.id === "font-color") selectedElement.style.fontColor = input.value;
            if (input.id === "width") selectedElement.style.width = `${input.value}px`;
            if (input.id === "height") selectedElement.style.height = `${input.value}px`;
            if (input.id === "border-radius") selectedElement.style.borderRadius = `${input.value}px`;
            if (input.id === "border-width") selectedElement.style.borderWidth = `${input.value}px`;
            if (input.id === "border-style") selectedElement.style.borderStyle = input.value;
            if (input.id === "font-size") selectedElement.style.fontSize = `${input.value}px`;
            if (input.id === "margin-top") selectedElement.style.marginTop = `${input.value}px`;
            if (input.id === "margin-bottom") selectedElement.style.marginBottom = `${input.value}px`;
            if (input.id === "margin-right") selectedElement.style.marginRight = `${input.value}px`;
            if (input.id === "margin-left") selectedElement.style.marginLeft = `${input.value}px`;
            if (input.id === "padding-top") selectedElement.style.paddingTop = `${input.value}px`;
            if (input.id === "padding-bottom") selectedElement.style.paddingBottom = `${input.value}px`;
            if (input.id === "padding-right") selectedElement.style.paddingRight = `${input.value}px`;
            if (input.id === "padding-left") selectedElement.style.paddingLeft = `${input.value}px`;
            if (input.id === "display") selectedElement.style.display = `${input.value}px`;
            if (input.id === "top") selectedElement.style.top = `${input.value}px`;
            if (input.id === "bottom") selectedElement.style.bottom = `${input.value}px`;
            if (input.id === "right") selectedElement.style.right = `${input.value}px`;
            if (input.id === "left") selectedElement.style.left = `${input.value}px`;
            if (input.id === "z-index") selectedElement.style.zIndex = input.value;

        }
    });
});

// Set nilai input saat elemen dipilih
//intinya yang bagian ini digunakan untuk menampilakn nilai yang sudah diterapkan pada element yang dipilih
canvas.addEventListener("click", (event) => {
    if (event.target.classList.contains("editable")) {
        selectedElement = event.target;

        const computedStyle = window.getComputedStyle(selectedElement); // Gunakan computedStyle
        backgroundInput.value = computedStyle.backgroundColor;
        borderColorInput.value = computedStyle.borderColor;
        fontColorInput.value = computedStyle.color;
        displayInput.value = computedStyle.display;
        borderStyleInput.value = computedStyle.borderStyle;
        topInput.value = parseInt(computedStyle.top);
        bottomInput.value = parseInt(computedStyle.bottom);
        rightInput.value = parseInt(computedStyle.right);
        leftInput.value = parseInt(computedStyle.left);
        widthInput.value = parseInt(computedStyle.width) || 100; // Fallback default
        heightInput.value = parseInt(computedStyle.height) || 50;
        borderRadiusInput.value = parseInt(computedStyle.borderRadius) || 0;
        borderWidthInput.value = parseInt(computedStyle.borderWidth) || 0;
        fontSizeInput.value = parseInt(computedStyle.fontSize) || 16;
        marginTopInput.value = parseInt(computedStyle.marginTop) || 0;
        marginBottomInput.value = parseInt(computedStyle.marginBottom) || 0;
        marginRightInput.value = parseInt(computedStyle.marginRight) || 0;
        marginLeftInput.value = parseInt(computedStyle.marginLeft) || 0;
        paddingTopInput.value = parseInt(computedStyle.paddingTop) || 0;
        paddingBottomInput.value = parseInt(computedStyle.paddingBottom) || 0;
        paddingRightInput.value = parseInt(computedStyle.paddingRight) || 0;
        paddingLeftInput.value = parseInt(computedStyle.paddingLeft) || 0;
        zIndexInput.value = parseInt(computedStyle.zIndex) || 0;
    }
});
//klo yang dibagian ini digunakan untuk pemberian fungsi keseluruh button
toolbarButtons.forEach(button => {
    //klo ini digunakan untuk penambahan element baru 
    button.addEventListener("click", () => {
        //bagian ini digunakna untuk mengambil data-element yang akan menjadi status tag HTML-nya
        const elementType = button.getAttribute("data-element");
        const newElement = document.createElement(elementType);
        newElement.classList.add("editable");
        newElement.style.width = "100px";
        newElement.style.height = "50px";
        newElement.style.backgroundColor = "#ddd";
        newElement.style.left = "50px";
        newElement.style.top = "50px";

        // Tambahkan drag interactivity
        newElement.addEventListener("mousedown", startDrag);
        canvas.appendChild(newElement);
    });
});


function startDrag(event) {
    selectedElement = event.target;
    const offsetX = event.clientX - selectedElement.offsetLeft;
    const offsetY = event.clientY - selectedElement.offsetTop;

    function onMouseMove(e) {
        if (selectedElement) {
            selectedElement.style.left = `${e.clientX - offsetX}px`;
            selectedElement.style.top = `${e.clientY - offsetY}px`;
        }
    }

    function stopDrag() {
        selectedElement = null;
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", stopDrag);
    }

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", stopDrag);
}