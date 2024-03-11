import { randomUUID } from 'crypto'

type SellerProps = {
  name: string,
  image: string,
  password: string,
  permission: number,
  goal: number,
  commission: number
}

export class Seller {
  id: string
  name: string
  image: string
  password: string
  permission: number
  goal: number
  commission: number

  constructor(props: SellerProps) {
    this.id = randomUUID()
    this.name= props.name
    this.image = props.image
    this.password = props.password
    this.permission = props.permission
    this.goal = props.goal
    this.commission = props.commission
  }
}