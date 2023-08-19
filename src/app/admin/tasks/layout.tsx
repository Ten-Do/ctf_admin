import { TaskForm } from '@/components/client/forms/task'
import { CategoryToggler } from '@/components/server/categoryToggler/categoryToggler'
import { TaskService } from '@/services/taskService'
import { Task } from '@/types/task'

export default async function ADMTasksLayout({ children }: { children: React.ReactNode }) {
  const addTask = async (formData: FormData) => {
    'use server'
    return await TaskService.add(formData as unknown as Task)
      .then((res) => res.data.message)
      .catch((err) => err.message?.text)
  }
  return (
    <>
      <h1>ADMIN TASKS</h1>
      <TaskForm submitHandler={addTask} />
      <CategoryToggler origin='admin/tasks' />
      {children}
    </>
  )
}
