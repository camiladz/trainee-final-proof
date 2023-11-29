import { Order } from "../../typings/order";
import { ORDER_ITEMS_TOTAL_ID } from "../../constants";
import { affiliate as currentUserMainAffiliate } from "../../mocks/affiliate";
import { indicatedAffiliates } from "../../mocks/indicated-affiliates";
import { CommissionsByOrder } from "../../typings/commission";
import { AffiliateLevel } from "../../typings/affiliate";

export const calculateCommissionByOrder = (order: Order, affiliateLevels: AffiliateLevel[]): CommissionsByOrder => {
  if (!affiliateLevels) throw new Error('No affiliate levels registered')
  
  const orderItemsTotal = order.totals.find(({ id }) => id === ORDER_ITEMS_TOTAL_ID)!.value
  const orderAffiliate = indicatedAffiliates.find(({ id }) => id === order.affiliate)

  if (!orderAffiliate) throw new Error('Indicated Affiliate not found')

  const orderAffiliateCommission = affiliateLevels.find(({ level }) => level === orderAffiliate.level)?.commission
  const roundedMainAffiliateCommission = Number(((orderAffiliateCommission as number / 100) * orderItemsTotal).toFixed()) // TODO: Find a better way to round commissions

  
  const commissions: CommissionsByOrder = {
    mainAffiliate: roundedMainAffiliateCommission,
    indicatedByAffiliate: 0
  }
  
  const indicatedByAffiliate = indicatedAffiliates.find(({ id }) => id === orderAffiliate.indicatedBy)
  if (orderAffiliate.indicatedBy !== currentUserMainAffiliate.id && indicatedByAffiliate) {
    const firstAffiliateLevel = affiliateLevels.find(({ level }) => level === 1)
    if (!firstAffiliateLevel) throw new Error('No level 1 affiliate commission registered')
    
    const n1Commission = firstAffiliateLevel.commission
    const roundedIndicatedByAffiliateCommission = Number(((n1Commission as number / 100) * orderItemsTotal).toFixed()) // TODO: Find a better way to round commissions 

    commissions.indicatedByAffiliate = roundedIndicatedByAffiliateCommission
  }

  return commissions
}