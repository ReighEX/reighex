// Example of a simple script to handle button clicks
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const link = this.getAttribute('onclick').split("'")[1];
            window.location.href = link;
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("myModal");
    var img = document.getElementById("myPhoto");
    var modalImg = document.getElementById("img01");
    var span = document.getElementsByClassName("close")[0];

    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
    }

    span.onclick = function() {
        modal.style.display = "none";
    }
});

