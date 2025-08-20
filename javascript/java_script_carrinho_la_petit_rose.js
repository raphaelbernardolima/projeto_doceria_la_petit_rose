// Recupera os dados do carrinho
const carrinho = JSON.parse(localStorage.getItem('carrinho')) || {};
const carrinhoDiv = document.getElementById('carrinho');
const precos = {
  'Brownie Artesanal': 10.00,
  'Bolo de Pote': 10.00,
  // ...adicione os outros aqui
};

let total = 0;

for (const nome in carrinho) {
  const qtd = carrinho[nome];
  const preco = precos[nome] || 0;
  const subtotal = preco * qtd;
  total += subtotal;

  const item = document.createElement('div');
  item.innerHTML = `
    <p><strong>${nome}</strong> — ${qtd}x R$ ${preco.toFixed(2).replace('.', ',')} = R$ ${subtotal.toFixed(2).replace('.', ',')}</p>
  `;
  carrinhoDiv.appendChild(item);
}

document.getElementById('valor-total').textContent = total.toFixed(2).replace('.', ',');
