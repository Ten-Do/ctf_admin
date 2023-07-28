import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div>
      <div className={styles.page_logo}>
        <Image src='/logo_colored.svg' alt='Next.js Logo' width={400} height={400} priority />
        {/* <Image src='/brand.svg' alt='Next.js Logo' width={580} height={97} priority /> */}
      </div>
    </div>
  )

  // className={styles.logo}
}
