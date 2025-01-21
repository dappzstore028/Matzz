// Pilih elemen container
const heartContainer = document.getElementById("heart-container");

// Fungsi untuk membuat hati
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    // Posisi random di layar
    const leftPosition = Math.random() * window.innerWidth;
    heart.style.left = `${leftPosition}px`;

    // Ukuran random
    const size = Math.random() * 20 + 10;
    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;

    // Durasi animasi random
    const duration = Math.random() * 3 + 2;
    heart.style.animationDuration = `${duration}s`;

    // Tambahkan ke container
    heartContainer.appendChild(heart);

    // Hapus elemen hati setelah animasi selesai
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

// Jalankan fungsi createHeart setiap 300ms
setInterval(createHeart, 300);
