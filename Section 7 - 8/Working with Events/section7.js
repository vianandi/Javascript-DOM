// Mengambil elemen button dengan menggunakan document.getElementById
const button = document.getElementById("my-button");

// Menambahkan event listener untuk event click pada button
button.addEventListener("click", function() {
    alert("Anda telah mengklik tombol!");
});

// Menambahkan event listener untuk event mouseover pada button
button.addEventListener("mouseover", function() {
    button.style.backgroundColor = "yellow";
});

// Menambahkan event listener untuk event mouseout pada button
button.addEventListener("mouseout", function() {
    button.style.backgroundColor = "";
});