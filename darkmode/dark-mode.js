// Seleciona o header principal
const header = document.querySelector('.main-header');

// Variável para acompanhar a posição anterior de rolagem
let lastScrollY = window.scrollY;

// Adiciona o evento de rolagem
window.addEventListener('scroll', () => {
  // Verifica a direção da rolagem
  if (window.scrollY > 50 && window.scrollY > lastScrollY) {
    header.classList.add('shrink'); // Encolhe o header ao rolar para baixo
  } else if (window.scrollY < lastScrollY) {
    header.classList.remove('shrink'); // Restaura o tamanho ao rolar para cima
  }

  // Atualiza a posição anterior de rolagem
  lastScrollY = window.scrollY;
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