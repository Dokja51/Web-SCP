document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var scpName = document.getElementById('scpName').value;

    // Ambil data pendaftaran yang ada di localStorage
    var registrations = JSON.parse(localStorage.getItem('registrations')) || [];

    // Tambahkan pendaftaran baru ke array
    registrations.push({ name: name, email: email, scpName: scpName });

    // Simpan kembali data pendaftaran ke localStorage
    localStorage.setItem('registrations', JSON.stringify(registrations));

    // Simpan email pengguna yang login ke localStorage
    localStorage.setItem('currentUserEmail', email);

    // Redirect ke halaman daftar
    window.location.href = 'daftar.html';
});
