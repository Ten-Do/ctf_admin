'use client'
import styles from './styles.module.css'
import Image from 'next/image'
import Link from 'next/link'

interface UserCardProps {
  data: {
    id: number
    nickname: string
    name: string
    surname: string
    email: string
  }
  card_href: string
}

export const UserCard = ({ data: { id, nickname, name, surname, email }, card_href }: UserCardProps) => {
  return (
    <Link href={card_href} className={styles.card_container + ' card'}>
      <div className={styles.indivfo + ' trim-text'}>
        <h3 className={styles.nickname}>{nickname || 'NickName'}</h3>
        <div className={styles.name}>{name + ' ' + surname}</div>
        <div className={styles.email}>{email}</div>
      </div>

      <div onClick={(e) => e.stopPropagation()}>
        <Link href={`${card_href}/${nickname || email || 'NickName'}`} className={styles.del_btn + ' svg_container'}>
          <Image src={'/assets/ui/delete.svg'} alt='delSvg' width={40} height={40} />
        </Link>
      </div>
    </Link>
  )
}
