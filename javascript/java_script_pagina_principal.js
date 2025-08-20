const btnVoltar = document.getElementById('botaoVoltar');
const btnAvancar = document.getElementById('botaoAvancar');
const carrosselLinha = document.getElementById('carrosselLinha');

let posicaoAtual = 0;
const larguraCard = 330; // 300 de width + 30 de margin/gap
const cardsVisiveis = 3;
const totalCards = carrosselLinha.children.length;
const maxPosicao = larguraCard * (totalCards - cardsVisiveis);

btnAvancar.addEventListener('click', () => {
  if (posicaoAtual < maxPosicao) {
    posicaoAtual += larguraCard;
    atualizarCarrossel();
  }
});

btnVoltar.addEventListener('click', () => {
  if (posicaoAtual > 0) {
    posicaoAtual -= larguraCard;
    atualizarCarrossel();
  }
});

function atualizarCarrossel() {
  carrosselLinha.style.transform = `translateX(-${posicaoAtual}px)`;
  btnVoltar.disabled = posicaoAtual === 0;
  btnAvancar.disabled = posicaoAtual >= maxPosicao;
}
