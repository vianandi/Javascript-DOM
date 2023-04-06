// Mengambil elemen parent dengan menggunakan document.getElementById
const parent = document.getElementById("parent");

// Mengambil elemen h1 di dalam parent dengan menggunakan document.querySelector
const heading = parent.querySelector("h1");

// Mengambil semua elemen p di dalam parent dengan menggunakan document.querySelectorAll
const paragraphs = parent.querySelectorAll("p");

// Looping dan memodifikasi teks pada setiap elemen p
paragraphs.forEach((paragraph, index) => {
    paragraph.textContent = "Paragraf baru " + (index + 1);
});

// Mengambil elemen pertama dari elemen li di dalam parent dengan menggunakan document.querySelector
const firstListItem = parent.querySelector("li");

// Menambahkan kelas baru pada elemen pertama dari elemen li
firstListItem.classList.add("active");