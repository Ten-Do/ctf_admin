'use server'

import { UserService } from '@/services/userService'
import { Category } from '@/types/category'

export const $rejectCategoryRequest = async (id: number, category: Category): Promise<string> => {
  return await UserService.rejectCategoryRequest(id, category)
    .then((res) => res.data.message)
    .catch((err) => err.message?.text || err.message)
}
