'use server'

import { UserService } from '@/services/userService'
import { User } from '@/types/user'
import { cookies } from 'next/headers'

export const $login = async (newUserData: FormData): Promise<User> => {
  return await UserService.login(newUserData)
    .then(({ data }) => {
      cookies().set('refreshToken', data.refreshToken, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 })
      cookies().set('hash', data.accessToken, { httpOnly: true, maxAge: 60 * 60 * 1000 })
      const cats = []
      for (const cat in data.userInfo.categories) {
        if (data.userInfo.categories[cat]) cats.push(cat)
      }
      data.userInfo.categories = cats
      return data.userInfo
    })
    .catch((err) => {
      throw err.message?.text || err.message
    })
}
