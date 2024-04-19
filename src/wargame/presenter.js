import battle from "./wargame"
import Warrior from "./Warrior"

let big = new Warrior(99)
let lil = new Warrior(2)

const div1 = document.querySelector("#warrior1-div");
const div2 = document.querySelector("#warrior2-div");
const form = document.querySelector("#fight-form");


div1.innerHTML = "<p>" + big.power + "</p>";
div2.innerHTML = "<p>" + lil.power + "</p>";

form.addEventListener("submit", (event) => {
    event.preventDefault();
  
    const winnerdiv = document.querySelector("#winner-div");
  
    winnerdiv.innerHTML = "<h2>Winner is:" + battle(big, lil) + "</h2>";
  });