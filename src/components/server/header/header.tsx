import { SignOutButton } from '@/components/client/button'
import Image from 'next/image'
import styles from './header.module.css'

export const Header = () => {
  return (
    <div className={styles.header_container}>
      <div className={styles.header_logo}>
        <Image src={'/brand.svg'} alt='Logo' height={50} width={350}></Image>
      </div>
      <SignOutButton />
    </div>
  )
}
