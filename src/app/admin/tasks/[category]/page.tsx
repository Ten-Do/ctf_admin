import { $getTasks } from '@/actions/getTasks'
import { CardPlaceholder } from '@/components/client/taskCard/cardPlaceholder'
import { TaskService } from '@/services/taskService'
import { Category } from '@/types/category'
import { Task } from '@/types/task'

export default async function Category({ params: { category } }: { params: { category: Category } }) {
  const getTasks = async (
    category: Category,
    nextPage: number,
  ): Promise<{ tasks: Task[]; nextPage: number | null }> => {
    'use server'
    return await TaskService.getAll(category, nextPage).catch((err) => err)
  }
  return (
    <>
      <CardPlaceholder category={category} loadMore={$getTasks} />
    </>
  )
}
