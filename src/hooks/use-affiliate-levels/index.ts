import { useContext } from "react"

import { AffiliateLevelsContext } from '../../contexts/affiliate-levels'

export const useAffiliateLevels = () => {
  const value = useContext(AffiliateLevelsContext)

  return value
}