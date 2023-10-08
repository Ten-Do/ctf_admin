'use server'

import { UserService } from '@/services/userService'

export const $rejectUserRegistration = async (email: string, comment: string): Promise<string> => {
  return await UserService.rejectRegistration(email, comment)
    .then((res) => res.data.message)
    .catch((err) => err.message?.text || err.message)
}
