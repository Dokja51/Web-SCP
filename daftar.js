document.addEventListener('DOMContentLoaded', function() {
    var registrationsList = document.getElementById('registrationsList');

    // Ambil email pengguna yang sedang login dari localStorage
    var currentUserEmail = localStorage.getItem('currentUserEmail');

    // Ambil data pendaftaran dari localStorage
    var registrations = JSON.parse(localStorage.getItem('registrations')) || [];

    // Tampilkan daftar pendaftar
    registrations.forEach(function(registration, index) {
        var listItem = document.createElement('li');
        listItem.innerHTML = `
            Nama: <input type="text" value="${registration.name}" class="edit-name" readonly>
            Nama SCP: <input type="text" value="${registration.scpName}" class="edit-scpName" readonly>
        `;

        // Tampilkan fitur edit dan hapus hanya untuk email faathirsiap@gmail.com
        if (currentUserEmail === 'faathirsiap@gmail.com') {
            listItem.innerHTML += `
                <div class="button-container">
                    <button class="edit-button" onclick="editRegistration(${index})">Edit</button>
                    <button class="save-button" onclick="saveChanges(${index})" style="display:none;">Simpan</button>
                    <button class="delete-button" onclick="deleteRegistration(${index})">Hapus</button>
                </div>
            `;
        }

        registrationsList.appendChild(listItem);
    });
});

function editRegistration(index) {
    var listItem = document.getElementById('registrationsList').children[index];
    listItem.querySelector('.edit-name').removeAttribute('readonly');
    listItem.querySelector('.edit-scpName').removeAttribute('readonly');
    listItem.querySelector('.edit-button').style.display = 'none';
    listItem.querySelector('.save-button').style.display = 'inline-block';
}

// Fungsi untuk menyimpan perubahan
function saveChanges(index) {
    var registrations = JSON.parse(localStorage.getItem('registrations')) || [];
    var listItem = document.getElementById('registrationsList').children[index];
    var updatedName = listItem.querySelector('.edit-name').value;
    var updatedScpName = listItem.querySelector('.edit-scpName').value;

    registrations[index] = { ...registrations[index], name: updatedName, scpName: updatedScpName };
    localStorage.setItem('registrations', JSON.stringify(registrations));
    alert('Perubahan berhasil disimpan!');
    location.reload();
}

// Fungsi untuk menghapus pendaftaran
function deleteRegistration(index) {
    var registrations = JSON.parse(localStorage.getItem('registrations')) || [];
    registrations.splice(index, 1);
    localStorage.setItem('registrations', JSON.stringify(registrations));
    location.reload(); // Memuat ulang halaman untuk memperbarui daftar
}
