import { SignOutButton } from '@/components/client/buttons/signOutButton'
import Image from 'next/image'
import styles from './header.module.css'

export const Header = () => {
  return (
    <div className={styles.header_container}>
      <div className={styles.header_logo}>
        <div className='svg_container'>
          <Image src='/logo.svg' alt='Next.js Logo' width={56} height={55} priority />
        </div>
        <p className={styles.header_logo_title}>HackProof Academy</p>
      </div>
      <SignOutButton />
    </div>
  )
}
