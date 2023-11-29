export type MainAffiliate = {
  id: string
  name: string
  level: number
}

export type IndicatedAffiliate = MainAffiliate & {
  indicatedBy: string
}

export type AffiliateLevel = {
  level: number
  commission: number
}