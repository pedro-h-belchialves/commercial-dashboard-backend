import { SellerDTO } from "./SellerDTO";

export interface SellerContract {
  getSellerByName: (name: string) => Promise<SellerDTO | null>
  getSellerById: (id: string) => Promise<SellerDTO | null>
  createSeller: (seller: SellerDTO) => Promise<SellerDTO | null> 
  deleteSeller: (sellerId: string) => Promise<void>
  getAllSellers: () => Promise<SellerDTO[] | null>
}