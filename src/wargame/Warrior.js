class Warrior {
    #power
    #health
    #color
    #language
    constructor(initialPower, color="none", language="none") {
        this.#power = initialPower
        this.#health = 100
        this.#color = color
        this.#language = language
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
