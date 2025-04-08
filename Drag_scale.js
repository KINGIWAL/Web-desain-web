// BAGIAN SCALE_BUTTON

let activeObject = null;//untuk bagian active objek yang ingin dirubah propertisnya

const container = document.getElementById("container");//tempat untuk objek yang akan dilakukan oprasi seperti adding,scaling,etc.
//ukuran awal seluruh objek yang akan di tambahkan
let scaleY = 100;
let scaleX = 100;

const box = document.getElementById("box");//sebagai objek sementara yang akan dimanipusai 
//untuk pengambilan nilai yang akan merubah bentuk objek
const scaleXInput = document.getElementById("scaleXInput");
const scaleYInput = document.getElementById("scaleYInput");

//pengambilan nilai yang digunakan untuk perubahan style color objek
const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");

//PERUBAHAN COLOR DENGAN METODE RGB
function applyColor(event) {

    const cred = Math.min(255, Math.max(0, parseFloat(red.value))) || 0;
    const cgreen = Math.min(255, Math.max(0, parseFloat(green.value))) || 0;
    const cblue = Math.min(255, Math.max(0, parseFloat(blue.value))) || 0;
    //untuk perubahan color background objek
    event.target.style.backgroundColor = `rgb(${cred},${cgreen},${cblue})`
}
red.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        applyColor();
    }
});
green.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        applyColor();
    }
});
blue.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        applyColor();
    }
});
//PERUBAHAN SCALE DENGAN TEXT
function applyScale(event) {
    if (activeObject) {
        const InputX = parseFloat(scaleXInput.value) || 1;
        const InputY = parseFloat(scaleYInput.value) || 1;
        scaleX = InputX;
        scaleY = InputY;
        activeObject.style.width = `${scaleX}px`;
        activeObject.style.height = `${scaleY}px`;
    } else {
        alert("Nothing selected!")
    }

}
scaleXInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        applyScale(event);
    }
});
scaleYInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        applyScale(event);
    }
});
container.addEventListener("click", (event) => {
    activeObject;
})
// BAGIAN PEMUNCULAN ARROW 
function arrows(event) {
    const object = event.target;
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
                    scaleY = newHeight;

                    object.style.height = `${scaleY}px`;
                    object.style.top = `${newTop}px`;

                    scaleX = object.offsetWidth;
                    scaleYInput.value = scaleY;
                    scaleXInput.value = scaleX;


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
                    scaleY = newHeight;
                    scaleX = startWidth1

                    object.style.Height = scaleX + "px";

                    scaleXInput.value = scaleX;
                    scaleYInput.value = scaleY;
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
            startHeight1 = object.offsetHeight;
            const startLeft = parseInt(window.getComputedStyle(object).left, 10) || 0;

            document.addEventListener("mousemove", (event) => {
                if (isResizing) {
                    const deltaX = startX1 - event.clientX;

                    const newWidth = startWidth1 + deltaX;
                    const newLeft = startLeft - deltaX;
                    scaleY = startHeight1;
                    scaleX = newWidth;
                    object.style.width = `${scaleX}px`;
                    object.style.left = `${newLeft}px`;
                    scaleXInput.value = scaleX;
                    scaleYInput.value = scaleY;
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
                    scaleX = newWidth;
                    scaleY = startHeight1

                    object.style.width = scaleX + "px";

                    scaleXInput.value = scaleX;
                    scaleYInput.value = scaleY;
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
                scaleX = newWidth;
                scaleY = newHeight;
                object.style.width = scaleX + "px";
                object.style.height = scaleY + "px";
                scaleXInput.value = scaleX;
                scaleYInput.value = scaleY;
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
                    scaleX = newWidth;
                    scaleY = newHeight;

                    object.style.width = scaleX + "px";
                    object.style.height = scaleY + "px";
                    object.style.left = `${newLeft}px`;

                    scaleXInput.value = scaleX;
                    scaleYInput.value = scaleY;
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

                    scaleX = newWidth;
                    scaleY = newHeight;
                    object.style.width = scaleX + "px";
                    object.style.height = scaleY + "px";
                    object.style.left = `${newLeft}px`;
                    object.style.top = `${newTop}px`;
                    scaleXInput.value = scaleX;
                    scaleYInput.value = scaleY;
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

                    scaleX = newWidth;
                    scaleY = newHeight;

                    object.style.width = scaleX + "px";
                    object.style.height = scaleY + "px";
                    object.style.right = `${newRight}px`;
                    object.style.top = `${newTop}px`;

                    scaleXInput.value = scaleX;
                    scaleYInput.value = scaleY;
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
        if (!activeObject.contains(event.target)) {
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
        console.log(activeObject);
    });
}
//BAGIAN HOVER ARROW
function hoverImg(x) {
    x.style.filter = "invert(100%)";
}
function normalImg(x) {
    x.style.filter = "invert(0%)";
}

//BAGIAN NOFOCUS
container.addEventListener("click", (event) => arrows(event));
