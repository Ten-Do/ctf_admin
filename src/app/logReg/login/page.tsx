'use client'
import { $login } from '@/actions/login'
import { User } from '@/types/user'
import { PATHS } from '@/urls'
import { showSnackbar } from '@/utils/feedback/snackbar'
import { SessionProvider, useSession } from 'next-auth/react'
import Link from 'next/link'
import { FormEventHandler } from 'react'
import styles from './styles.module.css'

const WrappedLogin = () => {
  const { update } = useSession()
  const login: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    $login(new FormData(e.target as HTMLFormElement))
      .then((userInfo: User) => {
        update(userInfo)
      })
      .catch(showSnackbar)
  }

  return (
    <div className={styles.form_container}>
      <form onSubmit={login}>
        <div className='input-container'>
          <input type='text' id='username' name='email' placeholder=' ' />
          <label htmlFor='username'>Username:</label>
        </div>

        <div className='input-container'>
          <input type='password' id='password' name='password' placeholder=' ' />
          <label htmlFor='password'>Password:</label>
        </div>
        <button type='submit' className='btn access'>
          Вход
        </button>
      </form>
      <Link href={PATHS.register} className='btn accent'>
        Зарегистрироваться
      </Link>
    </div>
  )
}

const Login = () => (
  <SessionProvider>
    <WrappedLogin />
  </SessionProvider>
)

export default Login
