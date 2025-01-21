document.addEventListener("DOMContentLoaded", () => {
    // Tambahkan efek partikel ke latar belakang
    const createParticle = () => {
        const particle = document.createElement("div");
        particle.className = "particle";
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.animationDuration = `${2 + Math.random() * 3}s`;
        particle.style.opacity = Math.random();
        document.body.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 5000);
    };

    setInterval(createParticle, 300);

    // Tambahkan pesan saat tombol ditekan
    const button = document.querySelector(".btn");
   