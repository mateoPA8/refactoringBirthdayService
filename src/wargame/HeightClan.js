import Clan from "./Clan"
//import Warrior from "./Warrior"

class HeightClan extends Clan {
    constructor() {
        super()
    }

    join(candidate){
        return candidate.currentHeight() >= 180
    }
}

export default HeightClan