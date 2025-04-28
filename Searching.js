export function search() {
    // Deklarasi variabel
    var input, filter, ul, li, label, i;
    input = document.getElementById("mySearch"); // Ambil elemen input pencarian
    filter = input.value.toUpperCase(); // Ambil teks pencarian dan ubah ke huruf besar
    ul = document.getElementById("myMenu"); // Ambil elemen <ul>
    li = ul.getElementsByTagName("li"); // Dapatkan semua elemen <li>

    // Iterasi melalui semua elemen <li>
    for (i = 0; i < li.length; i++) {
        // Ambil elemen <label> di dalam setiap <li>
        label = li[i].getElementsByTagName("label")[0];
        if (label) {
            // Periksa apakah teks di dalam <label> cocok dengan teks pencarian
            if (label.innerHTML.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = ""; // Tampilkan elemen jika cocok
            } else {
                li[i].style.display = "none"; // Sembunyikan elemen jika tidak cocok
            }
        }
    }
}