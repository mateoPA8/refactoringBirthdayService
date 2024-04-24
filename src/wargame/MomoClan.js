import Clan from "./Clan"
import Warrior from "./Warrior"

class MomoClan extends Clan {
    constructor() {
        super()
    }

    join(candidate){
        return super.join(candidate) 
         && candidate.color === "black"
         && candidate.language === "momo"
    }
}

export default MomoClan
