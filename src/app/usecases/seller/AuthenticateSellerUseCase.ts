import { BcryptContract } from "../../contracts/BcryptContract";
import { JwtContract } from "../../contracts/JwtContract";
import { SellerContract } from "../../contracts/SellerContract";

class AuthenticateSellerUseCase {
  constructor(
    private readonly SellerContract: SellerContract,
    private readonly JwtContract: JwtContract,
    private readonly BcryptContract: BcryptContract
  ) { }

  async execute(name: string, password: string) {
    const seller = await this.SellerContract.getSellerByName(name)
    if (!seller) throw new Error('Nome ou senha inválidos.')

    const comparedPassword = await this.BcryptContract.compare(password, seller.password)
    if (!comparedPassword) throw new Error('Nome ou senha inválidos.')

    const token = await this.JwtContract.createToken(seller.id)
    if (!token) throw new Error('Erro no token!')

    return { seller, token }
  }
}

export { AuthenticateSellerUseCase }