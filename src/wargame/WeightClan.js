import Clan from "./Clan"
//import Warrior from "./Warrior"

class WeightClan extends Clan {
    constructor() {
        super()
    }

    join(candidate){
        return candidate.currentWeight()<= 60
    }
}

export default WeightClan