'use client'
import { $refresh } from '@/actions/refresh'
import { baseHeaders } from '@/http/baseHeaders'
import { redirect } from 'next/navigation'
import Cookies from 'js-cookie'

const FILE_API = process.env.SERVER_FILES_API || 'http://localhost:5000/cyberpolygon-files'

export const download = async (file_name: string): Promise<Blob | null> => {
  const accessToken = Cookies.get('hash')

  if (!accessToken) return null
  const config: RequestInit = {
    headers: { ...baseHeaders, Authorization: `Bearer ${accessToken}` },
  }

  // request
  let response = await fetch(FILE_API + file_name, config)

  // response interceptor
  if (!response.ok && response.status === 401) {
    // refresh & request
    response = await $refresh()
      .then(() => {
        config.headers = { ...config.headers, Authorization: `Bearer ${Cookies.get('hash')}` }
        return fetch(FILE_API + file_name, config)
      })
      .catch(() => {
        redirect('/logReg/login')
      })
  }

  if (response.status === 401) redirect('/logReg/login')
  else if (!response.ok) return null

  return await response.blob()
}
