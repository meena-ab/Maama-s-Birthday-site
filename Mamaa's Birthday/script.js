// Floating hearts (lighter for mobile)
const container = document.querySelector('.hearts-container');

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 4) + "s";

    container.appendChild(heart);

    setTimeout(() => heart.remove(), 7000);
}

// Slower creation = smoother on phones
setInterval(createHeart, 400);

// Typing effect
const text = "My lovely Maama,";
let i = 0;

function type() {
    const el = document.getElementById("typed-text");
    if (!el) return;

    if (i < text.length) {
        el.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 90);
    }
}
type();

// Wish button
function makeWish() {
    alert("Your wish has been sent with love 💙✨");
}

// Surprise
function explodeHearts() {
    document.getElementById("surpriseText").innerText =
        "I LOVE YOU SO MUCH, I HOPE YOU HAVE THE MOST WONDERFUL DAY, AND DAYS COMING";
}