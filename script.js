document.addEventListener("DOMContentLoaded", function () {

    const judulMateri = document.querySelectorAll(".materi-title");

    judulMateri.forEach(function (judul) {

        judul.addEventListener("click", function () {

            const item = this.parentElement;

            item.classList.toggle("active");

        });

    });

});