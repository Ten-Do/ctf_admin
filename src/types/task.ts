import { Category } from "./category";

export interface Task {
  id?: number,
  category: Category,
  difficulty: 'noob' | 'easy' | 'medium-rare' | 'mastermind' | 'hacker',
  points: number,
  title: string,
  description: string,
  answer?: string,
  task_file?: string | File, // task? file?.. на сервере надо унифицировать этот момент.
  solution?: string | File,  // file with task solution
}