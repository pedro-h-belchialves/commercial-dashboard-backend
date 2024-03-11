import { JwtContract } from "@main/app/contracts/JwtContract";
import 'dotenv/config'
import jwt from 'jsonwebtoken'

class jwtServices implements JwtContract {
  async createToken(id: string) {
    const token = jwt.sign(
      { id },
      process.env.SECRET_KEY ? process.env.SECRET_KEY : 'undefined',
      {
        subject: id,
        expiresIn: "20d"
      }
    )

    return token
  }
}

export { jwtServices }