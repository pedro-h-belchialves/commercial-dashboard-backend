import { BcryptContract } from "@main/app/contracts/BcryptContract";
import { SellerContract } from "@main/app/contracts/SellerContract";
import { Seller, SellerProps } from "@main/entities/seller";
import { compare } from "bcrypt";

class CreateSellerUseCase {
  constructor(
    private readonly SellerContract: SellerContract,
    private readonly BcryptContract: BcryptContract,
  ) { }

  async execute({ name, image, password, commission, goal, permission }: SellerProps, adminId: string) {
    const admin = await this.SellerContract.getSellerById(adminId)
    if(admin && admin.permission < 2) throw new Error('Permissão negada!')

    const nameAlreadyExist = await this.SellerContract.getSellerByName(name)
    if(nameAlreadyExist) throw new Error('Usuário já existe!')

    const hashedPassword = await this.BcryptContract.hash(password)

    const seller = new Seller({
      name: name,
      commission: commission,
      goal: goal,
      image: image,
      password: hashedPassword,
      permission: permission
    })

    return await this.SellerContract.createSeller(seller)

  }
}

export { CreateSellerUseCase }