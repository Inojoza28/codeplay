document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const header = document.querySelector('.main-header');
    let lastScrollY = 0;
  
    // Efeito de hover nos cards com transições suaves
    cards.forEach((card) => {
      card.addEventListener('mouseenter', () => {
        card.classList.add('hovered');
      });
      card.addEventListener('mouseleave', () => {
        card.classList.remove('hovered');
      });
    });
  
    // Cabeçalho dinâmico com transição de opacidade
    window.addEventListener('scroll', () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        header.classList.add('hide');
      } else {
        header.classList.remove('hide');
      }
      lastScrollY = window.scrollY;
    });
  
    // Carregamento Dinâmico de Cards (Exemplo)
    const cardContainer = document.querySelector('.card-container');
    const newCards = [
      {
          title: 'CSS Battle',
          description: 'Desafios de codificação onde você usa CSS para criar imagens incríveis e resolver puzzles.',
          image: 'jogos/cssbattle.png',
          link: 'https://cssbattle.dev',
      },
      {
          title: 'CSS Diner',
          description: 'Pratique seletores CSS enquanto se diverte.',
          image: 'jogos/cssdiner.jpg',
          link: 'https://flukeout.github.io/',
      },
      {
          title: 'SQL Murder Mystery',
          description: 'Resolva um mistério usando suas habilidades em SQL.',
          image: 'jogos/sqlmurdermystery.png', // Coloque o caminho correto para a imagem
          link: 'https://mystery.knightlab.com/',
      },
      {
          title: 'Screeps',
          description: 'Um MMO de programação onde você controla unidades usando JavaScript.',
          image: 'jogos/screeps.png', // Coloque o caminho correto para a imagem
          link: 'https://screeps.com/',
      },
      {
          title: 'Cargo Bot',
          description: 'Um jogo de puzzles onde você programa robôs para organizar caixas.',
          image: 'jogos/cargobot.jpg', // Coloque o caminho correto para a imagem
          link: 'https://i4ds.github.io/CargoBot/?state=1',
      }
  ];
    
    // Função para criar e adicionar novos cards
    newCards.forEach((card) => {
      const cardElement = document.createElement('div');
      cardElement.classList.add('card');
      cardElement.innerHTML = `
        <img src="${card.image}" alt="${card.title}" class="card-image">
        <h2 class="card-title">${card.title}</h2>
        <p class="card-description">${card.description}</p>
        <a href="${card.link}" target="_blank" class="card-button">Jogar Agora</a>
      `;
      cardContainer.appendChild(cardElement);
    });
  
    // Adicionar interatividade aos novos cards
    const addedCards = document.querySelectorAll('.card-container .card:not(.hovered)');
    addedCards.forEach((card) => {
      card.addEventListener('mouseenter', () => {
        card.classList.add('hovered');
      });
      card.addEventListener('mouseleave', () => {
        card.classList.remove('hovered');
      });
    });
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    const responsiveText = document.querySelector('.responsive-text');
    
    // Adiciona a classe "show" para tornar o parágrafo visível com animação
    setTimeout(() => {
      responsiveText.classList.add('show');
    }, 300);  // Atraso para que o parágrafo apareça com animação
  });
  