import { SellerDTO } from "@main/app/contracts/SellerDTO";
import { SellerContract } from "../../app/contracts/SellerContract";
import { prisma } from "../../prisma/prisma";

class PrismaSellerRepository implements SellerContract {
  async getSellerByName(name: string) {
    const seller = prisma.seller.findUnique({
      where: {
        name,
      }
    })
    return seller 
  }

  async getSellerById(id: string) {
    const seller = prisma.seller.findUnique({
      where: {
        id
      }
    })
    return seller
  }

  async createSeller(seller: SellerDTO) {
    const newSeller = prisma.seller.create({
      data: {
        id: seller.id,
        name: seller.name,
        commission: seller.commission,
        goal: seller.goal,
        image: seller.image,
        password: seller.password,
        permission: seller.permission,
      }
    })
    return newSeller
  }

  async deleteSeller(sellerId: string) {
    prisma.seller.delete({
      where: {
        id: sellerId
      }
    })
  }

  async getAllSellers() {
   return prisma.seller.findMany()
  }
}

export { PrismaSellerRepository }