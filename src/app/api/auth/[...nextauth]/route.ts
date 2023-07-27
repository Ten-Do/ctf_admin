import NextAuth from 'next-auth/next'
import Yandex from 'next-auth/providers/yandex'

const handler = NextAuth({
  providers: [
    Yandex({
      clientId: process.env.YANDEX_CLIENT_ID as string,
      clientSecret: process.env.YANDEX_CLIENT_SECRET as string,
    }),
  ],
})

export { handler as GET, handler as POST }
