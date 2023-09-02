import { User } from '@/types/user'
import $api from '@/http/api'
import { API_ENDPOINTS } from '../http/endPoint'
import { Category } from '@/types/category'
import { category } from '@/utils/arrays/category'

export class UserService {
  static async register(userInfo: User) {
    const userFormData = new FormData()
    userFormData.append('email', userInfo.email!)
    userFormData.append('nickname', userInfo.nickname!)
    userFormData.append('name', userInfo.name!)
    userFormData.append('surname', userInfo.surname!)
    userFormData.append('categories', JSON.stringify(userInfo.categories!))
    userFormData.append('studentCard', userInfo.studentCard!)
    return $api.sendForm(API_ENDPOINTS.register, userFormData)
  }

  static async getOneFull(id: number) {
    return $api
      .get(API_ENDPOINTS.getFullUser(id))
      .then((res) => res.data)
      .then((data) => {
        const user: User = { id: data.id!, points: {}, categories: [] }
        for (const key in data) {
          if (key.endsWith('_score')) {
            user.points[key.replace('_score', '') as Category] = data[key]
          } else if (category.includes(key)) {
            if (data[key]) user.categories.push(key)
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

  static async getCategoryRequests(page: number): Promise<User[]> {
    return await $api.get(API_ENDPOINTS.getNewUsers(page)).then((res) => res.data)
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

  static async getScoreboard(category: Category, page: number = 0): Promise<User[]> {
    return $api.get(API_ENDPOINTS.getScoreboard(category, page)).then((res) => res.data)
  }

  static async getStudentCard() {
    return await $api.download(API_ENDPOINTS.downloadStudentCard)
  }

  static async acceptCategoryRequest(user_id: number, category: Category) {
    return await $api.put(API_ENDPOINTS.acceptAddCategoryToUser(user_id), {
      category,
    })
  }

  static async rejectCategoryRequest(user_id: number, category: Category) {
    return await $api.delete(API_ENDPOINTS.rejectAddCategoryToUser(user_id), {
      category,
    })
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
