// Button Hover Glow
const serviceBtns = document.querySelectorAll('.btn');

serviceBtns.forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    btn.style.boxShadow = '0 0 20px rgba(255,64,129,0.8)';
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.boxShadow = 'none';
  });
});

// Card bounce effect on hover
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.05) translateY(-5px)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1) translateY(0)';
  });
});
