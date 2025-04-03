
const body = document.body;

function arrows(event) {
    if (!box.contains(event.target)) {
        box.style.outline = "";
        box.innerHTML = "";
    } else {
        box.innerHTML = `<img class="arrow arrow-top" src="arrows_outward_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg" alt="Ikon Panah Kanan"
        style=" width: 15px;height: 15px; position: absolute; top: -25px;left: 40%;transform: rotate(-90deg);">
<img class="arrow arrow-right" src="arrows_outward_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg" alt="Ikon Panah Kanan"
        style=" width: 15px;height: 15px; position: absolute;  top: 40%;right: -39px;transform: translateX(-100%);">
<img class="arrow arrow-bottom" src="arrows_outward_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg" alt="Ikon Panah Kanan"
        style=" width: 15px;height: 15px; position: absolute; bottom: -25px;left: 45%;transform: rotate(-90deg);">
<img class="arrow arrow-left" src="arrows_outward_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg" alt="Ikon Panah Kanan"
        style=" width: 15px;height: 15px; position: absolute;  top: 40%;left: -18px;transform: translateX(-40%);">
<img class="corner corner-top-left" src="arrows_outward_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg" alt="Ikon Panah Kanan"
        style=" width: 15px;height: 15px;position: absolute;top: -21px;left: -19px;transform: rotate(50deg);">
<img class="corner corner-top-right" src="arrows_outward_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg" alt="Ikon Panah Kanan"
        style=" width: 15px;height: 15px;position: absolute;top: -22px;right: -19px;transform: rotate(-50deg);">
<img class="corner corner-bottom-left" src="arrows_outward_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg" alt="Ikon Panah Kanan"
        style=" width: 15px;height: 15px;position: absolute;bottom: -18px;left: -20px;transform: rotate(-50deg);">
<img class="corner corner-bottom-right" src="arrows_outward_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg" alt="Ikon Panah Kanan"
        style=" width: 15px;height: 15px;position: absolute; bottom: -20px;right: -19px;transform: rotate(50deg);">
        `;

        const allimg = document.querySelectorAll("img");

        allimg.forEach((img) => {
            img.addEventListener("mouseover", () => hoverImg(img));
            img.addEventListener("mouseout", () => normalImg(img));
        })
        box.style.outline = "3px dashed gray";


    };
}

function hoverImg(x) {
    x.style.filter = "invert(100%)";
}
function normalImg(x) {
    x.style.filter = "invert(0%)";
}

document.addEventListener("click", (event) => arrows(event));
