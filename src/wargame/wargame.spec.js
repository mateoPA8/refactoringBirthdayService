import battle from "./wargame"
import Warrior from "./Warrior"

describe("First Fight", () => {

    it("Big  vs. Lil", () => {
        let big = new Warrior(99)
        let lil = new Warrior(2)

        expect(battle(big, lil)).toEqual(1)
    })


})


