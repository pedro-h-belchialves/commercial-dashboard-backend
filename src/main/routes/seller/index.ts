import { SellerDTO } from "@main/app/contracts/SellerDTO";
import { DeleteSellerController } from "@main/infra/controllers/seller/DeleteSellerController";
import { AuthenticateSellerFactory } from "@main/main/factories/seller/AuthenticateSellerFactory";
import { CreateSellerFactory } from "@main/main/factories/seller/CreateSellerFactory";
import { DeleteSellerFactory } from "@main/main/factories/seller/DeleteSellerFactory";
import { GetAllSellersFactory } from "@main/main/factories/seller/GetAllSellersFactory";
import { verifyToken } from "@main/main/middlewares/jwt";
import { Request, Response, Router } from "express";

const router = Router()

router.post('/auth', async function (req: Request, res: Response) {
  const controller = AuthenticateSellerFactory()
  const { name, password } = req.body

  const response = await controller.handle(name, password)
  res.status(response.statusCode).json(response.body)
})

router.post('/seller/create', verifyToken , async function(req: Request, res: Response) {
  const controller = CreateSellerFactory()

  const { name, permission, commission, goal, image, password } = req.body as SellerDTO

  const response = await controller.handle(
    {
      name, permission, commission, goal, image, password
    },
   // @ts-ignore
    req.seller.id
  )
    return res.status(response.statusCode).json(response.body)
})

router.delete('/seller/delete', verifyToken, async function(req: Request, res: Response) {
    const controller = DeleteSellerFactory()

    const { id } = req.body

    const response = await controller.handle(id)
    res.status(response.statusCode).json(response.body)
})

router.get('/sellers',verifyToken, async function name(req: Request, res: Response) {
  const controller = GetAllSellersFactory()
  const response = await controller.handle()

  return res.status(response.statusCode).json(response.body)
})

export default router