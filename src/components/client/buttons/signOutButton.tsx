'use client'
import { signOut } from 'next-auth/react'
import Image from 'next/image'
export const SignOutButton = (): JSX.Element => {
  return (
    <>
      <div onClick={() => signOut()}>
        <Image src='/assets/ui/exit.svg' alt='Выйти' width={40} height={40}/>
      </div>
    </>
  )
}
