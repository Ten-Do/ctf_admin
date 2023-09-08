'use server'
import { TaskService } from '@/services/taskService'

export const $checkAnswer = async (id: number, answer: string) => {
  return await TaskService.checkFlag(id, answer).catch(err => err.message?.text || err.message)
}
