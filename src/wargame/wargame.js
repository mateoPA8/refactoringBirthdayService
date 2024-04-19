import Warrior from "./Warrior"

function battle(a, b) {
    return a.currentPower() > b.currentPower() ? 1 : 2
}


export default battle
