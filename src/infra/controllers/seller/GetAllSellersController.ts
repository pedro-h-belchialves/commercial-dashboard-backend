import { GetAllSellersUseCase } from "@main/app/usecases/seller/GetAllSellersUseCase";
import { HttpResponse } from "@main/infra/contracts/HttpResponse";

class GetAllSellersController {
  constructor(private readonly getAllSellersUseCase: GetAllSellersUseCase) {}

  async handle(): Promise<HttpResponse> {
      const sellers = await this.getAllSellersUseCase.execute()
      try {
        return {
          statusCode: 200,
          body: {
            sellers
          }
        }
      } catch (err) {
        return {
          statusCode: 400,
          body: {
            error: (err as Error).message
          }
        }
      }
  }
}

export { GetAllSellersController }