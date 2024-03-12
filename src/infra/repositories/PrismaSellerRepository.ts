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
}

export { PrismaSellerRepository }