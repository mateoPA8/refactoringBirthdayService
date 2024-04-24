class Warrior {
    #power
    #health
    #color
    #language
    #height
    #weight
    constructor(initialPower, color="none", language="none", height, weight) {
        this.#power = initialPower
        this.#health = 100
        this.#color = color
        this.#language = language
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
    get color(){
        return this.#color
    }
    get language(){
        return this.#language
    }
    currentHeight() {
        return this.#height
    }
    currentWeight() {
        return this.#weight
    }
    isAlive(){
        return this.#health > 0
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
