// Example of a simple script to handle button clicks
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('button');

    /*buttons.forEach(button => {
        button.addEventListener('click', function() {
            const link = this.getAttribute('onclick').split("'")[1];
            window.location.href = link;
        });
    }); */
});

var modal = document.getElementById("imageModal");
var modalImg = document.getElementById("modalImage");
var captionText = document.getElementById("caption");
var closeBtn = document.getElementsByClassName("close")[0];

var photos = document.querySelectorAll('.photo');
var currentIndex = 0; // Variabel untuk menyimpan indeks gambar yang sedang ditampilkan

// Menampilkan gambar yang diklik dalam modal
photos.forEach((photo, index) => {
    photo.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
        currentIndex = index; // Menyimpan indeks gambar yang diklik
    }
});

// Fungsi untuk menampilkan gambar berikutnya atau sebelumnya
function showImage(index) {
    if (index < 0) index = photos.length - 1; // Jika index negatif, kembali ke gambar terakhir
    if (index >= photos.length) index = 0; // Jika index melebihi jumlah gambar, kembali ke gambar pertama
    modalImg.src = photos[index].src;
    captionText.innerHTML = photos[index].alt;
    currentIndex = index;
}

// Tombol Close
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Tombol Panah Kiri
document.getElementById("prevBtn").onclick = function() {
    showImage(currentIndex - 1); // Tampilkan gambar sebelumnya
}

// Tombol Panah Kanan
document.getElementById("nextBtn").onclick = function() {
    showImage(currentIndex + 1); // Tampilkan gambar berikutnya
}

// Fungsi untuk tombol keyboard panah kiri dan kanan
window.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft") {
        showImage(currentIndex - 1); // Tampilkan gambar sebelumnya
    } else if (event.key === "ArrowRight") {
        showImage(currentIndex + 1); // Tampilkan gambar berikutnya
    }
});