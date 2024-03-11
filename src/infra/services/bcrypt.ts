import { BcryptContract } from "@main/app/contracts/BcryptContract";
import bcrypt from "bcrypt"

class BcryptServices implements BcryptContract {
  async hash(password: string) {
    return bcrypt.hash(password, 10)
  }

  async compare(password: string, hashedPassword: string) {
    return bcrypt.compare(password, hashedPassword)
  }
}

export { BcryptServices }