import { randomUUID } from "crypto"

type SaleProps = {
  sellerId: string,
  value: number,
  month: Date,
  installments: number,
}

export class Sale {
  id: string
  sellerId: string
  value: number
  month: Date
  installments: number

  constructor(props: SaleProps) {
    this.id = randomUUID()
    this.sellerId= props.sellerId
    this.value = props.value
    this.month = props.month
    this.installments = props.installments
  }
}