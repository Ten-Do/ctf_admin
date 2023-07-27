import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div>
      <div className={styles.center}>
        <Image src='/brand.svg' alt='Next.js Logo' width={580} height={97} priority />
      </div>
    </div>
  )

  // className={styles.logo}
}
