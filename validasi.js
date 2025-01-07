document.getElementById('transaksiForm').addEventListener('submit', function (event) {
    const nama = document.getElementById('nama').value.trim();
    const buku = document.getElementById('buku').value.trim();

    if (!nama || !buku) {
        alert('Semua field harus diisi!');
        event.preventDefault();
    }
});

// validasi.js
document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const nama = document.getElementById('nama').value.trim();
    const email = document.getElementById('email').value.trim();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!nama || !email || !username || !password) {
        alert('Semua kolom harus diisi!');
        return;
    }

    if (!email.includes('@')) {
        alert('Email tidak valid!');
        return;
    }

    alert('Pendaftaran berhasil!');
    // Lakukan tindakan lain, seperti menyimpan data ke server
});