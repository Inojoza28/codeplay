// Seleciona o header principal
const header = document.querySelector('.main-header');

// Variáveis para acompanhar a posição anterior de rolagem e o estado atual do header
let lastScrollY = window.scrollY;
let isShrunk = false;

// Adiciona o evento de rolagem
window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;

  // Verifica se está no topo da página
  if (currentScrollY === 0) {
    header.classList.remove('shrink'); // Restaura o header ao tamanho completo
    isShrunk = false; // Atualiza o estado
  }

  // Verifica se rolou para baixo e se o header ainda não está encolhido
  else if (currentScrollY > 50 && currentScrollY > lastScrollY && !isShrunk) {
    header.classList.add('shrink'); // Encolhe o header
    isShrunk = true; // Atualiza o estado
  }

  // Verifica se rolou para cima com uma rolagem mínima e o header está encolhido
  else if (currentScrollY < lastScrollY - 20 && isShrunk) {
    header.classList.remove('shrink'); // Restaura o header
    isShrunk = false; // Atualiza o estado
  }

  // Atualiza a posição anterior de rolagem
  lastScrollY = currentScrollY;
});


// JavaScript para alternar o modo dark
document.addEventListener("DOMContentLoaded", function () {
    const toggleSwitch = document.getElementById("color_mode");
    const body = document.body;

    // Verifica o modo salvo no LocalStorage
    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
        toggleSwitch.checked = true;
    }

    // Alterna o modo dark ao clicar no botão
    toggleSwitch.addEventListener("change", function () {
        if (this.checked) {
            body.classList.add("dark-mode");
            localStorage.setItem("dark-mode", "enabled");
        } else {
            body.classList.remove("dark-mode");
            localStorage.setItem("dark-mode", "disabled");
        }
    });
});