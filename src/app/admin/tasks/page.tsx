import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/route'
import $api from '@/http/api'
import { getServerSession } from 'next-auth'

export default async function Tasks() {
  let data: any = 'str'
  try {
    data = await $api.get('/tasks')
  } catch (err) {
    data = err
  }
  const session = await getServerSession(nextAuthOptions)
  return (
    <>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <hr />
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </>
  )
}
