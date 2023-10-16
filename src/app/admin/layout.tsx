import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { nextAuthOptions } from '../api/auth/[...nextauth]/route'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const role = await getServerSession(nextAuthOptions)
    .then((session) => session?.user?.role)
    .catch((err) => null)
  if (!(role === 'admin' || role === 'moderator')) {
    redirect('/аdmin')
  }
  return <>{children}</>
}
