'use server'
import { TaskService } from '@/services/taskService'

export const $getAnswer = async (id: number) => {
  return await TaskService.getAnswer(id).catch(err => err.message?.text || err.message)
}
