// Button Hover Glow Effect
const buttons = document.querySelectorAll('.btn');

buttons.forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    btn.style.boxShadow = '0 0 20px rgba(255,64,129,0.8)';
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.boxShadow = 'none';
  });
});

// Card Flip on Hover
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'rotateY(10deg) scale(1.05)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateY(0deg) scale(1)';
  });
});

// Hero Text Gradient Animation
const heroText = document.querySelector('.hero h1');

let hue = 0;
setInterval(() => {
  hue += 1;
  heroText.style.background = `linear-gradient(45deg, hsl(${hue}, 80%, 60%), hsl(${(hue+60)%360}, 80%, 60%))`;
  heroText.style.webkitBackgroundClip = "text";
  heroText.style.webkitTextFillColor = "transparent";
}, 100);
