'use server'

import { baseHeaders } from '@/http/baseHeaders'
import { API_ENDPOINTS } from '@/http/endPoint'
import { cookies } from 'next/headers'

const API = process.env.SERVER_API || 'http://localhost:5000/api'

export const $refresh = async () => {
  try {
    const refresh = cookies().get('refreshToken')?.value

    if (!refresh) throw 'Пользователь не авторизован!'
    const refreshResponse = await fetch(API + API_ENDPOINTS.refresh, {
      credentials: 'include',
      headers: { ...baseHeaders, Cookie: cookies().toString() },
    })

    if (!refreshResponse.ok) throw 'Пользователь не авторизован!'
    const { refreshToken, accessToken } = await refreshResponse.json()
    cookies().set('refreshToken', refreshToken, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 })
    cookies().set('hash', accessToken, { httpOnly: false, maxAge: 60 * 60 * 1000 })
  } catch (error) {
    throw 'Пользователь не авторизован!'
  }
}
