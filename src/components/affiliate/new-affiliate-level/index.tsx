import { MAX_AFFILIATE_LEVELS } from "../../../constants"
import { useAffiliateLevels } from "../../../hooks"
import { AffiliateLevel } from "../../../typings/affiliate"
import "./styles.css"

type Props = {
    lastLevel: number
}

export const NewAffiliateLevel = ({ lastLevel }: Props) => {
    const { affiliateLevels, setAffiliateLevels } = useAffiliateLevels()    

    const handleAddNewAffiliateLevel = () => {
        const newAffiliateLevel: AffiliateLevel = {
            level: lastLevel + 1,
            commission: 0
        }
        
        setAffiliateLevels([...affiliateLevels, newAffiliateLevel])
    }
    
    if (lastLevel === MAX_AFFILIATE_LEVELS) {
        return (
            <span>
               Você atingiu o máximo de níveis de comissão
            </span>
        )
    }
    
    return (
        <div>
            <button className="addNewAffiliate" onClick={handleAddNewAffiliateLevel}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.99984 4.16666V15.8333M4.1665 9.99999H15.8332" stroke="#1E1A34" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
                Adicionar novo nível de comissão
            </button>
        </div>
    )
}