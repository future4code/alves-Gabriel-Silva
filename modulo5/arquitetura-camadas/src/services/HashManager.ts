import bcrypt from 'bcrypt'

class HashManager {
    hash = async(plaintext: string)=>{
        const rounds = Number(process.env.BCRYPT_COST)
        const salt = await bcrypt.genSalt(rounds)
        const hash = await bcrypt.hash(plaintext, salt)

        return hash
    }

    compare =async (plaintex: string, hash: string) => {
        return bcrypt.compare(plaintex, hash)
    }
}

export default HashManager