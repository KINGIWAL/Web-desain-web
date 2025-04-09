const canvas = document.getElementById("canvas");
const button = document.getElementById("button");
const input = document.getElementById("input");
const div = document.getElementById("div");
const h = document.querySelectorAll(".h");
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
const text = document.getElementById("text");
//navigation
const nav = document.getElementById("nav");
const nav2 = document.getElementById("nav2");

// Dragging functionality
let selectedElement = null;
let activeObject = null;

//yang bagian ini digunakan untuk melakukan perubahan pada properti objek yang sesuai id ketika dilakukan suatu input 
[widthInput, heightInput, backgroundInput, borderRadiusInput, borderWidthInput, borderStyleInput, borderColorInput, fontColorInput, fontSizeInput, marginTopInput, marginBottomInput, marginRightInput, marginLeftInput, paddingTopInput, paddingBottomInput, paddingRightInput, paddingLeftInput, displayInput, zIndexInput, top, bottom, right, left, text].forEach(input => {
    input.addEventListener("input", () => {
        if (selectedElement) {
            if (input.id === "background") selectedElement.style.backgroundColor = input.value;
            if (input.id === "border-color") selectedElement.style.borderColor = input.value;
            if (input.id === "font-color") selectedElement.style.color = input.value;
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
            if (input.id === "text") selectedElement.textContent = input.value;

        }
    });
});

// Set nilai input saat elemen dipilih
//intinya yang bagian ini digunakan untuk menampilakn nilai yang sudah diterapkan pada element yang dipilih
canvas.addEventListener("click", (event) => {
    if (event.target.classList.contains("editable")) {
        selectedElement = event.target;

        const computedStyle = window.getComputedStyle(selectedElement); // Gunakan computedStyle
        //Bagian kompres RGB menjadi Hexa
        let rgbValue1 = computedStyle.backgroundColor;
        let rgbValue2 = computedStyle.borderColor;
        let rgbValue3 = computedStyle.color;
        let [a, b, c] = rgbValue1.match(/\d+/g).map(Number);
        let [d, e, f] = rgbValue2.match(/\d+/g).map(Number);
        let [g, h, i] = rgbValue3.match(/\d+/g).map(Number);
        backgroundInput.value = rgbToHex(a, b, c);
        borderColorInput.value = rgbToHex(d, e, f);
        fontColorInput.value = rgbToHex(g, h, i);
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
        text.value = selectedElement.textContent;
    }
});
//function untuk perubahan rgb ke hexa
function rgbToHex(r, g, b) {
    return "#" + [r, g, b].map(x => {
        const hex = x.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    }).join("");
}



//klo ini digunakan untuk penambahan element baru 
div.addEventListener("click", () => {
    //bagian ini digunakna untuk mengambil data-element yang akan menjadi status tag HTML-nya
    const elementType = div.getAttribute("data-element");
    const newdiv = document.createElement(elementType);
    newdiv.classList.add("editable");
    newdiv.style.width = "100px";
    newdiv.style.height = "50px";
    newdiv.style.backgroundColor = "#ddd";
    newdiv.style.left = "682px";
    newdiv.style.top = "326px";

    // Tambahkan drag interactivity
    newdiv.addEventListener("mousedown", startDrag);
    canvas.appendChild(newdiv);
});

h.forEach(allh => {
    allh.addEventListener("click", () => {
        const elementType = allh.getAttribute("data-element");
        const newh1 = document.createElement(elementType);
        newh1.classList.add("editable");
        newh1.style.width = "100px";
        newh1.style.height = "50px";
        newh1.style.backgroundColor = "white";
        newh1.style.left = "682px";
        newh1.style.top = "326px";
        newh1.textContent = "Isi kata kata ...";

        // Tambahkan drag interactivity
        newh1.addEventListener("mousedown", startDrag);
        canvas.appendChild(newh1);
    })
}
);

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

