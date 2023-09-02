'use client'
import { UserService } from '@/services/userService'
import styles from './styles.module.css'
import Image from 'next/image'
import Link from 'next/link'

interface NewUserCardProps {
  data: {
    id: number
    name: string
    surname: string
    email: string
    student_card: string
  }
  card_href: string
}

export const NewUserCard = ({ data: { id, name, surname, email, student_card }, card_href }: NewUserCardProps) => {
  return (
    <Link href={card_href}>
      <div className={styles.container + ' card'}>
        <div className={styles.stud_container}>
          <img alt='Студенческий билет' src='/assets/certn51586.webp' />
        </div>
        <div className={styles.user_data}>
          <div className={styles.name}>{name + ' ' + surname}</div>
          <div className={styles.email}>{email}</div>
        </div>
        <div className={styles.buttons}>
          <div
            onClick={(e) => {
              e.preventDefault()
            }}
          >
            <Link href={card_href + '/reject'} className={styles.reject_btn + ' svg_container card'}>
              <Image src={'/assets/ui/reject.svg'} alt='Отклонить' width={120} height={40} />
            </Link>
          </div>
          <div
            onClick={(e) => {
              e.preventDefault()
            }}
          >
            <Link href={card_href + '/accept'} className={styles.accept_btn + ' svg_container card'}>
              <Image src={'/assets/ui/accept.svg'} alt='Добавить' width={120} height={40} />
            </Link>
          </div>
        </div>
      </div>
    </Link>
  )
}
