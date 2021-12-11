var btnAdicionar = document.querySelector("#adicionar-paciente");

btnAdicionar.addEventListener("click", function (event) {
  event.preventDefault();

  var form = document.querySelector("#form-adiciona");
  var paciente = obtemInfosPaciente(form);

  var erros = validaPaciente(paciente);
  if (erros.length > 0) {
    exibeMensagensDeErro(erros);
    return;
  }

  adicionaPacienteNaTabela(paciente)

  form.reset();
  var mensagemErro = document.querySelector("#mensagem-erro");
  mensagemErro.innerHTML = "";
});

function obtemInfosPaciente(form) {
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value),
  };

  return paciente;
}

function montaTrPaciente(paciente) {
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

  return pacienteTr;
}

function montaTd(dado, classe) {
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);

  return td;
}

function validaPaciente(paciente) {
  var erros = [];

  if (paciente.nome.length == 0) {
    erros.push("O nome deve ser inserido");
  }

  if (!validaPeso(paciente.peso) || paciente.peso.length == 0) {
    erros.push("Peso Inválido!");
  }

  if (!validaAltura(paciente.altura) || paciente.altura.length == 0) {
    erros.push(" Altura Inválida!");
  }

  if (paciente.gordura.length == 0) {
    erros.push("A gordura deve ser inserido");
  }

  return erros;
}

function exibeMensagensDeErro(erros) {
  var ul = document.querySelector("#mensagem-erro");
  ul.innerHTML = "";

  erros.forEach(function (erro) {
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  });
}

function adicionaPacienteNaTabela(paciente){
  var pacienteTr = montaTrPaciente(paciente);
  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);
}