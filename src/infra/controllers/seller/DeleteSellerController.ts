import { DeleteSellerUseCase } from "@main/app/usecases/seller/DeleteSellerUseCase";
import { HttpResponse } from "@main/infra/contracts/HttpResponse";

class DeleteSellerController {
    constructor(private readonly DeleteUserUseCase: DeleteSellerUseCase) {}

    async handle(sellerId: string): Promise<HttpResponse> {
      try {
        await this.DeleteUserUseCase.execute(sellerId)
        return {
          statusCode: 200,
          body: { message: 'Usuário deletado com sucesso!'},
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

export { DeleteSellerController }