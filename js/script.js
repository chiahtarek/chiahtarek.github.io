const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const themeIcon = document.querySelector('.theme-icon');

function toggleTheme() {
    body.classList.toggle('light-mode');
    const isLightMode = body.classList.contains('light-mode');

    if (isLightMode) {
        themeIcon.className = 'bx bx-moon theme-icon';
        localStorage.setItem('theme', 'light');
    } else {
        themeIcon.className = 'bx bx-sun theme-icon';
        localStorage.setItem('theme', 'dark');
    }
}

function loadSavedTheme() {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        themeIcon.className = 'bx bx-moon theme-icon';
    } else {
        body.classList.remove('light-mode');
        themeIcon.className = 'bx bx-sun theme-icon';
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadSavedTheme);
} else {
    loadSavedTheme();
}

themeToggle.addEventListener("click", toggleTheme);
const textArray = ["Sou estudante de TADS"];
let element = document.querySelector(".typing");
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentText = textArray[textIndex];

    if (!isDeleting) {
        element.textContent = currentText.substring(0, charIndex++);
    } else {
        element.textContent = currentText.substring(0, charIndex--);
    }

    if (charIndex === currentText.length + 1) {
        isDeleting = true;
        setTimeout(typeEffect, 1000); // pausa antes de apagar
        return;
    }

    if (charIndex === 0 && isDeleting) {
        isDeleting = false;
    }

    const speed = isDeleting ? 60 : 100;
    setTimeout(typeEffect, speed);
}

typeEffect();