canvas.addEventListener("click", (event) => {
    if (event.target.classList.contains("editable")) {
        arrows(event.target)
    }
});
function arrows(objek) {
    const object = objek;
    if (activeObject && activeObject !== object) {
        activeObject.style.outline = "";
        activeObject.innerHTML = "";
    }
    arrow(object);
    activeObject = object;

}
function arrow(object) {
    object.innerHTML = `
    <img id="resizeHandle1" class="arrow arrow-top" src="arrows_outward_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg" alt="Ikon Panah Kanan"
    style=" width: 15px;height: 15px; position: absolute; top: -25px;left: 44%;transform: rotate(-90deg);">

<img id="resizeHandle2" class="arrow arrow-right" src="arrows_outward_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg" alt="Ikon Panah Kanan"
    style=" width: 15px;height: 15px; position: absolute;  top: 40%;right: -39px;transform: translateX(-100%);">

<img id="resizeHandle3" class="arrow arrow-bottom" src="arrows_outward_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg" alt="Ikon Panah Kanan"
    style=" width: 15px;height: 15px; position: absolute; bottom: -25px;left: 45%;transform: rotate(-90deg);">

<img id="resizeHandle4" class="arrow arrow-left" src="arrows_outward_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg" alt="Ikon Panah Kanan"
    style=" width: 15px;height: 15px; position: absolute;  top: 40%;left: -18px;transform: translateX(-40%);">

<img id="resizeHandle5" class="corner corner-top-left" src="arrows_outward_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg" alt="Ikon Panah Kanan"
    style=" width: 15px;height: 15px;position: absolute;top: -21px;left: -19px;transform: rotate(50deg);">

<img id="resizeHandle6" class="corner corner-top-right" src="arrows_outward_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg" alt="Ikon Panah Kanan"
    style=" width: 15px;height: 15px;position: absolute;top: -22px;right: -19px;transform: rotate(-50deg);">
    
<img id="resizeHandle7" class="corner corner-bottom-left" src="arrows_outward_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg" alt="Ikon Panah Kanan"
    style=" width: 15px;height: 15px;position: absolute;bottom: -18px;left: -20px;transform: rotate(-50deg);">

<img id="resizeHandle8" class="corner corner-bottom-right" src="arrows_outward_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg" alt="Ikon Panah Kanan"
    style=" width: 15px;height: 15px;position: absolute; bottom: -20px;right: -19px;transform: rotate(50deg);">
    `;

    // BAGIAN VARIABEL UNTUK DRAG_SCALE

    const resizeHandle1 = document.getElementById("resizeHandle1");
    const resizeHandle2 = document.getElementById("resizeHandle2");
    const resizeHandle3 = document.getElementById("resizeHandle3");
    const resizeHandle4 = document.getElementById("resizeHandle4");
    const resizeHandle5 = document.getElementById("resizeHandle5");
    const resizeHandle6 = document.getElementById("resizeHandle6");
    const resizeHandle7 = document.getElementById("resizeHandle7");
    const resizeHandle8 = document.getElementById("resizeHandle8");
    const allimg = document.querySelectorAll("img");
    let isResizing = false;
    let startX1, startY1, startWidth1, startHeight1;

    //BAGIAN DRAG_SCALE VERTICAL KEATAS

    function resizeVerticalTop(button) {
        button.addEventListener("mousedown", (event) => {
            isResizing = true;
            startY1 = event.clientY;
            startHeight1 = object.offsetHeight;
            const startTop = parseInt(window.getComputedStyle(object).top, 10) || 0;

            document.addEventListener("mousemove", (event) => {
                if (isResizing) {
                    const deltaY = startY1 - event.clientY;
                    const newHeight = startHeight1 + deltaY;
                    const newTop = startTop - deltaY;
                    object.style.height = `${newHeight}px`;
                    object.style.top = `${newTop}px`;


                }
            });

            document.addEventListener("mouseup", () => {
                isResizing = false;
            });
            event.preventDefault();
        });
    }
    resizeVerticalTop(resizeHandle1);


    //BAGIAN DRAG_SCALE VERTICAL KEBAWAH

    function resizeVerticalBottom(button) {
        button.addEventListener("mousedown", (event) => {
            isResizing = true;
            startY1 = event.clientY;
            startWidth1 = object.offsetWidth;
            startHeight1 = object.offsetHeight;



            document.addEventListener("mousemove", (event) => {
                if (isResizing) {
                    const newHeight = startHeight1 + (event.clientY - startY1);

                    object.style.Height = newHeight + "px";
                }
            });

            document.addEventListener("mouseup", () => {
                isResizing = false;
            });
            event.preventDefault();
        });
    }
    resizeVerticalBottom(resizeHandle3);

    //BAGIAN DRAG_SCALE HORIZONTAL KEKIRI

    function resizeHorizontalLeft(button) {
        button.addEventListener("mousedown", (event) => {
            isResizing = true;
            startX1 = event.clientX;
            startWidth1 = object.offsetWidth;
            const startLeft = parseInt(window.getComputedStyle(object).left, 10) || 0;

            document.addEventListener("mousemove", (event) => {
                if (isResizing) {
                    const deltaX = startX1 - event.clientX;

                    const newWidth = startWidth1 + deltaX;
                    const newLeft = startLeft - deltaX;
                    object.style.width = `${newWidth}px`;
                    object.style.left = `${newLeft}px`;
                }
            });

            document.addEventListener("mouseup", () => {
                isResizing = false;
            });
            event.preventDefault();
        });
    }
    resizeHorizontalLeft(resizeHandle4);

    // BAGIAN DRAG_SCALE HORIZONTAL KEKANAN

    function resizeHorizontalRight(button) {
        button.addEventListener("mousedown", (event) => {
            isResizing = true;
            startX1 = event.clientX;
            startWidth1 = object.offsetWidth;
            startHeight1 = object.offsetHeight;

            document.addEventListener("mousemove", (event) => {
                if (isResizing) {
                    const newWidth = startWidth1 + (event.clientX - startX1);
                    object.style.width = newWidth + "px";
                }
            });

            document.addEventListener("mouseup", () => {
                isResizing = false;
            });
            event.preventDefault();
        });
    }
    resizeHorizontalRight(resizeHandle2);
    // BAGIAN DRAG_SCALE CORNER

    function bottomRight(button) {
        button.addEventListener("mousedown", (event) => {
            isResizing = true;
            startX1 = event.clientX;
            startY1 = event.clientY;
            startHeight1 = object.offsetHeight;
            startWidth1 = object.offsetWidth;
            event.preventDefault();
        });
        document.addEventListener("mousemove", (event) => {
            if (isResizing) {
                isDragging = false
                const newWidth = startWidth1 + (event.clientX - startX1);
                const newHeight = startHeight1 + (event.clientY - startY1);
                object.style.width = newWidth + "px";
                object.style.height = newHeight + "px";
            }
        });
        document.addEventListener("mouseup", () => {
            isResizing = false;
        });
    }
    bottomRight(resizeHandle8);

    function bottomLeft(button) {
        button.addEventListener("mousedown", (event) => {
            isResizing = true;

            startX1 = event.clientX; startY1 = event.clientY; startHeight1 = object.offsetHeight; startWidth1 = object.offsetWidth; const startLeft = parseInt(window.getComputedStyle(object).left, 10) || 0;
            document.addEventListener("mousemove", (event) => {
                if (isResizing) {
                    const deltaX = startX1 - event.clientX; const deltaY = event.clientY - startY1;
                    const newWidth = startWidth1 + deltaX; const newLeft = startLeft - deltaX; const newHeight = startHeight1 + deltaY;

                    object.style.width = newWidth + "px";
                    object.style.height = newHeight + "px";
                    object.style.left = `${newLeft}px`;
                }
            });

            document.addEventListener("mouseup", () => {
                isResizing = false;
            });
            event.preventDefault();
        });
    }
    bottomLeft(resizeHandle7);


    function topLeft(button) {
        button.addEventListener("mousedown", (event) => {
            isResizing = true;

            startX1 = event.clientX; startY1 = event.clientY; startHeight1 = object.offsetHeight; startWidth1 = object.offsetWidth; const startLeft = parseInt(window.getComputedStyle(object).left, 10) || 0;
            const startTop = parseInt(window.getComputedStyle(object).top, 10) || 0;


            document.addEventListener("mousemove", (event) => {
                if (isResizing) {
                    const deltaX = startX1 - event.clientX; const deltaY = startY1 - event.clientY;
                    const newWidth = startWidth1 + deltaX; const newLeft = startLeft - deltaX; const newHeight = startHeight1 + deltaY; const newTop = startTop - deltaY;

                    object.style.width = newWidth + "px";
                    object.style.height = newHeight + "px";
                    object.style.left = `${newLeft}px`;
                    object.style.top = `${newTop}px`;
                }
            });

            document.addEventListener("mouseup", () => {
                isResizing = false;
            });
            event.preventDefault();
        });
    }
    topLeft(resizeHandle5);

    function topRight(button) {
        button.addEventListener("mousedown", (event) => {
            isResizing = true;

            startX1 = event.clientX; startY1 = event.clientY; startHeight1 = object.offsetHeight; startWidth1 = object.offsetWidth; const startRight = parseInt(window.getComputedStyle(object).right, 10) || 0;
            const startTop = parseInt(window.getComputedStyle(object).top, 10) || 0;


            document.addEventListener("mousemove", (event) => {
                if (isResizing) {
                    const deltaX = event.clientX - startX1; const deltaY = startY1 - event.clientY;
                    const newWidth = startWidth1 + deltaX; const newRight = startRight - deltaX; const newHeight = startHeight1 + deltaY; const newTop = startTop - deltaY;

                    object.style.width = newWidth + "px";
                    object.style.height = newHeight + "px";
                    object.style.right = `${newRight}px`;
                    object.style.top = `${newTop}px`;
                }
            });

            document.addEventListener("mouseup", () => {
                isResizing = false;
            });
            event.preventDefault();
        });
    }
    topRight(resizeHandle6);
    //BAGIAN HOVER ARROW

    allimg.forEach((img) => {
        img.addEventListener("mouseover", () => hoverImg(img));
        img.addEventListener("mouseout", () => normalImg(img));
    })
    object.style.outline = "3px dashed gray";

    document.addEventListener("click", (event) => {
        if (activeObject && !activeObject.contains(event.target)) {
            // Hapus panah dari objek aktif
            activeObject.style.outline = ""; // Hapus outline
            activeObject.innerHTML = ""; // Kosongkan konten
            activeObject = null; // Set objek aktif menjadi null
        } else if (event.target.classList.contains("selectable")) {
            // Jika pengguna mengklik objek yang bisa dipilih
            if (activeObject) {
                // Hapus gaya dari objek sebelumnya
                activeObject.style.outline = "";
                activeObject.innerHTML = "";
            }
            activeObject = event.target; // Tetapkan elemen yang baru dipilih
            activeObject.style.outline = "2px solid blue"; // Tambahkan outline sebagai indikator
        }
    });
    if (activeObject && activeObject !== object) {
        allimg.remove()
    }
}
//BAGIAN HOVER ARROW
function hoverImg(x) {
    x.style.filter = "invert(100%)";
}
function normalImg(x) {
    x.style.filter = "invert(0%)";
}

