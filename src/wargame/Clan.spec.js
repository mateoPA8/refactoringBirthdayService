import Warrior from "./Warrior"
import Clan from "./Clan"
import PowerClan from "./PowerClan"

describe("Warrior Clans", () => {

    it("Basic Clan allows anyone to join", () => {
        let grok = new Warrior(42)
        let clan = new Clan()
        expect(clan.join(grok)).toBeTruthy()
    })

    it("Power Clan allows only power>=70", () => {
        let grok = new Warrior(77)
        let clan = new PowerClan()
        expect(clan.join(grok)).toBeTruthy()
    })

    
})