document.addEventListener("DOMContentLoaded", () => {
    const contactButton = document.getElementById("contact-btn");

    // Show alert on button click
    contactButton.addEventListener("click", () => {
        alert("Jangan ya dek ya🤣");
    });

    // Dynamic floating particles
    setInterval(() => {
        const particle = document.createElement("span");
        particle.className = "particle";
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.animationDuration = `${Math.random() * 3 + 2}s`;
        document.body.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 5000);
    }, 300);
});
