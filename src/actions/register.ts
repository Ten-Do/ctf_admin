'use server'

import { UserService } from '@/services/userService'

export const $register = async (newUserData: FormData) => {
  return await UserService.register(newUserData).catch((err) => err.message?.text || err.message)
}
