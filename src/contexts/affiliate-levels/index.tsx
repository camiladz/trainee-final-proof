import { ReactNode, createContext } from "react";
import { useLocalStorage } from '../../hooks'
import { AFFILIATE_LEVELS_STORAGE_KEY } from '../../constants'
import { AffiliateLevel } from "../../typings/affiliate";

export type AffiliateLevelsContextType = {
  affiliateLevels: AffiliateLevel[]
  setAffiliateLevels: (affiliateLevels: AffiliateLevel[]) => void
  updateLevelCommission: (level: number, commission: number) => void
}

export const AffiliateLevelsContext = createContext({} as AffiliateLevelsContextType)

type Props = {
  children: ReactNode
}

export const AffiliateLevelsContextProvider = ({ children }: Props) => {
  const [affiliateLevels, setAffiliateLevels] = useLocalStorage<AffiliateLevel[]>(AFFILIATE_LEVELS_STORAGE_KEY, [], true)

  const handleUpdateLevelCommission = (level: number, newCommission: number) => {
    const levelIndex = affiliateLevels.findIndex((affiliateLevel) => affiliateLevel.level === level)
    const updatedLevel: AffiliateLevel = {
        level,
        commission: newCommission
    }

    const updatedAffiliateLevels = [...affiliateLevels]
    updatedAffiliateLevels.splice(levelIndex, 1, updatedLevel)

    setAffiliateLevels(updatedAffiliateLevels)
}

  return (
    <AffiliateLevelsContext.Provider value={{
      affiliateLevels,
      setAffiliateLevels,
      updateLevelCommission: handleUpdateLevelCommission
    }}>
      {children}
    </AffiliateLevelsContext.Provider>
  )
}