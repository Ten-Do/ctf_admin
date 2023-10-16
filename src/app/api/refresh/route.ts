import { baseHeaders } from '@/http/baseHeaders'
import { API_ENDPOINTS } from '@/http/endPoint'
import { cookies } from 'next/headers'
import { type NextRequest, NextResponse } from 'next/server'

const API = process.env.SERVER_API || 'http://localhost:5000/api'

export async function GET() {
  // ...your post request logic here
  const refresh = cookies().get('refreshToken')?.value

  if (!refresh) return NextResponse.json({ message: 'Пользователь не авторизован' }, { status: 401 })
  const refreshResponse = await fetch(API + API_ENDPOINTS.refresh, {
    credentials: 'include',
    headers: { ...baseHeaders, Cookie: cookies().toString() },
  })

  if (!refreshResponse.ok) return NextResponse.json({ message: 'Пользователь не авторизован' }, { status: 401 })
  const { refreshToken, accessToken } = await refreshResponse.json()
  // cookies().set('refreshToken', refreshToken, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 })
  // cookies().set('hash', accessToken, { httpOnly: true, maxAge: 60 * 60 * 1000 })

  // Set json response first
  const response = NextResponse.json({}, { status: 201 })

  // Then set a cookie
  response.cookies.set({
    name: 'refreshToken',
    value: refreshToken,
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000,
  })
  response.cookies.set({
    name: 'hash',
    value: accessToken,
    httpOnly: true,
    maxAge: 60 * 60 * 1000,
  })

  return response
}

// export const $refresh = async () => {
//   const refresh = cookies().get('refreshToken')?.value

//   if (!refresh) throw 'Пользователь не авторизован!'
//   const refreshResponse = await fetch(API + API_ENDPOINTS.refresh, {
//     credentials: 'include',
//     headers: { ...baseHeaders, Cookie: cookies().toString() },
//   })

//   if (!refreshResponse.ok) throw 'Пользователь не авторизован!'
//   const { refreshToken, accessToken } = await refreshResponse.json()
//   console.log(refreshToken, accessToken);
//   // cookies().delete()
//   cookies().set('refreshToken', refreshToken, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 })
//   cookies().set('hash', accessToken, { httpOnly: true, maxAge: 60 * 60 * 1000 })
//   console.log('foo is end...');

// }
