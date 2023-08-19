import { CategoryToggler } from '@/components/server/categoryToggler/categoryToggler'

export default async function TasksLayout({ children }: { children: React.ReactNode }) {

  return (
    <>
      <CategoryToggler origin='tasks' />
      {children}
    </>
  )
}
