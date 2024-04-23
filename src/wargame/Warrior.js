class Warrior {
    #power
    #health
    constructor(initialPower) {
        this.#power = initialPower
        this.#health = 100
    }

    // Getters
    currentHealth() {
        return this.#health
    }
    currentPower() {
        return this.#power
    }
    isAlive(){
        return this.#health >= 0
    }

    // Actions
    attack(opponent){
        opponent.damage(this.#power)
    }

    damage(amount){
        this.#health -= amount
    }
}

export default Warrior