document.getElementById("exportButton").addEventListener("click", exportProject);
function exportProject() {
    const canvas = document.getElementById("canvas");

    // Ambil semua elemen dalam kanvas
    const elements = canvas.children;
    let htmlContent = ""; // Untuk menyimpan HTML
    let cssContent = ""; // Untuk menyimpan CSS
    if (elements.length === 0) {
        alert("Tidak ada elemen di dalam kanvas!");
        return;
    }

    Array.from(elements).forEach((element, index) => {
        // Generate HTML
        const elementTag = element.tagName.toLowerCase();
        htmlContent += `<${elementTag} class="class-${index}">${element.innerHTML}</${elementTag}>\n`;

        // Generate CSS
        const styles = window.getComputedStyle(element);
        let cssString = `
.class-${index} {
    width: ${styles.width};
    height: ${styles.height};
    background-color: ${styles.backgroundColor};
    color: ${styles.color};
    border: ${styles.borderWidth} ${styles.borderStyle} ${styles.borderColor};
    border-radius: ${styles.borderRadius};
    margin: ${styles.margin};
    padding: ${styles.padding};
    position: ${styles.position};
    left: ${styles.left};
    top: ${styles.top};
    z-index: ${styles.zIndex};
    display: ${styles.display};
    box-shadow: ${styles.boxShadow};
}`;
        cssContent += cssString + "\n";
    });

    // Gabungkan HTML dan CSS dalam file
    downloadFile("project.html", htmlContent);
    downloadFile("styles.css", cssContent);
}

