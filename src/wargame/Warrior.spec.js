import Warrior from "./Warrior"

describe("Warrior Fights", () => {

    let big, lil

    beforeEach(() => {
        big = new Warrior(99)
        lil = new Warrior(2)
      })

    it("New Warriors start with Health:100", () => {
        expect(big.currentHealth()).toEqual(100)
    })

    it("Big  vs. Lil - First Strike", () => {
        big.attack(lil)
        expect(lil.currentHealth()).toEqual(1)
        expect(lil.isAlive()).toEqual(true)
    })

    it("Big  vs. Lil - Second Strike", () => {
        big.attack(lil)
        expect(lil.isAlive()).toEqual(true)
        big.attack(lil)
        expect(lil.isAlive()).toEqual(false)
    })
})


