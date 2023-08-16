import { Category } from './category'
import { Difficulty } from './difficulty'

export interface Task {
  id?: number
  category?: Category
  difficulty?: Difficulty
  points: number
  title: string
  description: string
  answer?: string
  task_file?: string | File | null // task? file?.. на сервере надо унифицировать этот момент.
  solution?: string | File | null // file with task solution
}
