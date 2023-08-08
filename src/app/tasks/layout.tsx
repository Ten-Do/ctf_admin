import { CategoryToggler } from '@/components/server/categoryToggler/categoryToggler'
import { User } from '@/types/user'
import { getServerSession } from 'next-auth'
import { nextAuthOptions } from '../api/auth/[...nextauth]/route'

export default async function TasksLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(nextAuthOptions)
  const user: User = session?.user?.userInfo
  return (
    <>
      <CategoryToggler categories={user.categories} />
      {children}
    </>
  )
}
