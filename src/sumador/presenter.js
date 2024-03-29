import sumar from "./sumador";

const primerInput = document.querySelector("#primer-numero");
const segundoInput = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const primerNumero = Number.parseInt(primerInput.value);
  const segundoNumero = Number.parseInt(segundoInput.value);

  div.innerHTML = "<p>" + sumar(primerNumero, segundoNumero) + "</p>";
});
