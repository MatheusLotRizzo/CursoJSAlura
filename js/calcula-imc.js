var titulo = document.querySelector(".titulo");
titulo.textContent = "Matheus Rizzo - Nutrição";

var paciente = document.querySelectorAll(".paciente");

for (var i = 0; i < paciente.length; i++) {
  var peso = paciente[i].querySelector(".info-peso").textContent;
  var altura = paciente[i].querySelector(".info-altura").textContent;
  var imcTela = paciente[i].querySelector(".info-imc");

  var pesoValido = validaPeso(peso);
  var alturaValida = validaAltura(altura);

  if (!pesoValido) {
    pesoValido = false;
    imcTela.textContent = "Peso Inválido";
    paciente[i].classList.add("paciente-invalido");
  }

  if (!alturaValida) {
    alturaValida = false;
    imcTela.textContent = "Altura Inválida";
    paciente[i].classList.add("paciente-invalido");
  }

  if (pesoValido && alturaValida) {
    var imc = calculaImc(peso, altura);
    imcTela.textContent = imc;
  }
}

function calculaImc(peso, altura) {
  var imc = 0;
  imc = peso / (altura * altura);

  return imc.toFixed(2);
}

function validaPeso(peso) {
  if (peso >= 0 && peso <= 1000) {
    return true;
  } else {
    return false;
  }
}

function validaAltura(altura) {
  if (altura >= 0 && altura <= 3.0) {
    return true;
  } else {
    return false;
  }
}
