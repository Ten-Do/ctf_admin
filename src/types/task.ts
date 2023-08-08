import { Category } from './category'
import { Difficulty } from './difficulty'

export interface Task {
  id?: number
  category: Category
  difficulty: Difficulty
  points: number
  title: string
  description: string
  answer?: string
  task_file?: string | File // task? file?.. на сервере надо унифицировать этот момент.
  solution?: string | File // file with task solution
}
