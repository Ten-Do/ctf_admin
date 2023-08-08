import { CardPlaceholder } from '@/components/server/card/cardPlaceholder'
import $api from '@/http/api'
import { API_ENDPOINTS } from '@/http/endPoint'
import { Category } from '@/types/category'

export default async function Category({ params: { category } }: { params: { category: Category } }) {
  const tasks = await $api.get(API_ENDPOINTS.getTasks(category, 1)).then((res) => res.data.tasks)
  return (
    <>
      <CardPlaceholder data={tasks} />
    </>
  )
}
