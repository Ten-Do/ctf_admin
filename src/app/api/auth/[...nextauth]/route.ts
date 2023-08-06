import $api from '@/http/api'
import { API_ENDPOINTS } from '@/http/endPoint'
import { NextAuthOptions } from 'next-auth'
import NextAuth from 'next-auth/next'
import Credentials from 'next-auth/providers/credentials'
import Yandex from 'next-auth/providers/yandex'

export const nextAuthOptions: NextAuthOptions = {
  providers: [
    Yandex({
      clientId: process.env.YANDEX_CLIENT_ID as string,
      clientSecret: process.env.YANDEX_CLIENT_SECRET as string,
    }),
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'example@mail.ru' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        return await $api
          .post(API_ENDPOINTS.login, credentials)
          .then((res) => res.data || null)
          .catch((err) => null)
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user, account }) {
      if (account?.provider === 'credentials') {
        token.user = user
      }
      return token
    },
    async session({ session, token }) {
      if (token.user) session.user = token.user
      return session
    },
  },
}

const handler = NextAuth(nextAuthOptions)

export { handler as GET, handler as POST }

// const callbacs_params = {
//   SIGNIN_CALLBACK: {
//     user: {
//       accessToken:
//         'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjkxMTgxMDU1LCJleHAiOjE2OTExODQ2NTV9.zhzC7R0v-tGjoUzZ7IhoqQ334GeylEztcDlyv0CLw8w',
//       userInfo: {
//         id: 1,
//         name: '77220fb30fc5b7fa9bdf1bb26a0a3a69:579dd931eba61ddc',
//         surname: '77220fb30fc5b7fa9bdf1bb26a0a3a69:579dd931eba61ddc',
//         role: 'admin',
//         categories: [Object],
//       },
//     },
//     account: {
//       providerAccountId: undefined,
//       type: 'credentials',
//       provider: 'credentials',
//     },
//     credentials: {
//       csrfToken: '9b2340c0bc208efde290c0f489ec392351fbe006a76b5529fb218595a3e85f1e',
//       email: 'suai.flag.hunter@gmail.com',
//       password: 'gA4OLUGDzJg0',
//     },
//   },
//   JWT_CALLBACK: {
//     token: {
//       name: undefined,
//       email: undefined,
//       picture: undefined,
//       sub: undefined,
//     },
//     user: {
//       accessToken:
//         'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjkxMTgxMDU1LCJleHAiOjE2OTExODQ2NTV9.zhzC7R0v-tGjoUzZ7IhoqQ334GeylEztcDlyv0CLw8w',
//       userInfo: {
//         id: 1,
//         name: '77220fb30fc5b7fa9bdf1bb26a0a3a69:579dd931eba61ddc',
//         surname: '77220fb30fc5b7fa9bdf1bb26a0a3a69:579dd931eba61ddc',
//         role: 'admin',
//         categories: [Object],
//       },
//     },
//     account: {
//       providerAccountId: undefined,
//       type: 'credentials',
//       provider: 'credentials',
//     },
//     isNewUser: false,
//     trigger: 'signIn',
//   },
//   JWT_CALLBACK_2: {
//     token: {
//       iat: 1691181055,
//       exp: 1693773055,
//       jti: '8bf83f10-84dd-4249-9b51-7b30cb141928',
//     },
//     session: undefined,
//   },
//   SESSION_CALLBACK: {
//     session: {
//       user: { name: undefined, email: undefined, image: undefined },
//       expires: '2023-09-03T20:39:59.146Z',
//     },
//     token: {
//       iat: 1691181055,
//       exp: 1693773055,
//       jti: '8bf83f10-84dd-4249-9b51-7b30cb141928',
//     },
//   },
// }
