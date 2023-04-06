// Mengambil elemen parent dengan menggunakan document.getElementById
const parent = document.getElementById("parent");

// Membuat elemen baru (span)
const newSpan = document.createElement("span");

// Menambahkan teks pada elemen span
newSpan.textContent = " - Baru!";

// Menambahkan elemen span ke elemen h1 di dalam parent
const heading = parent.querySelector("h1");
heading.appendChild(newSpan);

// Mengambil elemen ul di dalam parent
const list = parent.querySelector("ul");

// Membuat elemen baru (li)
const newListItem = document.createElement("li");

// Menambahkan teks pada elemen li
newListItem.textContent = "Item 4";

// Menambahkan elemen li baru ke akhir elemen ul
list.appendChild(newListItem);

// Menghapus elemen kedua dari elemen li di dalam parent
const secondListItem = parent.querySelector("li:nth-child(2)");
list.removeChild(secondListItem);

// Mengganti teks pada elemen pertama dari elemen li di dalam parent
const firstListItem = parent.querySelector("li");
firstListItem.textContent = "Item Pertama";