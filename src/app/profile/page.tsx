import { getServerSession } from 'next-auth'
import { nextAuthOptions } from '../api/auth/[...nextauth]/route'

export default async function Profile() {
  const session = await getServerSession(nextAuthOptions)
  return (
    <>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </>
  )
}
