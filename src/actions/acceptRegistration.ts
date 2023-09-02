'use server'

import { UserService } from '@/services/userService'

export const $acceptUserRegistration = async (id: number, comment?: string): Promise<string> => {
  const user = await UserService.getOneFull(id)
  return await UserService.verifyRegistration(user.email!, comment)
    .then((res) => res.data.message)
    .catch((err) => err.message?.text || err.message)
}
