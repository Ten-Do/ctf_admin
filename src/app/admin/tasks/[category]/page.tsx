import { $getTasks } from '@/actions/getTasks'
import { CardPlaceholder } from '@/components/client/taskCard/cardPlaceholder'
import { Category } from '@/types/category'

export default async function Category({ params: { category } }: { params: { category: Category } }) {

  return (
    <>
      <CardPlaceholder category={category} loadMore={$getTasks} origin='admin/edit/tasks' />
    </>
  )
}
