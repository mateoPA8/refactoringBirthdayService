class Warrior {
    #power
    #health
    #height
    #weight
    constructor(initialPower, height, weight) {
        this.#power = initialPower
        this.#health = 100
        this.#height = height
        this.#weight = weight
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
    currentWeight() {
        return this.#weight
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
