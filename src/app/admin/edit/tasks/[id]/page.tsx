import { TaskForm } from '@/components/client/forms/task'
import { TaskService } from '@/services/taskService'
import { Task } from '@/types/task'
import Link from 'next/link'

export default async function EditTask({ params: { id } }: { params: { id: number } }) {
  const task: Task = await TaskService.getOne(id)
  const updateTask = async (formData: FormData) => {
    'use server'
    formData.append('id', id as unknown as string)
    return TaskService.edit(formData)
      .then((res) => res.data.message)
      .catch((err) => err.message?.text)
  }

  return (
    <>
      <TaskForm data={task} submitHandler={updateTask} />
      <Link href={id + '/' + task.title.replaceAll(' ', '_')}>Удалить</Link>
    </>
  )
}
