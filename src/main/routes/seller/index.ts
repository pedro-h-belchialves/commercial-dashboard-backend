import { AuthenticateSellerFactory } from "@main/main/factories/seller/AuthenticateSellerFactory";
import { Request, Response, Router } from "express";

const router = Router()

router.post('/auth', async function (req: Request, res: Response) {
  const controller = AuthenticateSellerFactory()
  const { name, password } = req.body

  const response = await controller.handle(name, password)
  res.status(response.statusCode).json(response.body)
})

export default router