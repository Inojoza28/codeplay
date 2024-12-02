document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
  
    // Adicionar efeito de hover aos cards
    cards.forEach((card) => {
      card.addEventListener('mouseenter', () => {
        card.classList.add('hovered');
      });
  
      card.addEventListener('mouseleave', () => {
        card.classList.remove('hovered');
      });
    });
  
    // Funcionalidade de scroll suave para o cabeçalho
    const header = document.querySelector('.main-header');
    let lastScrollY = 0;
  
    window.addEventListener('scroll', () => {
      if (window.scrollY > lastScrollY) {
        header.classList.add('hide');
      } else {
        header.classList.remove('hide');
      }
      lastScrollY = window.scrollY;
    });
  });
  