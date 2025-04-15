function calcular() {
  const pontos = parseFloat(document.getElementById("pontos").value);
  const bonus = parseFloat(document.getElementById("bonus").value);
  const limiteBonus = parseFloat(document.getElementById("limiteBonus").value);
  const custoMil = parseFloat(document.getElementById("custoMil").value);

  if (isNaN(pontos) || isNaN(bonus) || isNaN(limiteBonus)) {
    document.getElementById("resultado").innerHTML = "Preencha todos os campos obrigatórios.";
    return;
  }

  const totalBonus = pontos * (bonus / 100);
  const totalRecebido = pontos + totalBonus;
  const maxTransferencia = limiteBonus / (bonus / 100);
  const custoEfetivoMil = custoMil / ((1000 * (1 + bonus / 100)) / 1000);

  document.getElementById("resultado").innerHTML = `
    <strong>Total de pontos recebidos na cia aérea:</strong> ${totalRecebido.toLocaleString()}<br>
    <strong>Limite de pontos que podem ser transferidos sem ultrapassar o bônus:</strong> ${Math.floor(maxTransferencia).toLocaleString()}<br>
    <strong>Custo efetivo por 1.000 pontos na cia aérea (com bônus):</strong> R$ ${custoEfetivoMil.toFixed(2)}
  `;
}