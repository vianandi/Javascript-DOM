// Mengambil elemen h1 dengan menggunakan document.querySelector
const heading = document.querySelector("h1");

// Mengubah warna teks menjadi biru pada elemen h1
heading.style.color = "blue";

// Mengambil elemen img dengan menggunakan document.getElementById
const image = document.getElementById("my-image");

// Mengubah lebar dan tinggi dari elemen img
image.style.width = "200px";
image.style.height = "150px";

// Mengambil elemen p dengan menggunakan document.querySelector
const paragraphs = document.querySelectorAll("p");

// Mengubah ukuran font menjadi 18px pada semua elemen p
paragraphs.forEach(function(paragraph) {
    paragraph.style.fontSize = "18px";
});