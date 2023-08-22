'use server'

import { State } from '@/components/client/endlessFeed/endlessFeedPlaceholder'
import { UserService } from '@/services/userService'

export const $getNewUsers = async (page: number): Promise<State> => {
  return await UserService.getNew(page)
    .then((data) => ({ data: data.users, nextPage: data.nextPage }))
    .catch((err) => err)
}
