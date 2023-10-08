'use client'
import Image from 'next/image'
import styles from './requestCard.module.css'
import { User } from '@/types/user'
import Link from 'next/link'
import { $acceptCategoryRequest } from '@/actions/acceptCategoryRequest'
import { $rejectCategoryRequest } from '@/actions/rejectCategoryRequest'

const RequestCard = ({ data, card_href }: { data: User; card_href: string }) => {
  return (
    <Link href={card_href} className={styles.user + ' card'}>
      <div className={styles.info}>
        <p>{data.name} </p>
        <p>{data.surname}</p>
        <p className='code'> {data.category}</p>
      </div>
      <div className={styles.buttons}>
        <button
          onClick={(e) => {
            e.stopPropagation()
            e.preventDefault()
            $acceptCategoryRequest(data.id, data.category!)
          }}
          className={styles.plus_button + ' svg_container'}
        >
          <Image src={'/assets/ui/add.svg'} alt='' width={45} height={45} className='L_Plus' />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation()
            e.preventDefault()
            $rejectCategoryRequest(data.id, data.category!)
          }}
          className={styles.minus_button + ' svg_container'}
        >
          <Image src='/assets/ui/reject.svg' alt='' width={45} height={45} />
        </button>
      </div>
    </Link>
  )
}

export default RequestCard
