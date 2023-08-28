'use client'

import styles from './users.module.css'
import Image from 'next/image'
import { EndlessFeedPlaceholder } from '@/components/client/endlessFeed/endlessFeedPlaceholder'
import { UserCard } from '@/components/client/cards/user/userCard'
import { $getNewUsers } from '@/actions/getNotActivated'

const Users = () => {
  return (
    <>
      <div className={styles.header}>
        <h2>Пользователи</h2>
        <div className={styles.search}>
          <input type='text' />
          <div className={styles.img_search + ' svg_container'}>
            <Image src={'/assets/ui/loop.svg'} alt='loopSvg' width={25} height={25} />
          </div>
        </div>
      </div>
      <div className={styles.users_users_content}>
        <EndlessFeedPlaceholder
          className={styles.placeholder}
          ItemCard={UserCard}
          origin='/admin/users'
          loadMore={$getNewUsers}
        />
      </div>
    </>
  )
}
export default Users
