export const SERVER_PATHS = {
  /* AUTH */
  refresh: '/refresh', // get
  login: '/login', // post
  register: '/registration', // post
  /* TASKS */
  postTask: '/tasks',
  putTask: '/tasks',
  getTask: (id: number | string) => '/tasks/' + id,
  getTasks: (category: string, page: number | string) => '/tasks?category=' + category + '&page=' + page,
  checkTaskFlag: (id: number | string) => '/tasks/' + id, // post
  deleteTask: (id: number | string) => '/tasks/' + id,
  downloadTask: (fileName: string) => 'cyberpolygon-files/tasks/' + fileName, // (download file with task)
  getTaskAnswer: (id: number | string) => '/answer-task/' + id,
  /* USERS */
  getUsers: (page: number | string) => '/users?page=' + page,
  getNotActivatedUsers: (page: number | string) => '/not-users?page=' + page,
  getNewUsers: (page: number | string) => '/new-users?page=' + page,
  getScoreboard: (category: string, page: number | string) => '/scoreboard?category=' + category + '&page=' + page,
  downloadStudentCard: (id: number | string) => '/cyberpolygon-files/students/' + id,
  acceptAddCategoryToUser: (id: number | string, category: string) => '/user/' + id + '?category=' + category, // put
  rejectAddCategoryToUser: (id: number | string, category: string) => '/user/' + id + '?category=' + category, // delete
  putUser: '/user', // path by which the user changes his own data
  deleteUser: (id: number | string) => '/users/' + id,
  giveRole: '/give-role', // put
  deleteCategory: '/user-category/', // deletee [+ id]
  logout: '/logout', // delete
  activation: '/activation', // put | delete
}
