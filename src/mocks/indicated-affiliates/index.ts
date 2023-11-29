import { IndicatedAffiliate } from '../../typings/affiliate'

export const indicatedAffiliates: IndicatedAffiliate[] = [
  {
    id: 'e399b42f-09ca-4d96-be93-bbe39097ae10',
    name: 'Maria',
    level: 1,
    indicatedBy: '0dcd8e99-39cf-4f45-bf45-8694b7dd0ab7'
  },
  {
    id: '8c43304d-1065-4c20-b5c6-d9cb4bcd586b',
    name: 'José',
    level: 2,
    indicatedBy: 'e399b42f-09ca-4d96-be93-bbe39097ae10'
  },
  {
    id: '399d2925-e249-4671-94ca-3e925b24cd20',
    name: 'Ana',
    level: 3,
    indicatedBy: '8c43304d-1065-4c20-b5c6-d9cb4bcd586b'
  },
  {
    id: 'f98e1bc4-e869-48c0-83ee-5a93538a51db',
    name: 'Carlos',
    level: 4,
    indicatedBy: '399d2925-e249-4671-94ca-3e925b24cd20'
  },
  {
    id: '61dbc00e-38b9-4569-aa83-d0c320e2792c',
    name: 'Elis',
    level: 5,
    indicatedBy: 'f98e1bc4-e869-48c0-83ee-5a93538a51db'
  },
]