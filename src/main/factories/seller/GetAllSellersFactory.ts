import { GetAllSellersUseCase } from "@main/app/usecases/seller/GetAllSellersUseCase"
import { GetAllSellersController } from "@main/infra/controllers/seller/GetAllSellersController"
import { PrismaSellerRepository } from "@main/infra/repositories/PrismaSellerRepository"

const GetAllSellersFactory= () => {
  const SellerContract = new PrismaSellerRepository()
  const getAllSellersUseCase = new GetAllSellersUseCase(SellerContract)
  return new GetAllSellersController(getAllSellersUseCase)
}

export { GetAllSellersFactory }