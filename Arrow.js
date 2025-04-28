let activeObject = null;

export function arrows(objek) {
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
    let isDragging = false;
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
                isDragging = false;
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
        allimg.forEach((img) => {
            img.remove(); // Hapus setiap elemen gambar
        });

    }
}
//BAGIAN HOVER ARROW
function hoverImg(x) {
    x.style.filter = "invert(100%)";
}
function normalImg(x) {
    x.style.filter = "invert(0%)";
}