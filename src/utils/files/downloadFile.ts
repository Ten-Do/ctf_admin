import { baseHeaders } from '@/http/baseHeaders'
import { API_ENDPOINTS } from '@/http/endPoint'
import { getSession, signOut } from 'next-auth/react'

const API = process.env.SERVER_API || 'http://localhost:5000/api'
const FILE_API = process.env.SERVER_FILES_API || 'http://localhost:5000/cyberpolygon-files'

export const download = async (file_name: string): Promise<Blob | null> => {
  const session = await getSession()
  const accessToken = session?.user?.accessToken
  if (!accessToken) return null
  const config: RequestInit = {
    headers: { ...baseHeaders, Authorization: `Bearer ${accessToken}` },
  }

  // request
  let response = await fetch(FILE_API + file_name, config)

  // response interceptor
  if (!response.ok && response.status === 401) {
    // refresh & request
    const refreshResponse = await fetch(API + API_ENDPOINTS.refresh, { credentials: 'include' })
    config.headers = { ...config.headers, Authorization: `Bearer ${accessToken}` }
    response = await fetch(FILE_API + file_name, config)
  }

  if (!response.ok && response.status === 401) signOut()
  else if (!response.ok) return null
  return await response.blob()
}
