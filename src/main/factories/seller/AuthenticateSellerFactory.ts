import { AuthenticateSeller } from "@main/app/usecases/seller/AuthenticateSeller"
import { AuthenticateSellerController } from "@main/infra/controllers/seller/AuthenticateUserController"
import { PrismaSellerRepository } from "@main/infra/repositories/PrismaSellerRepository"
import { BcryptServices } from "@main/infra/services/bcrypt"
import { jwtServices } from "@main/infra/services/jwt"

const AuthenticateSellerFactory = () => {
  const SellerContract = new PrismaSellerRepository()
  const JwtContract = new jwtServices()
  const BcryptContract = new BcryptServices()
  const AuthenticateSellerUseCase = new AuthenticateSeller(SellerContract, JwtContract, BcryptContract)
  return new AuthenticateSellerController(AuthenticateSellerUseCase)
}

export { AuthenticateSellerFactory }