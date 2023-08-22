import { Category } from "./category"

export interface User {
  id: number
  email?: string
  nickname?: string
  name?: string
  surname?: string
  categories?: Category[]
  category?: Category
  studentCard?: string | File
}
