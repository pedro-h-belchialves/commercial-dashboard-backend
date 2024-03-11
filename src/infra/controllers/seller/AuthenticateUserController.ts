import { AuthenticateSeller } from "../../../app/usecases/seller/AuthenticateSeller";
import { HttpResponse } from "../../contracts/HttpResponse";

class AuthenticateSellerController {
  constructor(private readonly authenticateSellerUseCase: AuthenticateSeller) {}

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