import { SellerContract } from "@main/app/contracts/SellerContract";

class DeleteSellerUseCase {
    constructor(

      private readonly SellerContract: SellerContract
      ) {}

    async execute(sellerId: string) {
      const user = await this.SellerContract.getSellerById(sellerId)

      if (!user) throw new Error('Usuário não existe!')

      if (user.permission > 1) throw new Error('Este usuário não pode ser deletado!')
      
      const deleteUser = this.SellerContract.deleteSeller(sellerId)

      return deleteUser

    }
}

export { DeleteSellerUseCase }