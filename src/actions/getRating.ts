'use server'

import { UserService } from "@/services/userService";
import { Category } from "@/types/category";
import { User } from '@/types/user';


export const $getRating = async (
    category: Category,
    nextPage: number,
): Promise<User[]> => {
    return await UserService.getScoreboard(category, nextPage).catch((err) => err)
}
