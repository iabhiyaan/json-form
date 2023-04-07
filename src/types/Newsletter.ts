import type {Field} from './Fields'
export interface Newsletter {
    id: string
    title: string
    description: string
    fields: Field[]
  }
  