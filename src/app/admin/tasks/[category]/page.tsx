import { CardPlaceholder } from '@/components/server/card/cardPlaceholder'
import { TaskService } from '@/services/taskService'
import { Category } from '@/types/category'

export default async function Category({ params: { category } }: { params: { category: Category } }) {
  const data = await TaskService.getAll(category, 1) 
    
  return (
    <>
      <CardPlaceholder data={data.tasks} />
    </>
  )
}
