'use server'

import { TaskService } from '@/services/taskService'

export const $deleteTask = async (id: number): Promise<string> => {
  return await TaskService.delete(id)
    .then((res) => res.data.message)
    .catch((err) => err.message?.text || err.messasge)
}
