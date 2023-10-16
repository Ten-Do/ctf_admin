import { User } from '@/types/user'
import $api from '@/http/api'
import { API_ENDPOINTS } from '../http/endPoint'
import { Category } from '@/types/category'
import { CATEGORIES } from '@/utils/arrays/category'
import { getServerSession } from 'next-auth'
import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/route'

export class UserService {
  static async register(userInfo: FormData) {
    return $api.sendForm(API_ENDPOINTS.register, userInfo)
  }

  static async login(
    userInfo: FormData,
  ): Promise<{ data: { accessToken: string; refreshToken: string; userInfo: User } }> {
    return $api.sendForm(API_ENDPOINTS.login, userInfo)
  }

  static async getOneFull(id: number) {
    return $api
      .get(API_ENDPOINTS.getFullUser(id))
      .then((res) => res.data)
      .then((data) => {
        const user: User = { id: data.id!, points: [], categories: [] }
        for (const key in data) {
          if (key.endsWith('_score')) {
            user.points?.push([key.replace('_score', '') as Category, data[key]])
          } else if (CATEGORIES.includes(key as Category)) {
            if (data[key]) user.categories?.push(key as Category)
          } else {
            user[key] = data[key]
          }
        }
        return user
      })
  }

  static async getAll(page: number): Promise<{ data: User[]; nextPage: number | null }> {
    return await $api.get(API_ENDPOINTS.getUsers(page)).then((res) => {
      return { data: res.data.users, nextPage: res.data.nextPage }
    })
  }

  static async getNew(page: number): Promise<User[]> {
    return await $api.get(API_ENDPOINTS.getNotActivatedUsers(page)).then((res) => res.data)
  }

  static async getCategoryRequests(page: number): Promise<{ data: User[]; nextPage: number | null }> {
    return await $api
      .get(API_ENDPOINTS.getNewUsers(page))
      .then((res) => ({ data: res.data.users, nextPage: res.data.nextPage }))
  }

  static async verifyRegistration(email: string, description?: string) {
    return await $api.put(API_ENDPOINTS.activation, {
      email,
      description,
    })
  }

  static async rejectRegistration(email: string, description?: string) {
    return await $api.delete(API_ENDPOINTS.activation, {
      email,
      comment: description,
    })
  }

  static async delete(userId: number) {
    return await $api.delete(API_ENDPOINTS.deleteUser(userId))
  }

  static async getUserScores(): Promise<User> {
    return $api.get(API_ENDPOINTS.getUserScore).then(({ data }) => {
      const scores: [[Category, number]] = []
      for (const key in data) {
        if (key.endsWith('_score')) {
          scores.push([key.replace('_score', '') as Category, data[key]])
        }
      }
      return { id: data.id, nickname: data.nickname, points: scores }
    })
  }

  static async getScoreboard(category: Category): Promise<{ nickname: string; id: number; score: number }[]> {
    return $api.get(API_ENDPOINTS.getScoreboard(category)).then((res) => res.data.topUser || [])
  }

  static async acceptCategoryRequest(user_id: number, category: Category) {
    return await $api.put(API_ENDPOINTS.acceptAddCategoryToUser(user_id), {
      category,
    })
  }

  static async rejectCategoryRequest(user_id: number, category: Category) {
    const session = await getServerSession(nextAuthOptions)
    if (session?.user.role === 'admin') {
      return await $api.delete(API_ENDPOINTS.rejectAddCategoryToUser_ADM(user_id, category))
    } else {
      return await $api.delete(API_ENDPOINTS.rejectAddCategoryToUser_MDR(user_id))
    }
  }

  static async update(nickname: string, password: string, delCategories: Category[], addCategories: Category[]) {
    return await $api.put(API_ENDPOINTS.putUser, {
      nickname,
      password,
      delCategories,
      addCategories,
    })
  }

  static async grantRole(id: number, category: Category, role: string) {
    return await $api.put(API_ENDPOINTS.giveRole, {
      id,
      category,
      role,
    })
  }

  static async deleteRole(id: number, category: Category) {
    return await $api.delete(API_ENDPOINTS.deleteCategory(id, category))
  }
}
