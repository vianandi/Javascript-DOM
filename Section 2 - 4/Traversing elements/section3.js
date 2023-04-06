// Mengambil elemen parent
const parent = document.getElementById("parent");

// Mengambil elemen h1 di dalam parent
const heading = parent.getElementsByTagName("h1")[0];

// Mengambil semua elemen p di dalam parent
const paragraphs = parent.getElementsByTagName("p");

// Looping dan memodifikasi teks pada setiap elemen p
for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].textContent = "Paragraf baru " + (i + 1);
}

// Mengambil elemen pertama dari elemen li di dalam parent
const firstListItem = parent.querySelector("li");

// Menambahkan kelas baru pada elemen pertama dari elemen li
firstListItem.classList.add("active");