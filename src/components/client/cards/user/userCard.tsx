'use client'
import { UserService } from '@/services/userService'
import styles from './styles.module.css'
import Image from 'next/image'

interface UserCardProps {
  data: {
    nickname: string
    name: string
    surname: string
    email: string
  }
}

export const UserCard = ({ data: { nickname, name, surname, email } }: UserCardProps) => {
  return (
    <div className={styles.card_container + ' card'}>
      <div className={styles.info}>
        <h3 className={styles.nickname}>{nickname || 'NickName'}</h3>
        <div className={styles.name}>{name + ' ' + surname}</div>
        <div className={styles.email}>{email}</div>
      </div>

      <div className={styles.del_btn + ' svg_container'} onClick={() => UserService.delete(1)}>
        <Image src={'/assets/ui/delete.svg'} alt='delSvg' width={40} height={40} />
      </div>
    </div>
  )
}
