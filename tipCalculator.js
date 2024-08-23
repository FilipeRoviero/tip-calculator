function calcular() {
  var conta = document.getElementById('conta').value;
  var porcentagem = document.getElementById('porcentagem').value;
  var resultado = document.getElementById('resultado');

  if (conta === '' || porcentagem === '') {
    document.getElementById('resultado').innerHTML = `Por favor, preencha os campos acima.`
    return;
  } 

  conta = parseFloat(conta);
  porcentagem = parseFloat(porcentagem);

  resultado = (conta * porcentagem) / 100;

  document.getElementById('resultado').innerHTML = `Sua gorjeta é de: R$ ${resultado}.`;
}