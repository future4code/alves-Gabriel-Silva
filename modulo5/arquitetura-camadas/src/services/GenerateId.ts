import {v4} from "uuid"

class GenerateId {
    createId = async () =>{
        return v4() as string
    }
}

export default GenerateId