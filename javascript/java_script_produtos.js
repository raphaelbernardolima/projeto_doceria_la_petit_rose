//Código para a funcionalidade de busca de produtos
  // Seleciona os elementos necessários
  const inputBusca = document.getElementById("texto-da-busca");
  const botaoBuscar = document.querySelector(".botao-buscar");
  const cards = document.querySelectorAll(".card-produto");

  // Adiciona o evento de clique no botão de busca
  botaoBuscar.addEventListener("click", function () {
    const termo = inputBusca.value.toLowerCase();
    // Percorre todos os cards de produtos
    // e verifica se o nome do produto contém o termo de busca
    cards.forEach(function (card) {
      const nomeProduto = card.querySelector("h2").textContent.toLowerCase();
      // Verifica se o nome do produto contém o termo de busca
      if (nomeProduto.includes(termo)) {
        card.style.display = "block"; // mostra o card
      } else {
        card.style.display = "none";  // esconde o card
      }
    });
  });
//código para limpar a busca
const botaoLimpar = document.querySelector(".botao-limpar");
botaoLimpar.addEventListener("click", function () {
  inputBusca.value = "";
   cards.forEach(function (card) {
    card.style.display = "block"; // mostra todos os produtos
    });
});

const BotaoComprar = document.querySelectorAll('.botao-comprar');

botoesComprar.forEach(botao => {
  botao.addEventListener('click', () => {
    const nome = botao.parentElement.querySelector('.card-produto').textContent;
    
    // Recupera carrinho já existente ou cria novo
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || {};

    // Adiciona ou atualiza quantidade
    carrinho[nome] = (carrinho[nome] || 0) + 1;

    // Salva no localStorage
    localStorage.setItem('carrinho', JSON.stringify(carrinho));

    // Redireciona pra página do carrinho
    window.location.href = 'carrinho.html';
  });
});
