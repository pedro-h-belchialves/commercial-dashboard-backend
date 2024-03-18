import { SellerContract } from "@main/app/contracts/SellerContract";

class GetAllSellersUseCase {
  constructor(private readonly SellerContract: SellerContract) {}

  async execute() {
    return await this.SellerContract.getAllSellers()
  }
}

export { GetAllSellersUseCase }