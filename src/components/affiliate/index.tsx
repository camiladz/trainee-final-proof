import { useAffiliateLevels } from "../../hooks"
import { AffiliateCard } from "./affiliate-card"
import "./styles.css"
import { NewAffiliateLevel } from "./new-affiliate-level"
import { orders } from '../../mocks/orders'
import { calculateCommissionByOrder } from "../../helpers/commission"
import { ORDER_ITEMS_TOTAL_ID } from "../../constants"

export const AffiliatesContent = () => {
    const { affiliateLevels } = useAffiliateLevels()    

    const calculateCommissionsByOrders = () => {
        const commissionsByOrders = orders.reduce((prev, order) => {
            const orderCommissions = calculateCommissionByOrder(order, affiliateLevels)
            const orderItemsTotal = order.totals.find(({ id }) => id === ORDER_ITEMS_TOTAL_ID)!.value

            return {
                ...prev,
                [order.id]: {
                    itemsTotal: orderItemsTotal,
                    commissions: orderCommissions
                }
            }
        }, {})

        console.log('################# COMISSÕES CALCULADAS #################')
        console.log(commissionsByOrders)
        console.log('########################################################')
    }
    
    return (
        <div className="comission__content">
            <div className="multilevel__title">
                <span className="multilevel__text">
                    Multinível
                </span>
                <span className="multilevel__text-subtitle">
                    Configure os níveis de comissão para continuar
                </span>
            </div>
            <div className="affiliateCardContent">
                <div className="multilevel__info">
                    <span>
                        Primeiro, defina a validade das comissões multinível
                    </span>

                    <div className="flex">
                        <select name="meses" id="">
                            <option value="1">1 mês</option>
                            <option value="2">2 meses</option>
                            <option value="3">3 meses</option>
                            <option value="4">4 meses</option>
                            <option value="5">5 meses</option>
                            <option value="6">6 meses</option>
                            <option value="7">7 meses</option>
                            <option value="8">8 meses</option>
                            <option value="9">9 meses</option>
                            <option value="10">10 meses</option>
                            <option value="11">11 meses</option>
                            <option value="12">12 meses</option>
                            <option value="13">13 meses</option>
                            <option value="14">14 meses</option>
                            <option value="15">15 meses</option>
                            <option value="16">16 meses</option>
                            <option value="17">17 meses</option>
                            <option value="18">18 meses</option>
                        </select>

                        <span className="divider"></span>

                        <button className="calculate__commission" onClick={calculateCommissionsByOrders}>
                            Calcular comissões dos pedidos
                        </button>
                    </div>
                    <span>
                        Defina as comissões por nível de indicação
                    </span>
                </div>

                {affiliateLevels.map(({level, commission}) => (
                    <AffiliateCard level={level} commission={commission} />
                ))}

                <NewAffiliateLevel lastLevel={affiliateLevels.length} />

                <div className="commissionLevel__information">
                    <span className="about__commissions">
                        Saiba mais sobre os níveis de comissões
                    </span>
                    <button className="finalize_configuration">
                        Finalizar configuração
                    </button>
                </div>
            </div>
        </div>
    )
}