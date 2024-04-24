import Clan from "./Clan"
import Warrior from "./Warrior"

class RedClan extends Clan {
    constructor() {
        super()
    }

    join(candidate){
        return super.join(candidate) 
         && candidate.color === "red"
    }
}

export default RedClan
