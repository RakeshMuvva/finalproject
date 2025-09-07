// Demo button hover glow
const demoBtn = document.querySelector('.demo-btn');

demoBtn.addEventListener('mouseenter', () => {
  demoBtn.style.boxShadow = '0 0 40px rgba(255,64,129,0.8)';
  demoBtn.style.transform = 'scale(1.2) rotate(-3deg)';
});

demoBtn.addEventListener('mouseleave', () => {
  demoBtn.style.boxShadow = '0 5px 20px rgba(0,0,0,0.2)';
  demoBtn.style.transform = 'scale(1) rotate(0deg)';
});

// Hero gradient animation
const heroText = document.querySelector('.hero-demo h1');
let hue = 0;
setInterval(() => {
  hue = (hue + 1) % 360;
  heroText.style.background = `linear-gradient(45deg,hsl(${hue},80%,60%),hsl(${(hue+60)%360},80%,60%))`;
  heroText.style.webkitBackgroundClip = "text";
  heroText.style.webkitTextFillColor = "transparent";
}, 120);
