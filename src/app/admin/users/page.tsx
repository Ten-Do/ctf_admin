'use client'

import styles from './users.module.css'
import Image from 'next/image'
import { EndlessFeedPlaceholder } from '@/components/client/endlessFeed/endlessFeedPlaceholder'
import { UserCard } from '@/components/client/cards/user/userCard'
import { $getUsers } from '@/actions/getUsers'

const Users = () => {
  return (
    <>
      <div className={styles.header}>
        <h2>Пользователи</h2>
        <div className={styles.search_container}>
          <div className={styles.search_input}>
            <input type='text' />
          </div>
          <button className={styles.search_button + ' svg_container'} onClick={() => console.log(1)}>
            <Image src={'/assets/ui/loop.svg'} alt='loopSvg' width={22} height={22} />
          </button>
        </div>
      </div>
      <div className={styles.users_users_content}>
        <EndlessFeedPlaceholder
          className={styles.placeholder}
          ItemCard={UserCard}
          origin='/admin/users'
          loadMore={$getUsers}
        />
      </div>
    </>
  )
}
export default Users
