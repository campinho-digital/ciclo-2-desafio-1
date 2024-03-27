function calcularConta() {
    const numPessoas = parseInt(document.getElementById('numPessoas').value);
    const valorConta = parseFloat(document.getElementById('valorConta').value);
    const metodoPagamento = document.getElementById('metodoPagamento').value;
  
    let totalComDesconto = valorConta;
    if (metodoPagamento === 'pix' || metodoPagamento === 'dinheiro') {
      totalComDesconto *= 0.9; // Aplica desconto de 10% para PIX ou dinheiro
    }
  
    const valorPorPessoa = totalComDesconto / numPessoas;
  
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `
      <h2>Resultado:</h2>
      <p>Total da Conta com Desconto: R$ ${totalComDesconto.toFixed(2)}</p>
      <p>Valor por Pessoa: R$ ${valorPorPessoa.toFixed(2)}</p>
    `;
  }
  