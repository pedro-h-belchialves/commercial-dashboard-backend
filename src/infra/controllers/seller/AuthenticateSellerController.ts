import { AuthenticateSellerUseCase } from "../../../app/usecases/seller/AuthenticateSellerUseCase";
import { HttpResponse } from "../../contracts/HttpResponse";

class AuthenticateSellerController {
  constructor(private readonly authenticateSellerUseCase: AuthenticateSellerUseCase) {}

  async handle(name: string, password: string): Promise<HttpResponse> {
    try {
     const { seller, token } = await this.authenticateSellerUseCase.execute(name, password)
      return {
        statusCode: 200,
        body: {
          seller,
          token
        }
      }
     
    } catch (err) {
      return {
        statusCode: 400,
        body: {
          message: (err as Error).message
        }
      }
    }
  }
}

export { AuthenticateSellerController }