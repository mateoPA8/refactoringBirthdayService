import Clan from "./Clan"
import Warrior from "./Warrior"

class PowerClan extends Clan {
    constructor() {
        super()
    }

    join(candidate){
        return super.join(candidate) 
         && candidate.currentPower() >= 70
    }
}

export default PowerClan
