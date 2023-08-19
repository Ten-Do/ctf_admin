'use server'

import { TaskService } from '@/services/taskService'
import { Category } from '@/types/category'
import { Task } from '@/types/task'

export const $getTasks = async (
  category: Category,
  nextPage: number,
): Promise<{ tasks: Task[]; nextPage: number | null }> => {
  return await TaskService.getAll(category, nextPage).catch((err) => err)
}
