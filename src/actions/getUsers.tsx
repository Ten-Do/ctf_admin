'use server'

import { UserService } from '@/services/userService'
import { User } from '@/types/user'

export const $getUsers = async (nextPage: number): Promise<{ data: User[]; nextPage: number | null }> => {
  return await UserService.getAll(nextPage).catch((err) => err)
}
