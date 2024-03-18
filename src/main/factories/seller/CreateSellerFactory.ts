import { CreateSellerUseCase } from "@main/app/usecases/seller/CreateSellerUseCase"
import { CreateSellerController } from "@main/infra/controllers/seller/CreateSellerController"
import { PrismaSellerRepository } from "@main/infra/repositories/PrismaSellerRepository"
import { BcryptServices } from "@main/infra/services/bcrypt"

const CreateSellerFactory = () => {
  const SellerRepository = new PrismaSellerRepository()
  const Bcrypt = new BcryptServices()
  const CreateSeller = new CreateSellerUseCase(SellerRepository, Bcrypt)
  return new CreateSellerController(CreateSeller)
}

export { CreateSellerFactory }