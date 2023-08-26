import { Category } from '@/types/category'
import { Task } from '@/types/task'
import $api from '../http/api'
import { API_ENDPOINTS } from '../http/endPoint'

export class TaskService {
  static async getAll(category: Category, page: number): Promise<{ tasks: Task[]; nextPage: number | null }> {
    return await $api
      .get(API_ENDPOINTS.getTasks(category, page))
      .then((response) => ({ tasks: response.data.tasks, nextPage: response.data.nextPage }))
  }
  /** =>
  tasks: [{ "id": ...,
  "category": "...",
  "difficulty": "...",
  "points": ...,
  "title": "...",
  "description": "..."
   */

  static async getOne(id: number): Promise<Task> {
    return await $api.get(API_ENDPOINTS.getTask(id)).then((response) => {
      // temp variant. when server will changed -> remove if (...) {...}
      if (response.data.file) {
        response.data.task_file = response.data.file
        delete response.data.file
      }
      return response.data
    })
  }
  /** =>
  { "id": ...,
  "category": "...",
  "difficulty": "...",
  "points": ...,
  "title": "...",
  "description": "...",
  "task_file": "(название файла)"}
   */

  static async add(newTask: FormData): Promise<{ status: number; data: { message: string } }> {
    return await $api.sendForm(API_ENDPOINTS.postTask, newTask)
  }

  static async edit(newTask: FormData): Promise<{ status: number; data: { message: string } }> {
    return await $api.sendForm(API_ENDPOINTS.putTask, newTask, 'PUT' )
  }

  static async delete(taskId: number): Promise<{ status: number; data: { message: string } }> {
    return await $api.delete(API_ENDPOINTS.deleteTask(taskId))
  }

  static async checkFlag(taskId: number, answer: string): Promise<{ status: number; data: { message: string } }> {
    return await $api.post(API_ENDPOINTS.checkTaskFlag(taskId), { answer })
  }

  static async downloadTaskFile(taskFileName: string) {
    return await $api.download(API_ENDPOINTS.downloadTask(taskFileName))
  }

  static async getAnswer(taskId: number) {
    return await $api.download(API_ENDPOINTS.getTaskAnswer(taskId))
  }
}
