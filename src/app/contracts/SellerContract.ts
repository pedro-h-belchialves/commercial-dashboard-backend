import { SellerDTO } from "./SellerDTO";

export interface SellerContract {
  getSellerByName: (name: string) => Promise<SellerDTO | undefined>
}