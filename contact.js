// Contact Buttons Hover Glow
const contactBtns = document.querySelectorAll('.contact-btn');

contactBtns.forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    btn.style.boxShadow = `0 0 25px ${btn.style.backgroundColor || 'rgba(255,64,129,0.7)'}`;
    btn.style.transform = 'scale(1.15) rotate(-2deg)';
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
    btn.style.transform = 'scale(1) rotate(0deg)';
  });
});

// Hero Gradient Animation
const heroText = document.querySelector('.hero-contact h1');
let hue = 0;
setInterval(() => {
  hue = (hue + 1) % 360;
  heroText.style.background = `linear-gradient(45deg,hsl(${hue},80%,60%),hsl(${(hue+60)%360},80%,60%))`;
  heroText.style.webkitBackgroundClip = "text";
  heroText.style.webkitTextFillColor = "transparent";
}, 120);
