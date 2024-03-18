import { DeleteSellerUseCase } from "@main/app/usecases/seller/DeleteSellerUseCase"
import { DeleteSellerController } from "@main/infra/controllers/seller/DeleteSellerController"
import { PrismaSellerRepository } from "@main/infra/repositories/PrismaSellerRepository"

const DeleteSellerFactory = () => {
  const SellerContract = new PrismaSellerRepository()
  const DeleteSeller = new DeleteSellerUseCase(SellerContract)
  return new DeleteSellerController(DeleteSeller)
}

export { DeleteSellerFactory }