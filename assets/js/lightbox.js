(function(){
  const links = document.querySelectorAll('a[data-lightbox]');
  if(!links.length) return;
  const backdrop = document.createElement('div');
  backdrop.className = 'lightbox-backdrop';
  backdrop.setAttribute('aria-hidden','true');
  const img = document.createElement('img');
  img.alt = '';
  backdrop.appendChild(img);
  backdrop.addEventListener('click', () => backdrop.setAttribute('aria-hidden','true'));
  document.body.appendChild(backdrop);
  links.forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      img.src = a.href;
      backdrop.setAttribute('aria-hidden','false');
    });
  });
  document.addEventListener('keydown', e => {
    if(e.key === 'Escape') backdrop.setAttribute('aria-hidden','true');
  });
})();