function downloadFile(fileName, content) {
    const blob = new Blob([content], { type: "text/plain" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = fileName;
    a.click();
}

let undoStack = []; // Menyimpan status untuk undo
let redoStack = []; // Menyimpan status untuk redo

// Fungsi untuk menyimpan status elemen
function saveState() {
    const state = canvas.innerHTML; // Simpan HTML kanvas saat ini
    undoStack.push(state); // Tambahkan ke stack undo
    redoStack = []; // Kosongkan redo saat ada perubahan baru
}

// Fungsi Undo
function undo() {
    if (undoStack.length > 0) {
        const lastState = undoStack.pop(); // Ambil status terakhir dari undo
        redoStack.push(canvas.innerHTML); // Simpan status saat ini ke redo
        canvas.innerHTML = lastState; // Kembalikan ke status sebelumnya
    } else {
        alert("Tidak ada aksi untuk di-undo!");
    }
}

// Fungsi Redo
function redo() {
    if (redoStack.length > 0) {
        const nextState = redoStack.pop(); // Ambil status terakhir dari redo
        undoStack.push(canvas.innerHTML); // Simpan status saat ini ke undo
        canvas.innerHTML = nextState; // Terapkan status redo
    } else {
        alert("Tidak ada aksi untuk di-redo!");
    }
}

// Tambahkan event listener untuk tombol undo dan redo
document.getElementById("undoButton").addEventListener("click", undo);
document.getElementById("redoButton").addEventListener("click", redo);

// Contoh: Simpan status setiap kali ada perubahan pada elemen
canvas.addEventListener("click", saveState);
canvas.addEventListener("input", saveState); // Simpan saat ada perubahan input

nav.addEventListener("click", openNav)
nav2.addEventListener("click", openNav2)

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";

}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
function openNav2() {
    document.getElementById("mySidenav2").style.width = "300px";
    document.getElementById("mySidenav2").style.left = "1236px";

}
function closeNav2() {
    document.getElementById("mySidenav2").style.width = "0";
    document.getElementById("mySidenav2").style.left = "1535px";
}