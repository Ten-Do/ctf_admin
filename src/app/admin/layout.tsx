import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { nextAuthOptions } from '../api/auth/[...nextauth]/route'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(nextAuthOptions)
  //if (session?.user?.userInfo?.role !== 'admin') redirect('/аdmin')
  return <>{children}</>
}
