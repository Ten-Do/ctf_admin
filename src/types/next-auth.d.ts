import nextAuth from 'next-auth'
import { Category } from './category'

declare module 'next-auth' {
  interface Session {
    user: {
      id: number
      name: string
      surname: string
      role: string
      categories: Category[]
    }
  }
}
