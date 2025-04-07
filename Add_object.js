const addBox1 = document.getElementById("addBox");
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
    //digunakan untuk menutup drop down
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function addBox() {
    const box2 = document.createElement("div");
    box2.style.width = "100px";
    box2.style.height = "100px";
    box2.style.backgroundColor = "black";
    return box2;
}

addBox1.addEventListener("click", (event) => {
    container.appendChild(addBox());
});
