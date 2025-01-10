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

// Ambil semua gambar dengan kelas 'photo'
var photos = document.querySelectorAll('.photo');

// Ketika gambar diklik, tampilkan modal
photos.forEach(photo => {
    photo.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src; // Set gambar modal dengan gambar yang diklik
        captionText.innerHTML = this.alt; // Menampilkan teks keterangan gambar
    }
});

// Ketika pengguna menekan tombol close, sembunyikan modal
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Ketika pengguna klik di luar modal, sembunyikan modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}