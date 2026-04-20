function openLightbox(el) {
  const img = el.querySelector('img');
  if (!img) return;
  document.getElementById('lightbox-img').src = img.dataset.src || img.src;
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
});
