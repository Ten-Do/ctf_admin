'use client'
import styles from './styles.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { download } from '@/utils/files/downloadFile'
import { useEffect, useRef, useState } from 'react'

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
  const imgRef = useRef<HTMLImageElement>(null)

  const [blobSrc, setBlobSrc] = useState('/logo.png')
  useEffect(() => {
    download('/students/' + student_card)
      .then((blob) => {
        console.log(blob)
        if (blob) {
          setBlobSrc(URL.createObjectURL(blob))
          console.log(URL.createObjectURL(blob));
          
        }
      })
  }, [])
  return (
    <div className={styles.container + ' card'}>
      <div className={styles.stud_container}>
        <img alt='Студенческий билет' src={blobSrc} />
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
  )
}
