'use server'

import { UserService } from "@/services/userService";
import { User } from '@/types/user';


export const $getNewUsers = async (
    page: number,
): Promise<{nextPage: number, users: User[]}> => {
    return await UserService.getNew(page).catch((err) => err)
}
