import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import { nextAuthOptions } from '../api/auth/[...nextauth]/route'

async function ProfileLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(nextAuthOptions)
  
  if (!session?.user.role) {
    redirect('/logReg/login')
  }
  return <>{children}</>
}
export default ProfileLayout
