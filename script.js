function toggleMenu() {
    const menu = document.getElementById("navLinks");
    menu.classList.toggle("active");
}

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("navLinks").classList.remove("active");
    });
});

function sendMessage(event) {
    event.preventDefault();
    alert("Thank you! Your message has been submitted.");
    event.target.reset();
}

document.getElementById("year").textContent = new Date().getFullYear();
