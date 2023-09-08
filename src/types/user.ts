import { Category } from './category'

export interface User {
  id: number
  email?: string
  nickname?: string
  name?: string
  surname?: string
  categories?: Category[]
  category?: Category
  points?: {
    [K in Category]?: number
  }
  phonenum?: string
  studentCard?: string | File
}
