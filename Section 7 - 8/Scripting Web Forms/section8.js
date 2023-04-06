// Mengambil elemen form dengan menggunakan document.querySelector
const form = document.querySelector("form");

// Menambahkan event listener untuk event submit pada form
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah halaman untuk reload setelah submit

    const name = form.elements["name"].value; // Mengambil nilai dari elemen input dengan name "name"
    const email = form.elements["email"].value; // Mengambil nilai dari elemen input dengan name "email"
    const password = form.elements["password"].value; // Mengambil nilai dari elemen input dengan name "password"
    const gender = form.elements["gender"].value; // Mengambil nilai dari elemen select dengan name "gender"
    const message = form.elements["message"].value; // Mengambil nilai dari elemen textarea dengan name "message"

    console.log("Nama: " + name);
    console.log("Email: " + email);
    console.log("Kata sandi: " + password);
    console.log("Jenis kelamin: " + gender);
    console.log("Pesan: " + message);

    alert("Terima kasih telah mengirimkan formulir!"); // Menampilkan pesan kepada user setelah submit
});