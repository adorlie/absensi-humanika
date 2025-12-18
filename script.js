function login() {
    const nama = document.getElementById("nama").value;
    const foto = document.getElementById("foto").files[0];

    if (!foto) {
        alert("Silakan upload foto terlebih dahulu.");
        return;
    }

    const reader = new FileReader();
    reader.onload = function () {
        localStorage.setItem("namaSiswa", nama);
        localStorage.setItem("fotoSiswa", reader.result);
        window.location.href = "index.html";
    };
    reader.readAsDataURL(foto);
}

document.addEventListener("DOMContentLoaded", function () {
    const nama = localStorage.getItem("namaSiswa");
    const foto = localStorage.getItem("fotoSiswa");

    if (nama && foto) {
        document.getElementById("namaSiswa").innerText = "Nama: " + nama;
        document.getElementById("fotoPreview").src = foto;
    }
});

function logout() {
    localStorage.clear();
    window.location.href = "logout.html";
}
