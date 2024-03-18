import { AuthenticateSellerUseCase } from "@main/app/usecases/seller/AuthenticateSellerUseCase"
import { AuthenticateSellerController } from "@main/infra/controllers/seller/AuthenticateSellerController"
import { PrismaSellerRepository } from "@main/infra/repositories/PrismaSellerRepository"
import { BcryptServices } from "@main/infra/services/bcrypt"
import { jwtServices } from "@main/infra/services/jwt"

const AuthenticateSellerFactory = () => {
  const SellerContract = new PrismaSellerRepository()
  const JwtContract = new jwtServices()
  const BcryptContract = new BcryptServices()
  const AuthenticateSeller = new AuthenticateSellerUseCase(SellerContract, JwtContract, BcryptContract)
  return new AuthenticateSellerController(AuthenticateSeller)
}

export { AuthenticateSellerFactory }