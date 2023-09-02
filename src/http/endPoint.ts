import { Category } from '@/types/category'

export const API_ENDPOINTS = {
  /* AUTH */
  refresh: '/refresh', // get
  login: '/login', // post
  register: '/registration', // post
  /* TASKS */
  postTask: '/tasks',
  putTask: '/tasks',
  getTask: (id: number) => '/tasks/' + id,
  getFullTask: (id: number) => '/task/' + id,
  getTasks: (category: Category, page: number) => '/tasks?category=' + category + '&page=' + page,
  checkTaskFlag: (id: number) => '/tasks/' + id, // post
  deleteTask: (id: number) => '/tasks/' + id,
  downloadTask: (fileName: string) => 'tasks/' + fileName, // (download file with task)
  getTaskAnswer: (id: number) => '/answer-task/' + id,
  /* USERS */
  getFullUser: (id: number) => '/user/' + id,
  getUsers: (page: number) => '/users?page=' + page,
  getNotActivatedUsers: (page: number) => '/not-users?page=' + page,
  getNewUsers: (page: number) => '/new-users?page=' + page,
  getScoreboard: (category: Category, page: number) => '/scoreboard?category=' + category + '&page=' + page,
  // downloadStudentCard: (id: number) => '/students/' + id,
  downloadStudentCard: '/students/',
  acceptAddCategoryToUser: (id: number) => '/user/' + id, // put
  rejectAddCategoryToUser: (id: number) => '/user/' + id, // delete
  putUser: '/user', // path by which the user changes his own data
  deleteUser: (id: number) => '/users/' + id,
  giveRole: '/give-role', // put
  deleteCategory: (id: number, category: Category) => '/user-category?id=' + id + '&category=' + category, // deletee [+ id]
  logout: '/logout', // delete
  activation: '/activation', // put | delete
}
