var nomeAnimal = document.getElementById("nomeAnimal");
var data = document.querySelector("#data");
var adicionar = document.querySelector("#adicionar");
var indice = 1;

adicionar.addEventListener("click", (evento) => {
  // evita o envio dos dados
  evento.preventDefault();

  let lista = document.getElementById("lista");

  let linha = document.createElement("tr");

  let celulaNumero = document.createElement("th");
  celulaNumero.innerText = ++indice;

  let celulaNomeDono = document.createElement("td");
  celulaNomeDono.innerText = nomeDono.value;

  let celulaNomeAnimal = document.createElement("td");
  celulaNomeAnimal.innerText = nomeAnimal.value;

  let celulaRaca = document.createElement("td");
  celulaRaca.innerText = raca.value;

  let celulaData = document.createElement("td");
  let dataFormatada = new Date(data.value).toLocaleDateString("pt-br", {
    timeZone: "utc",
  });
  celulaData.innerText = dataFormatada;

  let celulaContato = document.createElement("td");
  celulaContato.innerText = contato.value;

  let celulaAdicionar = document.createElement("td");
  let concluir = document.createElement("input");
  concluir.type = "checkbox";
  concluir.id = "nomeAnimal" + indice;
  celulaAdicionar.appendChild(concluir);

  linha.appendChild(celulaNumero);
  linha.appendChild(celulaNomeDono);
  linha.appendChild(celulaNomeAnimal);
  linha.appendChild(celulaRaca);
  linha.appendChild(celulaData);
  linha.appendChild(celulaContato);
  linha.appendChild(celulaAdicionar);

  lista.appendChild(linha);

  concluir.addEventListener("change", () => {
    let resposta = confirm(`Deseja mesmo concluir o procedimento?`);
    if (confirm) {
      linha.style.backgroundColor = "#88d498";
      linha.style.transition = "3s";
      setTimeout(() => {
        linha.remove();
      }, 3000);
    }
  });
});
