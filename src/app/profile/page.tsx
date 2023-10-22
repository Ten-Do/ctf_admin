import { getServerSession } from 'next-auth'
import { nextAuthOptions } from '../api/auth/[...nextauth]/route'

export default async function Profile() {
  const session = await getServerSession(nextAuthOptions)
  return (
    <h2>
      <pre>{JSON.stringify(session?.user, null, '  ')}</pre>
    </h2>
  )
}
