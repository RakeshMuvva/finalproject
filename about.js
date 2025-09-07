// Card hover glow
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.boxShadow = '0 0 30px rgba(255,64,129,0.7)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
  });
});

// Hero text gradient animation
const heroText = document.querySelector('.hero-about h1');
let hue = 0;
setInterval(() => {
  hue = (hue + 1) % 360;
  heroText.style.background = `linear-gradient(45deg, hsl(${hue},80%,60%), hsl(${(hue+60)%360},80%,60%))`;
  heroText.style.webkitBackgroundClip = "text";
  heroText.style.webkitTextFillColor = "transparent";
}, 150);
