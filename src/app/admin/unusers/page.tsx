import styles from './unusers.module.css'
import Image from 'next/image'
import { $getNewUsers } from '@/actions/getNotActivated'
import { EndlessFeedPlaceholder, State } from '@/components/client/endlessFeed/endlessFeedPlaceholder'
import { NewUserCard } from '@/components/client/cards/newUser/newUser'



const Unusers = () => {

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
                <Image src={'/assets/ui/loop.svg'} alt='' width={26} height={26} />
              </div>
            </button>
          </div>
        </label>
      </div>
      <EndlessFeedPlaceholder ItemCard={NewUserCard} origin='/admin/unusers' loadMore={$getNewUsers} idKey='email'/>
    </div>
  )
}

export default Unusers
