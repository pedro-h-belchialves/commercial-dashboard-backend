import { CreateSellerUseCase } from "@main/app/usecases/seller/CreateSellerUseCase";
import { SellerProps } from "@main/entities/seller";
import { HttpResponse } from "@main/infra/contracts/HttpResponse";

class CreateSellerController {
  constructor(private readonly CreateSellerUseCase: CreateSellerUseCase) {}

  async handle({name, password, image, permission, commission, goal}: SellerProps, adminId: string): Promise<HttpResponse> {
    try {
      const seller = await this.CreateSellerUseCase.execute({name, password, image, permission, commission, goal}, adminId)

      return {
        statusCode: 200,
        body: {
          seller: seller
        }
      }
    } catch(err) {
      return {
        statusCode: 400,
        body: {
          message: (err as Error).message
        }
      }
    }
  }
}

export { CreateSellerController }