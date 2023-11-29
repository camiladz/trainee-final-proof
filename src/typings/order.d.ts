export type Order = {
  id: string,
  affiliate: string
  value: number,
  totals: OrderTotal[]
}

export type OrderTotal = {
  id: string,
  name: string,
  value: number
}