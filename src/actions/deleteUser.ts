'use server'

import { UserService } from '@/services/userService'

export const $deleteUser = async (id: number): Promise<string> => {
  return await UserService.delete(id)
    .then((res) => res.data.message)
    .catch((err) => err.message)
}
