'use client'

import styles from './unusers.module.css'
import loopSvg from '../../../../public/assets/admin_icons/users_icons/loop.svg'
import delSvg from '../../../../public/assets/profile_icons/delete.svg'
import { UserService } from '@/services/userService'
import Image from 'next/image'
import { $getNewUsers } from '@/actions/getNotActivated'
import { EndlessFeedPlaceholder, State } from '@/components/client/endlessFeed/endlessFeedPlaceholder'

interface NewUserCardProps {
  data: {
    name: string
    surname: string
    email: string
    student_card: string
  }
}

const NewUserCard = ({ data: { name, surname, email, student_card } }: NewUserCardProps) => {
  return (
    <div className={styles.user_reg}>
      <div className={styles.user_data}>
        {/* <Image alt='Студенческий билет' src={'/assets/certn51586.webp'} height={160} width={420}></Image> */}
        <div className={styles.user_reg_data}>
          <div className={styles.name_surname}>
            <div className={styles.name_surname_p}>Имя Фамилия:</div>
            <div className={styles.name_input}>{name + ' ' + surname}</div>
          </div>
          <div className={styles.email}>
            <div className={styles.email_p}>Email:</div>
            <div className={styles.email_input}>{email}</div>
          </div>
        </div>
      </div>
      <div className={styles.reg_buttons}>
        <div className={styles.reg_delite} onClick={() => UserService.delete(1)}>
          <button>
            <div className='svg_container'>
              <Image src={delSvg} alt='' className={styles.L_Trash} />
            </div>
          </button>
        </div>
        <div className={styles.reg_aply} onClick={() => UserService.verifyRegistration('1mo', 'dsadas')}>
          <button>Добавить</button>
        </div>
      </div>
    </div>
  )
}

const Unusers = () => {
  const loadMore = async (page: number): Promise<State> => {
    return await $getNewUsers(page).then((data) => ({ data: data.users, nextPage: data.nextPage }))
  }
  return (
    <div className={styles.unusers}>
      <div className={styles.unusers_tittle}>
        <div className={styles.unusers_p}>Неподтверждённые пользователи</div>
        <label className={styles.users_search}>
          <div className={styles.search_input}>
            <input type='text' />
          </div>
          <div className={styles.img_search}>
            <button>
              <div className='svg_container'>
                <Image src={loopSvg} alt='' width={26} height={26} />
              </div>
            </button>
          </div>
        </label>
      </div>
      <EndlessFeedPlaceholder ItemCard={NewUserCard} origin='' loadMore={loadMore} />
    </div>
  )
}

export default Unusers
