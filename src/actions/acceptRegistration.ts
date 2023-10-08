'use server'

import { UserService } from '@/services/userService'

export const $acceptUserRegistration = async (email: string, comment?: string): Promise<string> => {
  return await UserService.verifyRegistration(email, comment)
    .then((res) => {
      return res.data.message
    })
    .catch((err) => err.message?.text || err.message)
}
