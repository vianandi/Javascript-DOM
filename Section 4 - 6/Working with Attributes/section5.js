// Mengambil elemen h1 dengan menggunakan document.querySelector
const heading = document.querySelector("h1");

// Mengambil nilai dari atribut class pada elemen h1
const classValue = heading.getAttribute("class");
console.log(classValue); // output: "title"

// Menambahkan atribut id dengan nilai "main-title" pada elemen h1
heading.setAttribute("id", "main-title");

// Menghapus atribut class pada elemen h1
heading.removeAttribute("class");

// Mengambil elemen img dengan menggunakan document.getElementById
const image = document.getElementById("my-image");

// Mengambil nilai dari atribut src pada elemen img
const srcValue = image.getAttribute("src");
console.log(srcValue); // output: "gambar.jpg"

// Mengubah nilai dari atribut src pada elemen img
image.setAttribute("src", "gambar-baru.jpg");

// Menambahkan atribut title dengan nilai "Ini adalah gambar baru" pada elemen img
image.setAttribute("title", "Ini adalah gambar baru");