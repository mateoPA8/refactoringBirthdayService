//import carpaccio from "./carpaccio";

const precioInput = document.querySelector("#precio");
const cantidadInput = document.querySelector("#cantidad");
const estadoInput = document.querySelector("#estado");
const form = document.querySelector("#factura-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const precio = Number.parseInt(precioInput.value);
  const cantidad = Number.parseInt(cantidadInput.value);
  const estado = estadoInput.value;

  div.innerHTML = "<p>" + "Resultado aqui" + "</p>";
});
