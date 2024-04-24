class Warrior {
    #power
    #health
    #height
    constructor(initialPower, height) {
        this.#power = initialPower
        this.#health = 100
        this.#height = height
    }

    // Getters
    currentHealth() {
        return this.#health
    }
    currentPower() {
        return this.#power
    }
    currentHeight() {
        return this.#height
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
